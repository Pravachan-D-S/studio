'use client';

import { VidyatejLogo } from '@/components/icons';

export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="text-center animate-fade-in-up">
        <VidyatejLogo className="h-40 w-auto mx-auto text-primary animate-pulse" />
      </div>
    </div>
  );
}
