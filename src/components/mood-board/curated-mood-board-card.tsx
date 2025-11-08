import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { CuratedMoodBoard } from '@/lib/curated-mood-boards';

type CuratedMoodBoardCardProps = {
    board: CuratedMoodBoard;
};

export function CuratedMoodBoardCard({ board }: CuratedMoodBoardCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="font-headline">{board.title}</CardTitle>
        <CardDescription>{board.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-3 gap-2">
            {board.fabrics.slice(0, 6).map((fabric, index) => (
                <div key={index} className="relative aspect-square">
                    <Image
                        src={fabric.imageUrl}
                        alt={fabric.fabricName}
                        fill
                        className="object-cover rounded-md"
                        sizes="10vw"
                        data-ai-hint="fabric swatch"
                    />
                </div>
            ))}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">Curated by {board.author}</p>
      </CardFooter>
    </Card>
  );
}
