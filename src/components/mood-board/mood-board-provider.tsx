'use client';

import { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from 'react';
import type { FabricSuggestion } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface MoodBoardContextType {
  moodBoard: FabricSuggestion[];
  addToMoodBoard: (fabric: FabricSuggestion) => void;
  removeFromMoodBoard: (fabricName: string) => void;
  clearMoodBoard: () => void;
}

const MoodBoardContext = createContext<MoodBoardContextType | undefined>(undefined);

export function MoodBoardProvider({ children }: { children: ReactNode }) {
  const [moodBoard, setMoodBoard] = useState<FabricSuggestion[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedMoodBoard = localStorage.getItem('moodBoard');
      if (storedMoodBoard) {
        setMoodBoard(JSON.parse(storedMoodBoard));
      }
    } catch (error) {
      console.error('Failed to load mood board from localStorage', error);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem('moodBoard', JSON.stringify(moodBoard));
      } catch (error) {
        console.error('Failed to save mood board to localStorage', error);
      }
    }
  }, [moodBoard, isMounted]);

  const addToMoodBoard = useCallback((fabric: FabricSuggestion) => {
    let wasAdded = false;
    let alreadyExists = false;

    setMoodBoard((prev) => {
      if (prev.some((item) => item.fabricName === fabric.fabricName)) {
        alreadyExists = true;
        return prev;
      }
      wasAdded = true;
      return [...prev, fabric];
    });

    if (alreadyExists) {
        toast({
            title: "Already in Mood Board",
            description: `${fabric.fabricName} is already on your mood board.`,
        });
    } else if (wasAdded) {
        toast({
            title: "Added to Mood Board",
            description: `Successfully added ${fabric.fabricName}.`,
        });
    }
  }, [toast]);

  const removeFromMoodBoard = useCallback((fabricName: string) => {
    setMoodBoard((prev) => prev.filter((item) => item.fabricName !== fabricName));
    toast({
        title: "Removed from Mood Board",
        variant: "destructive"
    })
  }, [toast]);

  const clearMoodBoard = useCallback(() => {
    setMoodBoard([]);
  }, []);

  return (
    <MoodBoardContext.Provider value={{ moodBoard, addToMoodBoard, removeFromMoodBoard, clearMoodBoard }}>
      {children}
    </MoodBoardContext.Provider>
  );
}

export function useMoodBoard() {
  const context = useContext(MoodBoardContext);
  if (context === undefined) {
    throw new Error('useMoodBoard must be used within a MoodBoardProvider');
  }
  return context;
}
