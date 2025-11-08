'use server';

/**
 * @fileOverview AI agent that finds similar fabrics based on an uploaded image.
 *
 * - visualSearchForFabrics - A function that handles the fabric search process.
 * - VisualSearchForFabricsInput - The input type for the visualSearchForFabrics function.
 * - VisualSearchForFabricsOutput - The return type for the visualSearchForFabrics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VisualSearchForFabricsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of a fabric, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type VisualSearchForFabricsInput = z.infer<typeof VisualSearchForFabricsInputSchema>;

const VisualSearchForFabricsOutputSchema = z.object({
  suggestions: z
    .array(
      z.object({
        fabricName: z.string().describe('The name of the fabric.'),
        description: z.string().describe('A detailed description of the fabric.'),
        imageUrl: z.string().describe('URL of an image of the fabric.'),
        properties: z.array(z.string()).describe('Key properties of the fabric.'),
      })
    )
    .describe('A list of similar fabric options found on the platform.'),
});
export type VisualSearchForFabricsOutput = z.infer<typeof VisualSearchForFabricsOutputSchema>;

export async function visualSearchForFabrics(
  input: VisualSearchForFabricsInput
): Promise<VisualSearchForFabricsOutput> {
  return visualSearchForFabricsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'visualSearchForFabricsPrompt',
  input: {schema: VisualSearchForFabricsInputSchema},
  output: {schema: VisualSearchForFabricsOutputSchema},
  prompt: `You are an AI assistant designed to find similar fabric options based on an image uploaded by the user.

  Analyze the provided image: {{media url=photoDataUri}} and identify key characteristics such as pattern, texture, color, and material.
  Based on these characteristics, find similar fabric options available on the platform. Provide a URL for an example image of the fabric. Also list key properties for each fabric, such as \"durable\", \"soft\", \"water resistant\", etc.  Return the results as JSON in the following schema: {{$outputSchema}}`,
});

const visualSearchForFabricsFlow = ai.defineFlow(
  {
    name: 'visualSearchForFabricsFlow',
    inputSchema: VisualSearchForFabricsInputSchema,
    outputSchema: VisualSearchForFabricsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
