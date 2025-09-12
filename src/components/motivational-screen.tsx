'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface MotivationalScreenProps {
  onStart: () => void;
}

export default function MotivationalScreen({ onStart }: MotivationalScreenProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); // Short delay for fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-sky-100 p-4">
      <div className={`text-center transition-opacity duration-1000 ease-in ${show ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Welcome to Vidyaan</h1>
        
        <div className="mt-8 h-16 flex items-center justify-center">
            <p className="text-lg md:text-xl text-gray-600 italic">
              "Your future depends on what you do today."
            </p>
        </div>

        <Button 
          onClick={onStart} 
          size="lg" 
          className="mt-8 w-full md:w-auto text-lg rounded-full px-12 py-6 bg-green-500 hover:bg-green-600 text-white transition-transform transform hover:scale-105"
        >
          Start
        </Button>
      </div>
    </div>
  );
}
