'use client';

import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { MoodBoardSheet } from '@/components/mood-board/mood-board-sheet';
import { Button } from '../ui/button';
import { LogIn, LogOut, Users } from 'lucide-react';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function Header() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  const getInitials = (email: string | null | undefined) => {
    return email ? email.substring(0, 2).toUpperCase() : 'U';
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-6 w-auto" />
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/community">
              <Users className="mr-2 h-5 w-5" />
              Community
            </Link>
          </Button>
          <MoodBoardSheet />
          {isUserLoading ? (
            <div className="h-10 w-20 animate-pulse rounded-md bg-muted" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{getInitials(user.email)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      My Account
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" asChild>
              <Link href="/login">
                <LogIn className="mr-2" />
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
