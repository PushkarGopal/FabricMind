'use server';

/**
 * @fileOverview AI agent that summarizes fabric details from a given URL.
 *
 * - summarizeFabricDetails - A function that handles the summarization process.
 * - SummarizeFabricDetailsInput - The input type for the summarizeFabricDetails function.
 * - SummarizeFabricDetailsOutput - The return type for the summarizeFabricDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeFabricDetailsInputSchema = z.object({
  url: z.string().describe('The URL of the fabric details page.'),
});
export type SummarizeFabricDetailsInput = z.infer<typeof SummarizeFabricDetailsInputSchema>;

const SummarizeFabricDetailsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summary of the most important details of the fabric.'),
});
export type SummarizeFabricDetailsOutput = z.infer<typeof SummarizeFabricDetailsOutputSchema>;

export async function summarizeFabricDetails(
  input: SummarizeFabricDetailsInput
): Promise<SummarizeFabricDetailsOutput> {
  return summarizeFabricDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeFabricDetailsPrompt',
  input: {schema: SummarizeFabricDetailsInputSchema},
  output: {schema: SummarizeFabricDetailsOutputSchema},
  prompt: `You are an AI assistant designed to summarize the key details of a fabric from a given URL. The URL is: {{{url}}}. Extract and summarize the most important details of the fabric from the URL. Do not browse the internet. Use only the URL content provided. Return the summary in a concise manner.\n`,
});

const summarizeFabricDetailsFlow = ai.defineFlow(
  {
    name: 'summarizeFabricDetailsFlow',
    inputSchema: SummarizeFabricDetailsInputSchema,
    outputSchema: SummarizeFabricDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
