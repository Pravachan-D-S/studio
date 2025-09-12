'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { VidyaanLogo } from '@/components/icons';
import { cn } from '@/lib/utils';

interface MotivationalScreenProps {
  onStart: () => void;
}

const AnimatedShape = ({ className, delay }: { className: string, delay: string }) => (
    <div
      className={cn(
        'absolute rounded-full bg-sky-200/50 blur-xl animate-float',
        className
      )}
      style={{ animationDelay: delay }}
    />
  );

export default function MotivationalScreen({ onStart }: MotivationalScreenProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); // Short delay for fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-sky-100 p-4 overflow-hidden">
       {/* Animated background shapes */}
       <AnimatedShape className="w-48 h-48 top-10 left-10" delay="0s" />
       <AnimatedShape className="w-32 h-32 bottom-20 right-5" delay="2s" />
       <AnimatedShape className="w-24 h-24 top-1/2 left-1/4" delay="4s" />
       <AnimatedShape className="w-40 h-40 bottom-1/3 right-1/3" delay="6s" />


      <div className={cn(
          "relative z-10 text-center transition-all duration-1000 ease-in-out",
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      )}>
        <VidyaanLogo className="h-20 w-auto mx-auto text-gray-800" />

        <h2 className="mt-4 text-2xl font-bold text-slate-700 tracking-tight">Your AI Career Guide</h2>
        <p className="max-w-md mx-auto mt-2 text-muted-foreground">
          Get a personalized roadmap to land your dream job in tech.
        </p>
        
        <div className="mt-8 h-16 flex items-center justify-center">
            <p className="text-lg md:text-xl text-gray-600 italic max-w-md">
              "The greater the difficulty, the more the glory in surmounting it"
            </p>
        </div>

        <Button 
          onClick={onStart} 
          size="lg" 
          className="mt-8 w-full md:w-auto text-lg rounded-full px-12 py-6 bg-green-500 hover:bg-green-600 text-white transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/40"
        >
          Start Journey
        </Button>
      </div>
    </div>
  );
}
