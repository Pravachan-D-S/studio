'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const quotes = [
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "Your career is your business. You are the CEO. - Tom Peters",
  "The best way to predict the future is to create it. - Abraham Lincoln",
];

interface MotivationalScreenProps {
  onStart: () => void;
}

export default function MotivationalScreen({ onStart }: MotivationalScreenProps) {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    // Set initial quote
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    // Change quote every 5 seconds
    const interval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-background to-slate-900 p-4">
      <Card className="w-full max-w-2xl p-8 md:p-12 text-center bg-card/50 backdrop-blur-sm animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary">Welcome to Vidyaan</h1>
        <p className="mt-4 text-lg md:text-xl text-foreground">Your personalized journey to a successful career starts now.</p>
        
        <div className="mt-8 h-20 flex items-center justify-center">
            <p className="text-base md:text-lg text-muted-foreground italic transition-opacity duration-1000">
              "{currentQuote}"
            </p>
        </div>

        <Button onClick={onStart} size="lg" className="mt-8 w-full md:w-auto text-lg">
          Start Journey
        </Button>
      </Card>
    </div>
  );
}
