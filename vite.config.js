import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// Custom plugin to handle API endpoints
const emailApiPlugin = () => {
  return {
    name: 'email-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        console.log('Contact API hit');
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          
          req.on('end', async () => {
            try {
              const { name, email, message } = JSON.parse(body);

              // Validate input
              if (!name || !email || !message) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 
                  success: false, 
                  message: 'Please provide name, email, and message' 
                }));
                return;
              }

              // Email validation
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email)) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 
                  success: false, 
                  message: 'Please provide a valid email address' 
                }));
                return;
              }

              // Import and use the email handler
              const { sendEmail } = await import('./api/email.js');
              const result = await sendEmail(name, email, message);

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(result));

            } catch (error) {
              console.error('Email sending error:', error);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ 
                success: false, 
                message: error.message || 'Failed to send email. Please try again later.' 
              }));
            }
          });
        } else {
          res.writeHead(405, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ 
            success: false, 
            message: 'Method not allowed' 
          }));
        }
      });

      // Health check endpoint
      server.middlewares.use('/api/health', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'OK', message: 'Server is running' }));
      });
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), emailApiPlugin()],
})
