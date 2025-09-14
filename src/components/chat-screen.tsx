'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formSchema, FormValues } from '@/lib/types';
import { VidyaanIcon, UserIcon, VidyaanLogo } from '@/components/icons';
import {
  streams,
  specializations,
  salaryRanges,
  aimingCareers,
  yearOfStudyOptions,
  skillLevels,
} from '@/lib/constants';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type ChatMessage = {
  sender: 'ai' | 'user';
  text: string | React.ReactNode;
  options?: string[] | readonly string[];
};

interface ChatScreenProps {
  onSubmit: (data: FormValues) => Promise<void>;
}

const getAimingCareers = (getValues: Function): string[] => {
    const stream = getValues('stream');
    const specialization = getValues('specialization');

    if (!stream) return [];

    const streamCareers = aimingCareers[stream];
    if (!streamCareers) return [];

    if (Array.isArray(streamCareers)) {
        return streamCareers;
    }

    if (specialization && streamCareers[specialization]) {
        return streamCareers[specialization];
    }
    
    // Fallback for stream if specialization doesn't match
    const allCareers = Object.values(streamCareers).flat();
    return [...new Set(allCareers)];
}


const questions = [
  { key: 'stream', text: 'Which stream are you studying in?', options: streams },
  { key: 'specialization', text: 'Which branch or specialization are you in?', optionsGetter: (getValues: any) => specializations[getValues('stream')] || [] },
  { key: 'yearOfStudy', text: 'What is your current year of study?', optionsGetter: (getValues: any) => yearOfStudyOptions[getValues('stream')] || [] },
  { key: 'salaryRange', text: 'What salary range do you aim for in the future?', options: salaryRanges },
  { key: 'aimingCareer', text: 'What is your career goal?', optionsGetter: getAimingCareers, allowCustom: true },
  { key: 'coding', text: 'How would you rate your coding skills?', options: skillLevels },
  { key: 'math', text: 'How would you rate your math skills?', options: skillLevels },
  { key: 'communication', text: 'How would you rate your communication skills?', options: skillLevels },
];

export default function ChatScreen({ onSubmit }: ChatScreenProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const watchedValues = useWatch({ control });

  useEffect(() => {
    const askQuestion = () => {
      if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        const questionKey = currentQuestion.key as keyof FormValues;
        
        // This logic is to prevent re-asking a question if the value is already set 
        // (e.g., when a user goes back and changes an answer)
        // @ts-ignore
        if (getValues(questionKey)) {
          // Check if we need to advance past this question
          const nextIndex = currentQuestionIndex + 1;
          if(nextIndex < questions.length) {
            const nextQuestionKey = questions[nextIndex].key as keyof FormValues;
             // @ts-ignore
            if(!getValues(nextQuestionKey)) {
               setCurrentQuestionIndex(nextIndex);
               return;
            }
          }
        }
        
        let options: string[] | readonly string[] = currentQuestion.options || [];
        if (currentQuestion.optionsGetter) {
            options = currentQuestion.optionsGetter(getValues);
        }

        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          // Prevents duplicate questions from being added
          if (lastMessage?.sender === 'ai' && lastMessage.text === currentQuestion.text) {
            return prev;
          }
          return [...prev, { sender: 'ai', text: currentQuestion.text, options }];
        });
      } else {
        setIsComplete(true);
        setMessages(prev => [...prev, { sender: 'ai', text: "Great! I have all the information I need. Analyzing your skills now..." }]);
        handleSubmit(handleFinalSubmit)();
      }
    };
    
    const timer = setTimeout(askQuestion, messages.length > 0 && messages[messages.length-1].sender === 'user' ? 500 : 0);
    return () => clearTimeout(timer);

  }, [currentQuestionIndex, watchedValues]);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleUserInput = (field: keyof FormValues, value: string) => {
    setMessages(prev => [...prev, { sender: 'user', text: value }]);
    // @ts-ignore
    setValue(field, value, { shouldValidate: true });
    
    const currentIndex = questions.findIndex(q => q.key === field);

    // Clear subsequent fields if an earlier answer is changed
    for (let i = currentIndex + 1; i < questions.length; i++) {
        const key = questions[i].key as keyof FormValues;
        // @ts-ignore
        setValue(key, undefined);
    }
    
    setCurrentQuestionIndex(currentIndex + 1);
  };
  
  const handleFinalSubmit = async (data: FormValues) => {
    setIsLoading(true);
    await onSubmit(data);
    setIsLoading(false);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const showOptions = currentQuestion && (currentQuestion.options || currentQuestion.optionsGetter?.(getValues)?.length > 0);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="flex items-center p-4 border-b">
        <VidyaanLogo className="h-8 w-auto" />
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gradient-to-br from-background to-slate-50">
        {messages.map((msg, index) => (
          <div key={index} className={cn('flex items-start gap-3 animate-fade-in-up', msg.sender === 'user' ? 'flex-row-reverse' : '')}>
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-transparent">
                {msg.sender === 'ai' ? <VidyaanIcon className="w-8 h-8"/> : <UserIcon className="w-6 h-6"/>}
              </AvatarFallback>
            </Avatar>
            <div className={cn('rounded-lg px-4 py-3 max-w-[80%]', msg.sender === 'ai' ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground')}>
              <p className="text-sm">{msg.text}</p>
              {msg.sender === 'ai' && msg.options && !isComplete && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {msg.options.map((option, i) => (
                    <Button 
                        key={i} 
                        variant="outline"
                        size="sm" 
                        onClick={() => handleUserInput(currentQuestion.key as keyof FormValues, option)}
                        className="bg-background/20 hover:bg-background/50 border-primary/50 text-foreground rounded-full"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
         {isLoading && isComplete && (
            <div className="flex justify-center items-center gap-3 animate-fade-in-up">
                 <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-transparent"><VidyaanIcon className="w-8 h-8"/></AvatarFallback>
                </Avatar>
                <Loader2 className="animate-spin text-primary" />
            </div>
         )}
         <div ref={endOfMessagesRef} />
      </div>

      <div className="p-4 border-t bg-background">
        {!isComplete && currentQuestion && (
            <form onSubmit={(e) => {
                e.preventDefault();
                if(currentQuestion.allowCustom) {
                  const key = currentQuestion.key as keyof FormValues;
                  const value = getValues(key);
                  if (value) {
                      handleUserInput(key, value);
                  }
                }
            }} className="flex items-center gap-2">
            
            {showOptions && !currentQuestion.allowCustom ? (
                <Input
                    placeholder="Select an option above"
                    disabled
                    className="flex-1 rounded-full"
                />
            ) : (
                <Input
                    {...register(currentQuestion.key as keyof FormValues)}
                    placeholder={'Type your answer...'}
                    autoComplete="off"
                    className="flex-1 rounded-full"
                    disabled={isLoading}
                />
            )}

            <Button type="submit" size="icon" disabled={isLoading || (showOptions && !currentQuestion.allowCustom)} className="rounded-full">
                {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
            </Button>
            </form>
        )}
         {currentQuestion && errors[currentQuestion.key as keyof FormValues] && (
            <p className="text-destructive text-xs mt-1 pl-4">
              {errors[currentQuestion.key as keyof FormValues]?.message}
            </p>
         )}
      </div>
    </div>
  );
}
