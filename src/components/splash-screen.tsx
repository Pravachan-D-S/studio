'use client';

import { VidyaanIcon } from '@/components/icons';

export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="text-center animate-fade-in-up">
        <VidyaanIcon className="h-24 w-24 mx-auto text-primary animate-pulse" />
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground">
          Vidyaan
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">Your AI Career Advisor</p>
      </div>
    </div>
  );
}
