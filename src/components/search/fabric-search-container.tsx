'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TextSearch, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import type { FabricSuggestion } from '@/lib/types';
import { getFabricSuggestions, getVisualSearchResults } from '@/app/actions';

import { TextSearchForm } from './text-search-form';
import { VisualSearchForm } from './visual-search-form';
import { SuggestionsGrid } from '../results/suggestions-grid';
import { FabricDetailDialog } from '../details/fabric-detail-dialog';

export function FabricSearchContainer() {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<FabricSuggestion[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedFabric, setSelectedFabric] = useState<FabricSuggestion | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: error,
      });
      setError(null);
    }
  }, [error, toast]);

  const handleSearch = async (promise: Promise<any>) => {
    setLoading(true);
    setSuggestions([]);
    setError(null);
    try {
      const result = await promise;
      if (result.error) {
        setError(result.error);
      } else {
        setSuggestions(result.suggestions);
        if(result.suggestions.length === 0){
          toast({
            title: "No suggestions found",
            description: "Try a different search query or image.",
          });
        }
      }
    } catch (e: any) {
      setError(e.message || 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleTextSearch = async (query: string) => {
    await handleSearch(getFabricSuggestions({ query }));
  };

  const handleVisualSearch = async (photoDataUri: string) => {
    await handleSearch(getVisualSearchResults({ photoDataUri }));
  };
  
  const handleSelectFabric = (fabric: FabricSuggestion) => {
    setSelectedFabric(fabric);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-secondary/80">
            <TabsTrigger value="text">
              <TextSearch />
              Text Search
            </TabsTrigger>
            <TabsTrigger value="visual">
              <ImageIcon />
              Visual Search
            </TabsTrigger>
          </TabsList>
          <TabsContent value="text">
            <TextSearchForm onSubmit={handleTextSearch} isLoading={loading} />
          </TabsContent>
          <TabsContent value="visual">
            <VisualSearchForm onSubmit={handleVisualSearch} isLoading={loading} />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12">
        <SuggestionsGrid 
          loading={loading} 
          suggestions={suggestions}
          onSelectFabric={handleSelectFabric}
        />
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
