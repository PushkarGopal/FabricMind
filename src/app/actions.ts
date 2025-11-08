'use server';

import {
  fabricSuggestionFromQuery,
  type FabricSuggestionFromQueryInput,
} from '@/ai/flows/fabric-suggestion-from-query';
import {
  visualSearchForFabrics,
  type VisualSearchForFabricsInput,
} from '@/ai/flows/visual-search-for-fabrics';

export async function getFabricSuggestions(input: FabricSuggestionFromQueryInput) {
  try {
    const result = await fabricSuggestionFromQuery(input);
    if (!result || !result.suggestions) {
      return { suggestions: [], error: 'Failed to get suggestions. The AI returned an unexpected response.' };
    }
    return result;
  } catch (error) {
    console.error('Error getting fabric suggestions:', error);
    return { suggestions: [], error: 'An error occurred while fetching fabric suggestions.' };
  }
}

export async function getVisualSearchResults(input: VisualSearchForFabricsInput) {
  try {
    const result = await visualSearchForFabrics(input);
    if (!result || !result.suggestions) {
      return { suggestions: [], error: 'Failed to perform visual search. The AI returned an unexpected response.' };
    }
    return result;
  } catch (error) {
    console.error('Error during visual search:', error);
    return { suggestions: [], error: 'An error occurred during visual search.' };
  }
}
