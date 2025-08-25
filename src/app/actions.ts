'use server';

import { 
  generateProjectProposal,
  type GenerateProjectProposalInput,
  type GenerateProjectProposalOutput
} from '@/ai/flows/generate-project-proposal';
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
  // This is a placeholder. In a real application, you would send an email
  // or save the message to a database here.
  console.log('Received contact form submission:', input);
  // Simulate a successful submission
  return { success: true };
}
