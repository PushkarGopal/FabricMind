'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, LoaderCircle, Image as ImageIcon, X } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

type VisualSearchFormProps = {
  onSubmit: (dataUri: string) => void;
  isLoading: boolean;
};

export function VisualSearchForm({ onSubmit, isLoading }: VisualSearchFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 4 * 1024 * 1024) { // 4MB limit
        toast({
          variant: 'destructive',
          title: 'File too large',
          description: 'Please upload an image smaller than 4MB.',
        });
        return;
      }
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      toast({
        variant: 'destructive',
        title: 'No file selected',
        description: 'Please select an image to search.',
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUri = e.target?.result as string;
      onSubmit(dataUri);
    };
    reader.readAsDataURL(file);
  };
  
  const resetForm = () => {
    setFile(null);
    setPreview(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="w-full">
            <label
              htmlFor="visual-search-input"
              className={`relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-secondary transition-colors ${preview ? 'border-primary' : 'border-border'}`}
            >
              {preview && file ? (
                <>
                  <Image src={preview} alt={file.name} layout="fill" objectFit="contain" className="rounded-lg p-2" />
                  <Button type="button" size="icon" variant="destructive" className="absolute top-2 right-2 z-10 h-7 w-7" onClick={(e) => { e.preventDefault(); resetForm(); }}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove image</span>
                  </Button>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-muted-foreground">
                  <Upload className="w-8 h-8 mb-4" />
                  <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs">PNG, JPG or WEBP (MAX. 4MB)</p>
                </div>
              )}
            </label>
            <Input id="visual-search-input" ref={fileInputRef} type="file" className="hidden" onChange={handleFileChange} accept="image/png, image/jpeg, image/webp" />
          </div>
          <Button type="submit" disabled={isLoading || !file} className="w-full">
            {isLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <>
                <ImageIcon className="mr-2"/>
                Find Similar Fabrics
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
