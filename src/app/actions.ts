'use server';

import { 
  generateProjectProposal,
  type GenerateProjectProposalInput,
  type GenerateProjectProposalOutput
} from '@/ai/flows/generate-project-proposal';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { marked } from 'marked'; 

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function generateProjectProposalAction(input: GenerateProjectProposalInput): Promise<GenerateProjectProposalOutput> {
  return await generateProjectProposal(input);
}

export async function sendProjectProposalAction(
  proposal: string, 
  userInput: { userName: string, userEmail: string }
) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error('Gmail credentials not configured in .env file');
    return { success: false, message: 'Server email configuration is incomplete.' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const proposalHtml = marked.parse(proposal);

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: userInput.userEmail, // CHANGE: Send the proposal directly to the client
    cc: process.env.GMAIL_USER, // Keep a copy for your records
    subject: `Your Custom Project Proposal from Evolved Agency`,
    html: `
<div style="font-family: Inter, 'sans-serif'; line-height: 1.6; color: hsl(240 10% 3.9%); background-color: hsl(0 0% 96.1%); padding: 20px;">
        
        <div style="margin-bottom: 20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: hsl(217.2 91.2% 59.8%);">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
        </div>
        
        <p>Hello ${userInput.userName},</p>
        <p>Thank you for taking the time to share your project details. We have reviewed your information and are pleased to provide a custom proposal tailored to your needs.</p>
        
        <h2 style="color: hsl(217.2 91.2% 59.8%); font-family: Inter, 'sans-serif';">Project Proposal</h2>
        <div style="border-left: 4px solid hsl(217.2 91.2% 59.8%); padding-left: 15px; background-color: #f4f4f5; padding: 20px;">
          <div style="font-size: 14px; line-height: 1.6;">${proposalHtml}</div>
        </div>

        <p>We are confident that our expertise can help you achieve your goals. Please feel free to schedule a call with us to discuss this proposal in more detail.</p>
        <p>Sincerely,</p>
        <p>The Evolved Agency Team</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Project proposal email sent successfully');
    return { success: true, message: 'Proposal sent successfully!' };
  } catch (error) {
    console.error('Error sending project proposal email:', error);
    return { success: false, message: 'Failed to send proposal.' };
  }
}

export async function sendContactForm(input: z.infer<typeof contactFormSchema>) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error('Gmail credentials not configured in .env file');
    return { success: false, message: 'Server email configuration is incomplete.' };
  }
  // IMPORTANT: Using Gmail requires setting up an "App Password" for security.
  // Your regular password will not work.
  // See: https://support.google.com/accounts/answer/185833
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address from .env
      pass: process.env.GMAIL_PASS, // Your Gmail app password from .env
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // The email address that will receive the form submissions
    subject: `New Contact Form Submission from ${input.name}`,
    text: `Name: ${input.name}\nEmail: ${input.email}\nMessage: ${input.message}`,
    html: `<p><strong>Name:</strong> ${input.name}</p><p><strong>Email:</strong> ${input.email}</p><p><strong>Message:</strong> ${input.message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully');
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending contact form email:', error);
    return { success: false, message: 'Failed to send message.' };
  }
}
