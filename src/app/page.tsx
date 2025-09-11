'use client';

import { useState } from 'react';
import type { GeneratePersonalizedRoadmapOutput } from '@/ai/flows/generate-personalized-roadmap';
import type { FormValues } from '@/lib/types';
import { generateRoadmapAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

import { CompassIcon } from '@/components/icons';
import CareerForm from '@/components/career-form';
import LoadingState from '@/components/loading-state';
import RoadmapDisplay from '@/components/roadmap-display';

type View = 'form' | 'loading' | 'results';

export default function Home() {
  const [view, setView] = useState<View>('form');
  const [roadmapData, setRoadmapData] = useState<GeneratePersonalizedRoadmapOutput | null>(null);
  const { toast } = useToast();

  const handleFormSubmit = async (data: FormValues) => {
    setView('loading');
    const result = await generateRoadmapAction(data);

    if (result.success && result.data) {
      setRoadmapData(result.data);
      setView('results');
    } else {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: result.error || 'Failed to generate roadmap. Please try again.',
      });
      setView('form');
    }
  };
  
  const handleReset = () => {
    setRoadmapData(null);
    setView('form');
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm bg-card">
        <div className="flex items-center gap-2">
          <CompassIcon className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Career Compass
          </h1>
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 md:p-8 flex items-start justify-center">
        <div className="w-full max-w-6xl">
          {view === 'form' && <CareerForm onSubmit={handleFormSubmit} />}
          {view === 'loading' && <LoadingState />}
          {view === 'results' && roadmapData && <RoadmapDisplay data={roadmapData} onReset={handleReset}/>}
        </div>
      </main>
    </div>
  );
}
