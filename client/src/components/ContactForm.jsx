import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Unable to send message.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Email
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        Subject
        <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Telegram / support / moderation inquiry" />
      </label>

      <label>
        Message
        <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status && (
        <p className={`status-message ${status.type}`}>{status.message}</p>
      )}
    </form>
  );
}

export default ContactForm;
