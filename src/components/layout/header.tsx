import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { MoodBoardSheet } from '@/components/mood-board/mood-board-sheet';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-6 w-auto" />
        </Link>
        <MoodBoardSheet />
      </div>
    </header>
  );
}
