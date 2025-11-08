'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus } from 'lucide-react';
import type { FabricSuggestion } from '@/lib/types';
import { useMoodBoard } from '../mood-board/mood-board-provider';
import { FabricVisualizer } from '../visualization/fabric-visualizer';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '../ui/separator';

type FabricDetailDialogProps = {
  fabric: FabricSuggestion;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function FabricDetailDialog({ fabric, open, onOpenChange }: FabricDetailDialogProps) {
  const { addToMoodBoard } = useMoodBoard();
  const { toast } = useToast();

  const handlePurchase = () => {
    toast({
      title: 'Purchase not available',
      description: 'This is a demo. Vendor integration is not implemented.',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader className="pr-10">
          <DialogTitle className="font-headline text-3xl">{fabric.fabricName}</DialogTitle>
          <DialogDescription>{fabric.description}</DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="grid md:grid-cols-2 gap-6 overflow-y-auto flex-1 p-1">
          <div className="space-y-4">
             <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                <Image
                    src={fabric.imageUrl}
                    alt={fabric.fabricName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 40vw"
                    data-ai-hint="fabric swatch"
                />
             </div>
             <div>
                <h3 className="font-headline text-xl mb-2">Properties</h3>
                <div className="flex flex-wrap gap-2">
                    {fabric.properties.map((prop) => (
                        <Badge key={prop} variant="secondary">{prop}</Badge>
                    ))}
                </div>
             </div>
             <div className="flex gap-2 pt-4">
                <Button onClick={handlePurchase} className="w-full">
                    <ShoppingCart className="mr-2" /> Purchase
                </Button>
                <Button variant="outline" className="w-full" onClick={() => addToMoodBoard(fabric)}>
                    <Plus className="mr-2"/> Add to Mood Board
                </Button>
             </div>
          </div>
          <div className="space-y-4">
             <h3 className="font-headline text-xl">Virtual Visualization</h3>
             <FabricVisualizer fabricImageUrl={fabric.imageUrl} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
