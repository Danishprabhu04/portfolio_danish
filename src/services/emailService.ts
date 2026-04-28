import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('x8QCNyFXnlDheoeZ6');

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_x06rr88',
  TEMPLATE_ID: 'template_rafnwhm',
  PUBLIC_KEY: 'x8QCNyFXnlDheoeZ6',
  RECEIVER_EMAIL: 'danishprabhu27@gmail.com',
};

export interface EmailData {
  to_email: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    const templateParams = {
      to_email: EMAIL_CONFIG.RECEIVER_EMAIL,
      from_name: data.from_name,
      from_email: data.from_email,
      subject: data.subject,
      message: data.message,
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}
