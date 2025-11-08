'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Search, LoaderCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const formSchema = z.object({
  query: z.string().min(10, {
    message: 'Please describe your desired fabric in at least 10 characters.',
  }),
});

type TextSearchFormProps = {
  onSubmit: (query: string) => void;
  isLoading: boolean;
};

export function TextSearchForm({ onSubmit, isLoading }: TextSearchFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: '',
    },
  });

  function handleFormSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values.query);
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="e.g., a durable, soft blue cotton for a sofa"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                'Find My Fabric'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
