import type { FabricSuggestion } from '@/lib/types';
import { SuggestionCard } from './suggestion-card';
import { SuggestionSkeleton } from './suggestion-skeleton';

type SuggestionsGridProps = {
  loading: boolean;
  suggestions: FabricSuggestion[];
  onSelectFabric: (fabric: FabricSuggestion) => void;
};

export function SuggestionsGrid({ loading, suggestions, onSelectFabric }: SuggestionsGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SuggestionSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (suggestions.length === 0) {
    return null; // The container will show a toast message.
  }

  return (
    <div>
       <h2 className="font-headline text-3xl font-bold mb-6">Our Suggestions For You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {suggestions.map((fabric) => (
          <SuggestionCard key={fabric.fabricName} fabric={fabric} onSelectFabric={onSelectFabric} />
        ))}
      </div>
    </div>
  );
}
