// A Genkit flow that takes a text query and returns personalized fabric suggestions.
'use server';
/**
 * @fileOverview A fabric suggestion AI agent based on text query.
 *
 * - fabricSuggestionFromQuery - A function that handles the fabric suggestion process.
 * - FabricSuggestionFromQueryInput - The input type for the fabricSuggestionFromQuery function.
 * - FabricSuggestionFromQueryOutput - The return type for the fabricSuggestionFromQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FabricSuggestionFromQueryInputSchema = z.object({
  query: z.string().describe('The query describing the desired fabric.'),
});
export type FabricSuggestionFromQueryInput = z.infer<typeof FabricSuggestionFromQueryInputSchema>;

const FabricSuggestionFromQueryOutputSchema = z.object({
  suggestions: z.array(
    z.object({
      fabricName: z.string().describe('The name of the fabric.'),
      description: z.string().describe('A detailed description of the fabric.'),
      imageUrl: z.string().describe('URL of an image of the fabric.'),
      properties: z.array(z.string()).describe('Key properties of the fabric.'),
    })
  ).describe('An array of fabric suggestions based on the query.'),
});
export type FabricSuggestionFromQueryOutput = z.infer<typeof FabricSuggestionFromQueryOutputSchema>;

export async function fabricSuggestionFromQuery(input: FabricSuggestionFromQueryInput): Promise<FabricSuggestionFromQueryOutput> {
  return fabricSuggestionFromQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'fabricSuggestionFromQueryPrompt',
  input: {schema: FabricSuggestionFromQueryInputSchema},
  output: {schema: FabricSuggestionFromQueryOutputSchema},
  prompt: `You are an expert in fabrics and textiles.  A user is looking for a fabric with the following description: {{{query}}}.  Suggest fabrics that would be appropriate, with detailed descriptions.  Provide a URL for an example image of the fabric.  Also list key properties for each fabric, such as \"durable\", \"soft\", \"water resistant\", etc.  Return the results as JSON in the following schema: {{$outputSchema}}`,
});

const fabricSuggestionFromQueryFlow = ai.defineFlow(
  {
    name: 'fabricSuggestionFromQueryFlow',
    inputSchema: FabricSuggestionFromQueryInputSchema,
    outputSchema: FabricSuggestionFromQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
