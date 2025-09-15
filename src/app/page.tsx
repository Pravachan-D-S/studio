'use client';

import { useState, useEffect } from 'react';
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
import { VidyaanLogo } from '@/components/icons';

type View = 'splash' | 'motivational' | 'chat' | 'loading' | 'missing-skills' | 'results';

export default function Home() {
  const [view, setView] = useState<View>('splash');
  const [roadmapData, setRoadmapData] = useState<GeneratePersonalizedRoadmapOutput | null>(null);
  const [missingSkillsData, setMissingSkillsData] = useState<AnalyzeSkillGapsOutput | null>(null);
  const [formData, setFormData] = useState<FormValues | null>(null);
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
    setFormData(data);
    const result = await analyzeGapsAction(data);

    if (result.success && result.data) {
      setMissingSkillsData(result.data);
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
    setRoadmapData(null);
    setMissingSkillsData(null);
    setFormData(null);
    setView('motivational');
  }

  const getFormData = (): FormValues | null => {
    return formData;
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
              <VidyaanLogo className="h-8 w-auto" />
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
