
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import type { GeneratePersonalizedRoadmapOutput } from '@/ai/flows/generate-personalized-roadmap';
import type { AnalyzeSkillGapsOutput } from '@/ai/flows/analyze-skill-gaps';
import type { FormValues } from '@/lib/types';
import { generateRoadmapAction, analyzeGapsAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

import SplashScreen from '@/components/splash-screen';
import MotivationalScreen from '@/components/motivational-screen';
import ChatScreen from '@/components/chat-screen';
import LoadingState from '@/components/loading-state';
import MissingSkillsScreen from '@/components/missing-skills-screen';
import RoadmapDisplay from '@/components/roadmap-display';
import { VidyatejLogo } from '@/components/icons';

type View = 'splash' | 'motivational' | 'chat' | 'loading' | 'missing-skills' | 'results';

// Keep state outside of the component to persist it across navigations
let persistedRoadmapData: GeneratePersonalizedRoadmapOutput | null = null;
let persistedMissingSkillsData: AnalyzeSkillGapsOutput | null = null;
let persistedFormData: FormValues | null = null;


export default function Home() {
  const searchParams = useSearchParams();
  const [view, setView] = useState<View>('splash');
  const [roadmapData, setRoadmapData] = useState<GeneratePersonalizedRoadmapOutput | null>(persistedRoadmapData);
  const [missingSkillsData, setMissingSkillsData] = useState<AnalyzeSkillGapsOutput | null>(persistedMissingSkillsData);
  const [formData, setFormData] = useState<FormValues | null>(persistedFormData);
  const { toast } = useToast();

  useEffect(() => {
    // This effect runs only once on initial mount
    const fromJobs = searchParams.get('from') === 'jobs';
    if (fromJobs && persistedRoadmapData) {
        // If returning from jobs page and we have data, go directly to results
        setView('results');
    } else {
        // Otherwise, start the normal flow
        const splashTimer = setTimeout(() => {
            setView('motivational');
        }, 3000); 

        return () => clearTimeout(splashTimer);
    }
  }, []); // Empty dependency array ensures this runs only once

  const handleStartJourney = () => {
    setView('chat');
  };

  const handleFormSubmit = async (data: FormValues) => {
    setView('loading');
    setFormData(data);
    persistedFormData = data; // Persist state
    const result = await analyzeGapsAction(data);

    if (result.success && result.data) {
      setMissingSkillsData(result.data);
      persistedMissingSkillsData = result.data; // Persist state
      setView('missing-skills');
    } else {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: result.error || 'Failed to analyze skills. Please try again.',
      });
      setView('chat'); // Go back to chat on error
    }
  };

  const handleProceedToRoadmap = async () => {
    if (!formData) {
        toast({
            variant: 'destructive',
            title: 'An error occurred',
            description: 'Form data is missing. Please start over.',
        });
        setView('chat');
        return;
    }
    setView('loading');
    const result = await generateRoadmapAction(formData);
    
    if (result.success && result.data) {
        setRoadmapData(result.data);
        persistedRoadmapData = result.data; // Persist state
        setView('results');
    } else {
        toast({
            variant: 'destructive',
            title: 'An error occurred',
            description: result.error || 'Failed to generate roadmap. Please try again.',
        });
        setView('chat');
    }
  };
  
  const handleReset = () => {
    // Clear persisted state
    persistedRoadmapData = null;
    persistedMissingSkillsData = null;
    persistedFormData = null;
    // Clear component state
    setRoadmapData(null);
    setMissingSkillsData(null);
    setFormData(null);
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
      {view === 'missing-skills' && missingSkillsData && (
        <MissingSkillsScreen 
          data={missingSkillsData}
          onProceed={handleProceedToRoadmap}
        />
      )}
      {view === 'results' && roadmapData && formData && (
        <>
          <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm bg-card">
            <div className="flex items-center gap-2">
              <VidyatejLogo className="h-8 w-auto" />
              <span className="font-bold text-lg">Vidyatej</span>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6 md:p-8">
            <RoadmapDisplay data={roadmapData} onReset={handleReset} studentData={formData}/>
          </main>
        </>
      )}
    </div>
  );
}
