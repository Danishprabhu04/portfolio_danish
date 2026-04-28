import emailjs from '@emailjs/browser';

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_x06rr88',
  TEMPLATE_ID: 'template_rafnwhm',
  PUBLIC_KEY: 'neCxOaxG7SPm7VY-7',
  RECEIVER_EMAIL: 'danishprabhu27@gmail.com',
};

// Initialize EmailJS
try {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
} catch (error) {
  console.warn('EmailJS init warning:', error);
}

export interface EmailData {
  to_email: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  user_email?: string; // User's email for reply-to
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    if (!data.from_name || !data.from_email || !data.subject || !data.message) {
      return { success: false, error: 'Missing required fields' };
    }

    // Send to receiver's email with all necessary template variables
    const templateParams = {
      to_email: EMAIL_CONFIG.RECEIVER_EMAIL,
      from_name: data.from_name,
      from_email: data.from_email,
      reply_to: data.from_email,
      subject: data.subject,
      message: data.message,
      // Add these in case the template expects them
      user_email: data.from_email,
      receiver_email: EMAIL_CONFIG.RECEIVER_EMAIL,
    };

    console.log('Sending email with params:', templateParams);

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    console.log('EmailJS response:', response);

    if (response.status === 200) {
      return { success: true };
    }
    return { success: false, error: `Email failed with status: ${response.status}` };
  } catch (error) {
    let errorMessage = 'Unknown error';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'object' && error !== null) {
      errorMessage = JSON.stringify(error);
    }
    
    console.error('Email sending error:', errorMessage, error);
    return { success: false, error: errorMessage };
  }
}
