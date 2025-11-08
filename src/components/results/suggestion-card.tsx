'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Plus } from 'lucide-react';
import type { FabricSuggestion } from '@/lib/types';
import { useMoodBoard } from '../mood-board/mood-board-provider';

type SuggestionCardProps = {
  fabric: FabricSuggestion;
  onSelectFabric: (fabric: FabricSuggestion) => void;
};

export function SuggestionCard({ fabric, onSelectFabric }: SuggestionCardProps) {
  const { addToMoodBoard } = useMoodBoard();

  return (
    <Card className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image
            src={fabric.imageUrl}
            alt={fabric.fabricName}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint="fabric texture"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-headline truncate">{fabric.fabricName}</CardTitle>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{fabric.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="w-full flex gap-2">
          <Button variant="outline" size="sm" className="w-full" onClick={() => onSelectFabric(fabric)}>
            <Eye />
            Details
          </Button>
          <Button size="sm" className="w-full" onClick={() => addToMoodBoard(fabric)}>
            <Plus />
            Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
