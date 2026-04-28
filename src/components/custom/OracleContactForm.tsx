import { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { EmailData, sendEmail } from '@/services/emailService';
import './OracleContactForm.css';

interface OracleContactFormProps {
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export function OracleContactForm({ onClose, onSuccess }: OracleContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Invalid email format');
      return false;
    }
    if (!formData.subject.trim()) {
      setError('Subject is required');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    const emailData: EmailData = {
      to_email: 'danishprabhu27@gmail.com', // Danish's email
      from_name: formData.name,
      from_email: formData.email, // User's email for reply
      subject: formData.subject,
      message: formData.message,
      user_email: formData.email, // Explicitly share user's email
    };

    const result = await sendEmail(emailData);
    setLoading(false);

    if (result.success) {
      setSuccess(true);
      const successMsg = `✓ Message transmitted successfully!\n\nDanish will receive your message at: ${formData.email}\nExpect a reply within 24 hours.`;
      onSuccess(successMsg);
      setTimeout(() => {
        onClose();
      }, 2500);
    } else {
      setError(result.error || 'Failed to send message. Please try again.');
    }
  };

  return (
    <div className="oracle-contact-form-container">
      <div className="oracle-form-header">
        <h3>DIRECT_MESSAGE_INTERFACE</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <form onSubmit={handleSubmit} className="oracle-contact-form">
        <div className="form-group">
          <label htmlFor="name">YOUR_NAME:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">YOUR_EMAIL:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">SUBJECT:</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Message subject"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={5}
            disabled={loading}
          />
        </div>

        {error && (
          <div className="form-error">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="form-success">
            <Check size={16} />
            <span>Message transmitted!</span>
          </div>
        )}

        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={onClose}
            disabled={loading}
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="submit-btn"
            disabled={loading || success}
          >
            {loading ? 'TRANSMITTING...' : 'SEND_MESSAGE'} 
            {!loading && <Send size={14} />}
          </button>
        </div>
      </form>
    </div>
  );
}
