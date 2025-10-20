import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }
};

// Send contact form email
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      subject: formData.subject,
      message: formData.message,
      to_email: 'intake@brigadephysicians.com',
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};

// Send referral form email
export const sendReferralEmail = async (formData) => {
  try {
    const templateParams = {
      referrer_name: formData.referrerName,
      practice_name: formData.practiceName,
      referrer_email: formData.referrerEmail,
      patient_name: formData.patientName,
      patient_phone: formData.patientPhone,
      reason: formData.reason,
      to_email: 'intake@brigadephysicians.com',
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_REFERRAL_TEMPLATE_ID,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
