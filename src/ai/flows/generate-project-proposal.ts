'use server';

/**
 * @fileOverview An AI agent to generate project proposals.
 *
 * - generateProjectProposal - A function that generates a project proposal.
 * - GenerateProjectProposalInput - The input type for the generateProjectProposal function.
 * - GenerateProjectProposalOutput - The return type for the generateProjectProposal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectProposalInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the project requirements.'),
  desiredFeatures: z
    .string()
    .describe('A list of desired features for the project.'),
  targetAudience: z
    .string()
    .describe('Description of the target audience for the project.'),
  budget: z.string().describe('The budget allocated for the project.'),
  timeline: z.string().describe('The desired timeline for the project.'),
});
export type GenerateProjectProposalInput = z.infer<
  typeof GenerateProjectProposalInputSchema
>;

const GenerateProjectProposalOutputSchema = z.object({
  proposal: z.string().describe('The generated project proposal.'),
});
export type GenerateProjectProposalOutput = z.infer<
  typeof GenerateProjectProposalOutputSchema
>;

export async function generateProjectProposal(
  input: GenerateProjectProposalInput
): Promise<GenerateProjectProposalOutput> {
  return generateProjectProposalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectProposalPrompt',
  input: {schema: GenerateProjectProposalInputSchema},
  output: {schema: GenerateProjectProposalOutputSchema},
  prompt: `You are an AI assistant specializing in generating project proposals for a digital agency.

  Based on the following project details, create a comprehensive and persuasive project proposal.

  Project Description: {{{projectDescription}}}
  Desired Features: {{{desiredFeatures}}}
  Target Audience: {{{targetAudience}}}
  Budget: {{{budget}}}
  Timeline: {{{timeline}}}

  The proposal should include an introduction, proposed solutions, a timeline, and a cost estimate.
  Focus on how the agency's expertise can address the client's needs and achieve their goals.
  Be professional, clear, and concise.
  Make sure to provide next steps and a call to action.`,
});

const generateProjectProposalFlow = ai.defineFlow(
  {
    name: 'generateProjectProposalFlow',
    inputSchema: GenerateProjectProposalInputSchema,
    outputSchema: GenerateProjectProposalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
