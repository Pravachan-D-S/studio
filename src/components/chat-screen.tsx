'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formSchema, FormValues } from '@/lib/types';
import { VidyaanIcon, UserIcon } from '@/components/icons';
import {
  aimingCareers,
  branches,
  learningStyles,
  locationPreferences,
  streams,
  yearsOfStudy,
} from '@/lib/constants';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type ChatMessage = {
  sender: 'ai' | 'user';
  text: string | React.ReactNode;
  options?: string[];
};

interface ChatScreenProps {
  onSubmit: (data: FormValues) => Promise<void>;
}

const questions = [
  { key: 'stream', text: 'Which stream are you studying in?', options: streams },
  { key: 'branch', text: 'Which branch are you in?', options: branches },
  { key: 'yearOfStudy', text: 'What is your current year of study?', options: yearsOfStudy },
  { key: 'aimingCareer', text: 'What career are you aiming for?', options: aimingCareers },
  { key: 'timeAvailability', text: 'How many hours per week can you dedicate to learning?' },
  { key: 'learningStyle', text: 'What\'s your preferred learning style?', options: learningStyles },
  { key: 'locationPreference', text: 'What is your work location preference?', options: locationPreferences },
  { key: 'skillSelfAssessment', text: 'Briefly, how would you rate your skills in coding, math, and communication? (e.g., "Beginner in coding, Intermediate in math")' },
];

export default function ChatScreen({ onSubmit }: ChatScreenProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stream: '',
      branch: '',
      aimingCareer: '',
      yearOfStudy: '',
      timeAvailability: '',
      skillSelfAssessment: 'Beginner in Coding, Math, and Communication',
      locationPreference: '',
      learningStyle: '',
    },
  });

  const formValues = useWatch({ control });

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const key = currentQuestion.key as keyof FormValues;
      // @ts-ignore
      const value = formValues[key];

      if (!value) {
         setMessages(prev => {
            const lastMessage = prev[prev.length -1];
            if(lastMessage?.sender === 'ai' && lastMessage.text === currentQuestion.text) {
                return prev;
            }
            return [
                ...prev,
                { sender: 'ai', text: currentQuestion.text, options: currentQuestion.options },
            ]
        });
      }
    }
  }, [currentQuestionIndex, formValues]);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleNextQuestion = (field: keyof FormValues, value: string) => {
    // @ts-ignore
    if(formValues[field]) return;

    setMessages(prev => [...prev, { sender: 'user', text: value }]);
    setValue(field, value, { shouldValidate: true });

    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    }, 500);
  };
  
  const handleFinalSubmit = async (data: FormValues) => {
    setIsLoading(true);
    // Add the last message if it exists
    const lastField = questions[questions.length - 1].key as keyof FormValues;
    if (data[lastField] && messages[messages.length - 1].sender === 'ai') {
        setMessages(prev => [...prev, { sender: 'user', text: data[lastField] }]);
    }
    await new Promise(resolve => setTimeout(resolve, 500));
    await onSubmit(data);
  };

  const handleOptionClick = (option: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const key = currentQuestion.key as keyof FormValues;
    handleNextQuestion(key, option);
  };

  const isFormComplete = currentQuestionIndex >= questions.length - 1;

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center p-4 border-b">
        <VidyaanIcon className="h-8 w-8 text-primary" />
        <h1 className="ml-3 text-2xl font-bold">Vidyaan AI</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((msg, index) => (
          <div key={index} className={cn('flex items-start gap-3 animate-fade-in-up', msg.sender === 'user' ? 'flex-row-reverse' : '')}>
            <Avatar>
              <AvatarFallback>
                {msg.sender === 'ai' ? <VidyaanIcon /> : <UserIcon />}
              </AvatarFallback>
            </Avatar>
            <div className={cn('rounded-lg px-4 py-3 max-w-[80%]', msg.sender === 'ai' ? 'bg-secondary' : 'bg-primary text-primary-foreground')}>
              <p className="text-sm">{msg.text}</p>
              {msg.sender === 'ai' && msg.options && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {msg.options.map((option, i) => (
                    <Button key={i} variant="outline" size="sm" onClick={() => handleOptionClick(option)}
                        className="bg-background/20 hover:bg-background/50 border-primary/50 text-foreground"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
         <div ref={endOfMessagesRef} />
      </div>

      <div className="p-4 border-t">
        <form onSubmit={handleSubmit(handleFinalSubmit)} className="flex items-center gap-2">
          {!isFormComplete && questions[currentQuestionIndex].options ? (
             <Input
                placeholder="Select an option above"
                disabled
                className="flex-1"
            />
          ) : (
             <Input
                {...register(questions[currentQuestionIndex].key as keyof FormValues)}
                placeholder="Type your answer..."
                autoComplete="off"
                className="flex-1"
                disabled={isLoading}
             />
          )}

          <Button type="submit" size="icon" disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
          </Button>
        </form>
         {errors[questions[currentQuestionIndex]?.key as keyof FormValues] && (
            <p className="text-destructive text-xs mt-1">
              {errors[questions[currentQuestionIndex]?.key as keyof FormValues]?.message}
            </p>
         )}
      </div>
    </div>
  );
}
