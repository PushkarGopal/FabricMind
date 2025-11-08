'use client';

import Image from 'next/image';
import { LayoutGrid, ShoppingCart, Share2, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetDescription,
} from '@/components/ui/sheet';
import { useMoodBoard } from './mood-board-provider';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '../ui/scroll-area';

export function MoodBoardSheet() {
  const { moodBoard, removeFromMoodBoard, clearMoodBoard } = useMoodBoard();
  const { toast } = useToast();

  const handleShare = () => {
    toast({
      title: 'Sharing not available',
      description: 'This is a demo. Sharing functionality is not implemented.',
    });
  };

  const handlePurchase = () => {
    toast({
      title: 'Purchase not available',
      description: 'This is a demo. Vendor integration is not implemented.',
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <LayoutGrid className="mr-2 h-5 w-5" />
          Mood Board
          {moodBoard.length > 0 && (
            <Badge variant="secondary" className="ml-2">
              {moodBoard.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Mood Board</SheetTitle>
          <SheetDescription>
            Collect, organize, and visualize your favorite fabrics.
          </SheetDescription>
        </SheetHeader>
        {moodBoard.length > 0 ? (
          <>
            <ScrollArea className="flex-1 -mx-6">
              <div className="grid grid-cols-2 gap-4 px-6 py-4">
                {moodBoard.map((fabric) => (
                  <div key={fabric.fabricName} className="group relative">
                    <Image
                      src={fabric.imageUrl}
                      alt={fabric.fabricName}
                      width={200}
                      height={200}
                      className="rounded-md object-cover aspect-square"
                      data-ai-hint="fabric pattern"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => removeFromMoodBoard(fabric.fabricName)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    <p className="text-sm font-medium mt-2 truncate">{fabric.fabricName}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <SheetFooter className="mt-auto">
              <div className="flex flex-col gap-2 w-full">
                <Button onClick={handlePurchase} className="w-full">
                  <ShoppingCart className="mr-2" /> Purchase Fabrics
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 className="mr-2" /> Share
                  </Button>
                  <Button variant="destructive" onClick={clearMoodBoard}>
                    <Trash2 className="mr-2" /> Clear All
                  </Button>
                </div>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground">
            <LayoutGrid className="h-12 w-12 mb-4" />
            <h3 className="text-lg font-semibold">Your Mood Board is Empty</h3>
            <p className="text-sm">Add fabrics you like to see them here.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
