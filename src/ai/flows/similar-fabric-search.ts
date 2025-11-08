'use server';

/**
 * @fileOverview AI agent that finds similar fabrics based on an uploaded image.
 *
 * - findSimilarFabrics - A function that handles the fabric search process.
 * - SimilarFabricSearchInput - The input type for the findSimilarFabrics function.
 * - SimilarFabricSearchOutput - The return type for the findSimilarFabrics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimilarFabricSearchInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of a fabric, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type SimilarFabricSearchInput = z.infer<typeof SimilarFabricSearchInputSchema>;

const SimilarFabricSearchOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of similar fabric options found on the platform.'),
});
export type SimilarFabricSearchOutput = z.infer<typeof SimilarFabricSearchOutputSchema>;

export async function findSimilarFabrics(
  input: SimilarFabricSearchInput
): Promise<SimilarFabricSearchOutput> {
  return similarFabricSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'similarFabricSearchPrompt',
  input: {schema: SimilarFabricSearchInputSchema},
  output: {schema: SimilarFabricSearchOutputSchema},
  prompt: `You are an AI assistant designed to find similar fabric options based on an image uploaded by the user.

  Analyze the provided image and identify key characteristics such as pattern, texture, color, and material.
  Based on these characteristics, find similar fabric options available on the platform.

  Return a list of suggestions in the format of an array. For example: [\