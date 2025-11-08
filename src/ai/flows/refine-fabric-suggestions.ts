'use server';
/**
 * @fileOverview AI agent that refines fabric suggestions based on user criteria.
 *
 * - refineFabricSuggestions - A function to refine fabric suggestions.
 * - RefineFabricSuggestionsInput - Input type for the refineFabricSuggestions function.
 * - RefineFabricSuggestionsOutput - Return type for the refineFabricSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineFabricSuggestionsInputSchema = z.object({
  initialSuggestions: z
    .string()
    .describe('The initial list of fabric suggestions to refine.'),
  additionalCriteria: z
    .string()
    .describe(
      'Additional criteria provided by the user, such as preferred material, color, or style.'
    ),
});
export type RefineFabricSuggestionsInput = z.infer<typeof RefineFabricSuggestionsInputSchema>;

const RefineFabricSuggestionsOutputSchema = z.object({
  refinedSuggestions: z
    .string()
    .describe('The refined list of fabric suggestions based on the additional criteria.'),
});
export type RefineFabricSuggestionsOutput = z.infer<typeof RefineFabricSuggestionsOutputSchema>;

export async function refineFabricSuggestions(
  input: RefineFabricSuggestionsInput
): Promise<RefineFabricSuggestionsOutput> {
  return refineFabricSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refineFabricSuggestionsPrompt',
  input: {schema: RefineFabricSuggestionsInputSchema},
  output: {schema: RefineFabricSuggestionsOutputSchema},
  prompt: `You are an AI assistant specializing in refining fabric suggestions.

  The user has provided an initial list of fabric suggestions and additional criteria to refine the list.
  Your task is to refine the initial suggestions based on the additional criteria provided by the user.

  Initial Fabric Suggestions: {{{initialSuggestions}}}
  Additional Criteria: {{{additionalCriteria}}}

  Refined Fabric Suggestions:`, // Ensure the prompt ends in 'Refined Fabric Suggestions:'
});

const refineFabricSuggestionsFlow = ai.defineFlow(
  {
    name: 'refineFabricSuggestionsFlow',
    inputSchema: RefineFabricSuggestionsInputSchema,
    outputSchema: RefineFabricSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
