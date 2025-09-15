'use client';

import { VidyaanIcon } from './icons';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center p-4">
      <div className="relative w-48 h-28 flex items-center justify-center gap-2">
        <div className="animate-pulse-bar [animation-delay:-0.4s] h-16 w-3 bg-primary/30 rounded-full"></div>
        <div className="animate-pulse-bar [animation-delay:-0.2s] h-24 w-3 bg-primary/30 rounded-full"></div>
        <div className="animate-pulse-bar h-28 w-3 bg-primary/30 rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <VidyaanIcon className="w-20 h-20 animate-pulse-logo" />
        </div>
        <div className="animate-pulse-bar h-28 w-3 bg-primary/30 rounded-full"></div>
        <div className="animate-pulse-bar [animation-delay:0.2s] h-24 w-3 bg-primary/30 rounded-full"></div>
        <div className="animate-pulse-bar [animation-delay:0.4s] h-16 w-3 bg-primary/30 rounded-full"></div>
      </div>
      <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
        Generating Your Personalized Roadmap...
      </h2>
      <p className="mt-2 text-lg text-muted-foreground">
        Our AI is analyzing your profile to create the perfect career path for you.
      </p>
    </div>
  );
}
