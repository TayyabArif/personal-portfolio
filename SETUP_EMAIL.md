# Email Setup Guide

## Prerequisites

1. **Gmail Account**: You need a Gmail account to send emails
2. **App Password**: You need to generate an App Password for your Gmail account

## Step 1: Generate Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" tab
3. Enable "2-Step Verification" if not already enabled
4. Go to "App passwords" (under 2-Step Verification)
5. Select "Mail" as the app and "Other" as the device
6. Generate the app password
7. Copy the 16-character password (you'll need this)

## Step 2: Create Environment File

Create a `.env` file in the root directory of your project:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_16_character_app_password
PORT=5000
```

**Important**: Replace `your_gmail@gmail.com` with your actual Gmail address and `your_16_character_app_password` with the app password you generated.

## Step 3: Install Dependencies

Run the following command to install the new dependencies:

```bash
npm install --legacy-peer-deps
```

## Step 4: Start the Application

Everything runs on a single server! Just run:

```bash
npm run dev
```

This will start both the frontend and backend API on the same server.

## Step 5: Test the Contact Form

1. Open your application in the browser (usually http://localhost:5173)
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email (tayyab.dev12@gmail.com) for the received message

## How It Works

- **Single Server**: The Vite development server now includes a custom plugin that handles email API endpoints
- **API Endpoints**: 
  - `/api/contact` - Handles contact form submissions
  - `/api/health` - Health check endpoint
- **Email Delivery**: Uses your Gmail SMTP to send emails to tayyab.dev12@gmail.com

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**: 
   - Make sure you're using the App Password, not your regular Gmail password
   - Ensure 2-Step Verification is enabled

2. **"Less secure app access" error**:
   - App passwords are the recommended approach for this setup

3. **Email not received**:
   - Check your spam folder
   - Verify the email address in the vite.config.js file (currently set to tayyab.dev12@gmail.com)

4. **SMTP connection issues**:
   - Verify your SMTP settings are correct
   - Check that your Gmail account allows less secure app access or use App Passwords

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore` to prevent accidental commits
- App passwords are more secure than regular passwords for this use case
- Consider using environment variables in production deployments

## Production Deployment

For production, you'll need to:
1. Set up proper environment variables on your hosting platform
2. Consider using a service like SendGrid or AWS SES for better email delivery
3. The API endpoints will need to be configured on your production server

## Current Configuration

Your current setup uses:
- **SMTP Host**: smtp.gmail.com
- **SMTP Port**: 587
- **SMTP User**: haider.bajwa.111@gmail.com
- **Target Email**: tayyab.dev12@gmail.com
- **Server**: Single Vite development server with integrated API 