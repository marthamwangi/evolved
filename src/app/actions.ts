'use server';

import { 
  generateProjectProposal,
  type GenerateProjectProposalInput,
  type GenerateProjectProposalOutput
} from '@/ai/flows/generate-project-proposal';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function generateProjectProposalAction(input: GenerateProjectProposalInput): Promise<GenerateProjectProposalOutput> {
  return await generateProjectProposal(input);
}

export async function sendProjectProposalAction(proposal: string, userInput: {userName: string, userEmail: string}) {
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

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `Evolved Project Proposal for ${userInput.userName}...`,
    text: `Here is the edited project proposal:\n\n--- from (${userInput.userEmail})`,
    html: `<p>Here is the edited project proposal:</p><pre style="white-space: pre-wrap; font-family: sans-serif;">${proposal.substring(0, 50)}.</pre>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Edited proposal email sent successfully');
    return { success: true, message: 'Proposal sent successfully!' };
  } catch (error) {
    console.error('Error sending edited proposal email:', error);
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
