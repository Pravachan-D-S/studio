'use client';

import { VidyaanIcon } from './icons';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center p-4">
      <VidyaanIcon className="w-16 h-16 animate-spin" />
      <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
        Generating Your Personalized Roadmap...
      </h2>
      <p className="mt-2 text-lg text-muted-foreground">
        Our AI is analyzing your profile to create the perfect career path for you.
      </p>
    </div>
  );
}
