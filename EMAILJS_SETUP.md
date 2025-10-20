# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact and referral forms on the Brigade Clinic website.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Once logged in, go to the **Email Services** section
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Templates

### Contact Form Template

1. Go to **Email Templates** section
2. Click **Create New Template**
3. Name it: `Contact Form - Brigade Clinic`
4. Set up the template with these variables:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have received a new contact form submission:

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Brigade Clinic contact form.
```

5. **Copy the Template ID** - you'll need this later

### Referral Form Template

1. Click **Create New Template** again
2. Name it: `Referral Form - Brigade Clinic`
3. Set up the template with these variables:

**Subject:** New Patient Referral from {{referrer_name}}

**Content:**
```
You have received a new patient referral:

REFERRER INFORMATION:
Name: {{referrer_name}}
Practice/Hospital: {{practice_name}}
Email: {{referrer_email}}

PATIENT INFORMATION:
Name: {{patient_name}}
Phone: {{patient_phone}}

REASON FOR REFERRAL:
{{reason}}

---
This email was sent from the Brigade Clinic referral form.
```

4. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key** - you'll need this later

## Step 5: Configure Environment Variables

1. In your project root, create a file named `.env.local` (if it doesn't exist)
2. Add the following variables with your actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
NEXT_PUBLIC_EMAILJS_REFERRAL_TEMPLATE_ID=your_referral_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_REFERRAL_TEMPLATE_ID=template_def456
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

## Step 6: Test the Forms

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact page (`/contact`)
3. Fill out and submit the form
4. Check your email inbox for the test message

5. Navigate to the Referrals page (`/referrals`)
6. Fill out and submit the form
7. Check your email inbox for the test referral

## Important Notes

### Email Delivery
- **Free Plan Limits:** EmailJS free plan allows 200 emails per month
- **Spam Filters:** Make sure to check your spam folder for test emails
- **Email Address:** All emails will be sent to `intake@brigadephysicians.com` as configured

### File Attachments (Referral Form)
- **Note:** EmailJS doesn't support file attachments directly
- The file upload field is currently present but files won't be sent via email
- To enable file uploads, you would need to:
  1. Use a file storage service (Cloudinary, AWS S3, etc.)
  2. Upload the file to the storage service
  3. Include the file URL in the email

### Security
- Never commit your `.env.local` file to version control
- The `.env.example` file is provided as a template
- Keep your EmailJS credentials secure

## Troubleshooting

### Emails Not Sending
1. Check that all environment variables are set correctly
2. Verify your EmailJS service is active
3. Check the browser console for error messages
4. Ensure your email service is properly connected in EmailJS dashboard

### Template Variables Not Working
1. Make sure variable names in templates match exactly (case-sensitive)
2. Use double curly braces: `{{variable_name}}`
3. Test templates in the EmailJS dashboard

### Rate Limiting
- If you hit the 200 emails/month limit, consider upgrading to a paid plan
- Or implement a backend solution with your own SMTP server

## Support

For EmailJS-specific issues, visit:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

For website-specific issues, contact your development team.
