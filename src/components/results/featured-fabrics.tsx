'use client';

import { useState } from 'react';
import { featuredFabrics } from '@/lib/featured-fabrics';
import { FabricSuggestion } from '@/lib/types';
import { SuggestionCard } from './suggestion-card';
import { FabricDetailDialog } from '../details/fabric-detail-dialog';

export function FeaturedFabrics() {
  const [selectedFabric, setSelectedFabric] = useState<FabricSuggestion | null>(null);

  const handleSelectFabric = (fabric: FabricSuggestion) => {
    setSelectedFabric(fabric);
  };

  return (
    <>
      <div className="text-center">
          <h2 className="font-headline text-3xl font-bold">Featured Fabrics</h2>
          <p className="mt-2 text-muted-foreground">Get inspired by some of our favorite textiles.</p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredFabrics.map((fabric) => (
          <SuggestionCard key={fabric.fabricName} fabric={fabric} onSelectFabric={handleSelectFabric} />
        ))}
      </div>
      {selectedFabric && (
        <FabricDetailDialog
          fabric={selectedFabric}
          open={!!selectedFabric}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setSelectedFabric(null);
            }
          }}
        />
      )}
    </>
  );
}
