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

export async function sendContactForm(input: z.infer<typeof contactFormSchema>) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Or your preferred email service
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address from environment variables
      pass: process.env.GMAIL_PASS, // Your Gmail password or app password from environment variables
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender address
    to: 'martyturing@gmail.com', // Recipient address
    subject: `New Contact Form Submission from ${input.name}`, // Subject line
    text: `Name: ${input.name}\nEmail: ${input.email}\nMessage: ${input.message}`, // Plain text body
    html: `<p><strong>Name:</strong> ${input.name}</p><p><strong>Email:</strong> ${input.email}</p><p><strong>Message:</strong> ${input.message}</p>`, // HTML body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully');
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending contact form email:', error);
    // In a real application, you might want to return a more specific error message
    return { success: false, message: 'Failed to send message.' };
  }
}
