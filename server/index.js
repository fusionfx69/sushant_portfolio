import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const receivedMessages = [];

app.use(cors());
app.use(express.json());

const smtpTransport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 587),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: subject || `New portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'Portfolio contact'}\n\n${message}`
  };

  try {
    if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await smtpTransport.sendMail(mailOptions);
    } else {
      console.log('Contact form submission:', mailOptions);
    }

    const savedMessage = { id: receivedMessages.length + 1, name, email, subject, message, receivedAt: new Date().toISOString() };
    receivedMessages.unshift(savedMessage);

    return res.json({ status: 'success', message: 'Contact request received.', data: savedMessage });
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ error: 'Unable to send contact message right now.' });
  }
});

app.get('/api/messages', (req, res) => {
  res.json(receivedMessages.slice(0, 20));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
