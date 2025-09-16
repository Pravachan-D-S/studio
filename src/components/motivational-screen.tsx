'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { VidyaanLogo } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Info } from 'lucide-react';

interface MotivationalScreenProps {
  onStart: () => void;
}

const AnimatedShape = ({ className, delay }: { className: string, delay: string }) => (
    <div
      className={cn(
        'absolute rounded-full blur-3xl animate-float opacity-20',
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
    <div className="relative flex flex-col items-center justify-center h-screen bg-background p-4 overflow-hidden">
       {/* Animated background shapes */}
       <AnimatedShape className="w-64 h-64 top-10 left-10 bg-primary" delay="0s" />
       <AnimatedShape className="w-48 h-48 bottom-20 right-5 bg-sky-300" delay="2s" />
       <AnimatedShape className="w-32 h-32 top-1/2 left-1/4 bg-blue-400" delay="4s" />
       <AnimatedShape className="w-56 h-56 bottom-1/3 right-1/3 bg-teal-300" delay="6s" />


      <div className={cn(
          "relative z-10 text-center transition-all duration-1000 ease-in-out",
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      )}>
        <VidyaanLogo className="h-40 w-auto mx-auto" />

        <h2 className="mt-4 text-2xl font-bold tracking-tight">Your AI Career Guide</h2>
        <p className="max-w-md mx-auto mt-2 text-muted-foreground">
          Get a personalized roadmap to land your dream job.
        </p>
        
        <div className="mt-8 h-16 flex items-center justify-center">
            <p className="text-lg md:text-xl text-muted-foreground/80 italic max-w-md">
              "The greater the difficulty, the more the glory in surmounting it"
            </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
            <Button 
              onClick={onStart} 
              size="lg" 
              className="w-full md:w-auto text-lg rounded-full px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              Start Journey
            </Button>
            
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="text-sm text-muted-foreground">
                        <Info className="mr-2 h-4 w-4" />
                        About Vidyaan
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>About Vidyaan</DialogTitle>
                        <DialogDescription>
                            Your AI-powered guide to a successful tech career.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 text-sm text-muted-foreground">
                       <p>
                           Vidyaan is an intelligent career counseling platform designed to help students and professionals navigate their career paths with confidence.
                       </p>
                       <p>
                           By analyzing your academic background, skills, and career aspirations, our advanced AI generates a personalized, step-by-step roadmap to help you achieve your goals. From identifying skill gaps to suggesting projects and preparing you for interviews, Vidyaan is your personal mentor for success.
                       </p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
      </div>
    </div>
  );
}
