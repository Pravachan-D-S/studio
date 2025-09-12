'use client';

import { VidyaanIcon } from './icons';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center p-4">
      <div className="relative w-24 h-24">
        <VidyaanIcon className="w-24 h-24 absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-dot [animation-delay:-0.3s]"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-dot [animation-delay:-0.15s]"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-dot"></div>
            </div>
        </div>
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
