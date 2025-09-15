'use client';

import { VidyaanIcon } from './icons';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center p-4">
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Outer ring, spinning clockwise */}
        <svg
          className="absolute w-full h-full text-primary/30 animate-spin"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          style={{ animationDuration: '4s' }}
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="141.37" // 2 * pi * 45 * 0.5 (for a semi-circle)
            strokeDashoffset="0"
            strokeLinecap="round"
          />
        </svg>

        {/* Inner ring, spinning counter-clockwise */}
        <svg
          className="absolute w-3/4 h-3/4 text-primary/50 animate-spin-reverse"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          style={{ animationDuration: '3s' }}
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="80" // Smaller dash array for a different look
            strokeDashoffset="0"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute flex items-center justify-center">
            <VidyaanIcon className="w-20 h-20 animate-pulse-logo" />
        </div>
      </div>
      <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
        Crafting Your Future Map...
      </h2>
      <p className="mt-2 text-lg text-muted-foreground">
        Hold tight! Our AI is charting your unique path to success.
      </p>
    </div>
  );
}
