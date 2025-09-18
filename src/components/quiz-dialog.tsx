'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { generateQuizAction } from '@/app/actions';
import type { FormValues, GenerateQuizOutput } from '@/lib/types';

interface QuizDialogProps {
  isOpen: boolean;
  skill: string;
  studentData: FormValues;
  onClose: (passed: boolean, skill: string) => void;
}

type QuizState = 'loading' | 'ready' | 'submitted' | 'passed' | 'failed';
type Answers = { [key: string]: string };

export function QuizDialog({ isOpen, skill, studentData, onClose }: QuizDialogProps) {
  const [quizData, setQuizData] = useState<GenerateQuizOutput | null>(null);
  const [quizState, setQuizState] = useState<QuizState>('loading');
  const [answers, setAnswers] = useState<Answers>({});
  
  const allQuestionsAnswered = quizData && Object.values(answers).filter(Boolean).length === (2 + (quizData.quizType === 'Engineering' ? 3 : (quizData.quizType === 'MBA' ? 3 : 3)));


  const fetchQuiz = async () => {
    setQuizState('loading');
    setAnswers({});
    const result = await generateQuizAction({
      stream: studentData.stream,
      specialization: studentData.specialization,
      skill,
    });
    if (result.success && result.data) {
      setQuizData(result.data);
      setQuizState('ready');
    } else {
      // Handle error case
      console.error('Failed to load quiz:', result.error);
      onClose(false, skill);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchQuiz();
    }
  }, [isOpen, skill]);

  const handleAnswerChange = (questionKey: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionKey]: value }));
  };

  const handleSubmit = () => {
    if (!quizData) return;

    const { quizType, quizData: data } = quizData;
    let mcqCorrect = 0;
    let otherCorrect = 0;

    // Check MCQs
    if (answers['mcq-0'] === data.mcqs[0].correctAnswer) mcqCorrect++;
    if (answers['mcq-1'] === data.mcqs[1].correctAnswer) mcqCorrect++;

    // For open-ended questions, we'll just check if an answer was provided.
    // In a real application, this would need a more sophisticated grading system.
    const hasAnswered = (key: string) => !!answers[key]?.trim();

    if (quizType === 'Engineering') {
      if (hasAnswered('coding')) otherCorrect++;
      if (hasAnswered('error')) otherCorrect++;
      if (hasAnswered('conceptual')) otherCorrect++;
    } else if (quizType === 'MBA') {
      if (hasAnswered('case')) otherCorrect++;
      if (hasAnswered('strategy')) otherCorrect++;
      if (hasAnswered('conceptual')) otherCorrect++;
    } else { // Non-Tech
      if (hasAnswered('practical')) otherCorrect++;
      if (hasAnswered('error')) otherCorrect++;
      if (hasAnswered('conceptual')) otherCorrect++;
    }
    
    // Passing rule: at least 1 MCQ correct + at least 2 other questions answered
    if (mcqCorrect >= 1 && otherCorrect >= 2) {
      setQuizState('passed');
    } else {
      setQuizState('failed');
    }
  };

  const handleRetry = () => {
    fetchQuiz();
  }

  const renderQuestion = (key: string, title: string, content: string | React.ReactNode) => (
    <div key={key} className="space-y-3">
        <h4 className="font-semibold text-foreground">{title}</h4>
        <div className="prose prose-sm max-w-none text-muted-foreground">
            {typeof content === 'string' ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown> : content}
        </div>
    </div>
  );

  const renderQuizContent = () => {
    if (quizState === 'loading' || !quizData) {
      return (
        <div className="flex flex-col items-center justify-center h-64">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">Generating your quiz...</p>
        </div>
      );
    }
    
    const { quizType, quizData: data } = quizData;

    return (
        <div className="space-y-6 max-h-[70vh] overflow-y-auto p-1 pr-4">
            {renderQuestion('mcq-0', 'Question 1: Basic Concept (MCQ)', 
                <>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.mcqs[0].question}</ReactMarkdown>
                    <RadioGroup onValueChange={(val) => handleAnswerChange('mcq-0', val)} value={answers['mcq-0']} className="mt-2 space-y-1">
                        {data.mcqs[0].options.map((opt: string, i: number) => (
                            <div key={i} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt} id={`q0-opt${i}`} />
                                <Label htmlFor={`q0-opt${i}`}>{opt}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </>
            )}
            <Separator />
            {renderQuestion('mcq-1', 'Question 2: Application-based MCQ', 
                <>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.mcqs[1].question}</ReactMarkdown>
                    <RadioGroup onValueChange={(val) => handleAnswerChange('mcq-1', val)} value={answers['mcq-1']} className="mt-2 space-y-1">
                        {data.mcqs[1].options.map((opt: string, i: number) => (
                            <div key={i} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt} id={`q1-opt${i}`} />
                                <Label htmlFor={`q1-opt${i}`}>{opt}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </>
            )}
            <Separator />

            {quizType === 'Engineering' && (
                <>
                {renderQuestion('coding', 'Question 3: Problem Solving', data.codingQuestion)}
                <Textarea placeholder="Write your solution here..." onChange={(e) => handleAnswerChange('coding', e.target.value)} value={answers['coding'] || ''} rows={6} />
                <Separator />
                {renderQuestion('error', 'Question 4: Debugging Challenge', data.errorFindingQuestion)}
                <Textarea placeholder="Describe the error and your fix..." onChange={(e) => handleAnswerChange('error', e.target.value)} value={answers['error'] || ''} />
                <Separator />
                {renderQuestion('conceptual', 'Question 5: Conceptual Question', data.conceptualQuestion)}
                <Textarea placeholder="Explain the concept..." onChange={(e) => handleAnswerChange('conceptual', e.target.value)} value={answers['conceptual'] || ''} />
                </>
            )}

            {quizType === 'MBA' && (
                <>
                {renderQuestion('case', 'Question 3: Case Study', data.caseStudyQuestion)}
                <Textarea placeholder="Provide your analysis and recommendation..." onChange={(e) => handleAnswerChange('case', e.target.value)} value={answers['case'] || ''} rows={6}/>
                <Separator />
                {renderQuestion('strategy', 'Question 4: Strategy Scenario', data.strategyQuestion)}
                <Textarea placeholder="Outline your strategy..." onChange={(e) => handleAnswerChange('strategy', e.target.value)} value={answers['strategy'] || ''} />
                <Separator />
                {renderQuestion('conceptual', 'Question 5: Conceptual Question', data.conceptualQuestion)}
                <Textarea placeholder="Explain the concept..." onChange={(e) => handleAnswerChange('conceptual', e.target.value)} value={answers['conceptual'] || ''} />
                </>
            )}

             {quizType === 'Non-Tech' && (
                <>
                {renderQuestion('practical', 'Question 3: Practical Question', data.practicalQuestion)}
                <Textarea placeholder="Describe your answer..." onChange={(e) => handleAnswerChange('practical', e.target.value)} value={answers['practical'] || ''} rows={4}/>
                <Separator />
                {renderQuestion('error', 'Question 4: Mistake Spotting', data.errorIdentificationQuestion)}
                <Textarea placeholder="Identify and explain the error..." onChange={(e) => handleAnswerChange('error', e.target.value)} value={answers['error'] || ''} />
                <Separator />
                {renderQuestion('conceptual', 'Question 5: Conceptual Question', data.conceptualQuestion)}
                <Textarea placeholder="Explain the concept..." onChange={(e) => handleAnswerChange('conceptual', e.target.value)} value={answers['conceptual'] || ''} />
                </>
            )}
        </div>
    );
  };
  
  const renderResult = () => {
    if (quizState === 'passed') {
      return (
        <div className="flex flex-col items-center justify-center h-64 text-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <h3 className="mt-4 text-2xl font-bold">Skill Verified!</h3>
            <p className="text-muted-foreground">Great job! You have successfully verified this skill.</p>
        </div>
      );
    }
    if (quizState === 'failed') {
      return (
        <div className="flex flex-col items-center justify-center h-64 text-center">
            <XCircle className="w-16 h-16 text-destructive" />
            <h3 className="mt-4 text-2xl font-bold">Needs Improvement</h3>
            <p className="text-muted-foreground">Don't worry! Review the hints below and try again.</p>
             <Alert className="mt-4 text-left">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Study Hints</AlertTitle>
                <AlertDescription>
                    <ul className="list-disc pl-5">
                        {quizData?.hints.map((hint, i) => <li key={i}>{hint}</li>)}
                    </ul>
                </AlertDescription>
            </Alert>
        </div>
      );
    }
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose(false, skill)}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Skill Verification: {skill}</DialogTitle>
          {quizData && <DialogDescription>{quizData.passingCriteria}</DialogDescription>}
        </DialogHeader>
        
        {quizState === 'ready' && renderQuizContent()}
        {['passed', 'failed'].includes(quizState) && renderResult()}
        {quizState === 'loading' && renderQuizContent()}


        <DialogFooter className="mt-6">
          {quizState === 'ready' && <Button onClick={handleSubmit} disabled={!allQuestionsAnswered}>Submit Quiz</Button>}
          {quizState === 'passed' && <Button onClick={() => onClose(true, skill)}>Next Skill</Button>}
          {quizState === 'failed' && (
            <div className="flex gap-2">
                <Button variant="outline" onClick={() => onClose(false, skill)}>Close</Button>
                <Button onClick={handleRetry}>Retry Quiz</Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
