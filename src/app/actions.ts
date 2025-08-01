'use server';

import { 
  generateProjectProposal,
  type GenerateProjectProposalInput,
  type GenerateProjectProposalOutput
} from '@/ai/flows/generate-project-proposal';

export async function generateProjectProposalAction(input: GenerateProjectProposalInput): Promise<GenerateProjectProposalOutput> {
  return await generateProjectProposal(input);
}
