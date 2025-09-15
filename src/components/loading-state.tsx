'use client';

import { VidyaanIcon } from './icons';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center p-4">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg
          className="absolute w-full h-full text-primary/20"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base structure */}
          <line x1="50" y1="50" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="animate-sparkle-line" style={{ animationDelay: '0s' }} />
          <line x1="50" y1="50" x2="30" y2="80" stroke="currentColor" strokeWidth="0.5" className="animate-sparkle-line" style={{ animationDelay: '0.2s' }} />
          <line x1="50" y1="50" x2="90" y2="30" stroke="currentColor" strokeWidth="0.5" className="animate-sparkle-line" style={{ animationDelay: '0.4s' }} />
          <line x1="50" y1="50" x2="70" y2="90" stroke="currentColor" strokeWidth="0.5" className="animate-sparkle-line" style={{ animationDelay: '0.6s' }} />
          <line x1="10" y1="20" x2="90" y2="30" stroke="currentColor" strokeWidth="0.5" className="animate-sparkle-line" style={{ animationDelay: '0.8s' }} />
          <line x1="30" y1="80" x2="70" y2="90" stroke="currentColor" strokeWidth="0.5" className="animate-sparkle-line" style={{ animationDelay: '1s' }} />
          <line x1="10" y1="20" x2="30" y2="80" stroke="currentColor" strokeWidth="0.5" className="animate-sparkle-line" style={{ animationDelay: '1.2s' }} />
          <line x1="90" y1="30" x2="70" y2="90" stroke="currentColor" strokeWidth="0.5" className="animate-sparkle-line" style={{ animationDelay: '1.4s' }} />
          
          {/* Nodes */}
          <circle cx="50" cy="50" r="3" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: '0s' }} />
          <circle cx="10" cy="20" r="2" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: '0.5s' }} />
          <circle cx="30" cy="80" r="2" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: '0.7s' }}/>
          <circle cx="90" cy="30" r="2.5" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: '0.3s' }}/>
          <circle cx="70" cy="90" r="2" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: '0.9s' }}/>
        </svg>

        <div className="absolute flex items-center justify-center">
            <VidyaanIcon className="w-20 h-20 animate-pulse-logo" />
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
