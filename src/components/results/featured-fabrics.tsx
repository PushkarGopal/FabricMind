'use client';

import { useState, useRef } from 'react';
import Autoplay from "embla-carousel-autoplay"
import { featuredFabrics } from '@/lib/featured-fabrics';
import { FabricSuggestion } from '@/lib/types';
import { SuggestionCard } from './suggestion-card';
import { FabricDetailDialog } from '../details/fabric-detail-dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function FeaturedFabrics() {
  const [selectedFabric, setSelectedFabric] = useState<FabricSuggestion | null>(null);
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const handleSelectFabric = (fabric: FabricSuggestion) => {
    setSelectedFabric(fabric);
  };

  return (
    <>
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold">Featured Fabrics</h2>
        <p className="mt-2 text-muted-foreground">Get inspired by some of our favorite textiles.</p>
      </div>
      <Carousel 
        className="mt-8 w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
            loop: true,
        }}
      >
        <CarouselContent>
          {featuredFabrics.map((fabric) => (
            <CarouselItem key={fabric.fabricName} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <SuggestionCard fabric={fabric} onSelectFabric={handleSelectFabric} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
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
