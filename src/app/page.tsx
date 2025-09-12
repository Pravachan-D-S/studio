'use client';

import { useState, useEffect } from 'react';
import type { GeneratePersonalizedRoadmapOutput } from '@/ai/flows/generate-personalized-roadmap';
import type { FormValues } from '@/lib/types';
import { generateRoadmapAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

import SplashScreen from '@/components/splash-screen';
import MotivationalScreen from '@/components/motivational-screen';
import ChatScreen from '@/components/chat-screen';
import LoadingState from '@/components/loading-state';
import RoadmapDisplay from '@/components/roadmap-display';

type View = 'splash' | 'motivational' | 'chat' | 'loading' | 'results';

export default function Home() {
  const [view, setView] = useState<View>('splash');
  const [roadmapData, setRoadmapData] = useState<GeneratePersonalizedRoadmapOutput | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setView('motivational');
    }, 3000); 

    return () => clearTimeout(splashTimer);
  }, []);

  const handleStartJourney = () => {
    setView('chat');
  };

  const handleFormSubmit = async (data: FormValues) => {
    setView('loading');
    // The action now accepts a more generic input object
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
      setView('chat'); // Go back to chat on error
    }
  };
  
  const handleReset = () => {
    setRoadmapData(null);
    setView('motivational');
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {view === 'splash' && <SplashScreen />}
      {view === 'motivational' && <MotivationalScreen onStart={handleStartJourney} />}
      {view === 'chat' && <ChatScreen onSubmit={handleFormSubmit} />}
      {view === 'loading' && (
         <div className="flex-1 flex items-center justify-center">
            <LoadingState />
         </div>
      )}
      {view === 'results' && roadmapData && (
        <>
          <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm bg-card">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                Vidyaan
              </h1>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6 md:p-8 bg-slate-50">
            <RoadmapDisplay data={roadmapData} onReset={handleReset}/>
          </main>
        </>
      )}
    </div>
  );
}
