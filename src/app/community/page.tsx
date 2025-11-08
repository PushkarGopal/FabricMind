import { Header } from '@/components/layout/header';
import { CuratedMoodBoardCard } from '@/components/mood-board/curated-mood-board-card';
import { curatedMoodBoards } from '@/lib/curated-mood-boards';

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Community Mood Boards
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Get inspired by our curated collections and see what others are creating.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curatedMoodBoards.map((board) => (
                <CuratedMoodBoardCard key={board.id} board={board} />
            ))}
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>Created by Pushkar Gopal</p>
      </footer>
    </div>
  );
}
