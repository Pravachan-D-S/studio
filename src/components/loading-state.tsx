'use client';

import { VidyaanIcon } from './icons';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center p-4">
      <div className="relative w-28 h-28">
        <VidyaanIcon className="w-24 h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <svg className="w-full h-full animate-spin" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle 
                className="stroke-primary/20"
                cx="50" 
                cy="50" 
                r="42" 
                strokeWidth="8" 
                fill="transparent" 
            />
            <circle 
                className="stroke-primary"
                cx="50" 
                cy="50" 
                r="42" 
                strokeWidth="8" 
                fill="transparent" 
                strokeDasharray="264" 
                strokeDashoffset="198"
                strokeLinecap="round"
            />
        </svg>
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
