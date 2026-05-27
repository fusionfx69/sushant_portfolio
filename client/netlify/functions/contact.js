import nodemailer from 'nodemailer';

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body = {};
  try {
    body = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { name, email, subject, message } = body;
  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Name, email, and message are required.' }) };
  }

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: subject || `New portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'Portfolio contact'}\n\n${message}`
  };

  try {
    if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT || 587),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      await transporter.sendMail(mailOptions);
    } else {
      console.log('Netlify function contact submission:', mailOptions);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'success', message: 'Contact request received.' })
    };
  } catch (error) {
    console.error('Failed to send email from function:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Unable to send contact message right now.' }) };
  }
};
