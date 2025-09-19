
'use client';

import React, { useState, useMemo } from 'react';
import type { GeneratePersonalizedRoadmapOutput } from '@/ai/flows/generate-personalized-roadmap';
import type { FormValues } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import {
  List,
  Wrench,
  Calendar,
  FlaskConical,
  Lightbulb,
  Briefcase,
  ChevronRight,
  TrendingUp,
  BarChart,
  Download,
  Loader2,
  HelpCircle,
  CheckCircle2,
  Award,
  Search,
} from 'lucide-react';
import { QuizDialog } from './quiz-dialog';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { generatePdf } from '@/lib/pdf-generator';


interface RoadmapDisplayProps {
  data: GeneratePersonalizedRoadmapOutput;
  onReset: () => void;
  studentData: FormValues;
}

const parseList = (text: string | undefined): string[] => {
  if (!text) return [];
  return text.split('\n').map(s => s.replace(/^- /, '').trim()).filter(Boolean);
};

const SectionCard = ({ title, icon: Icon, children, className }: { title: string; icon: React.ElementType; children: React.ReactNode; className?: string }) => (
  <Card className={cn("flex flex-col", className)}>
    <CardHeader className="flex flex-row items-center gap-3">
      <Icon className="w-6 h-6 text-primary" />
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 text-sm text-muted-foreground">
      {children}
    </CardContent>
  </Card>
);

const BulletedList = ({ items }: { items: string[] }) => (
    <ul className="space-y-3">
        {items.map((item, index) => {
            return (
                <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 mt-1 text-primary shrink-0"/>
                    <span className='flex-1 text-foreground'>{item}</span>
                </li>
            )
        })}
    </ul>
);

const UnlockedChecklist = ({ 
  items, 
  sectionId, 
  completedItems,
  studentData,
  onQuizComplete,
}: { 
  items: string[], 
  sectionId: string, 
  completedItems: Set<string>,
  studentData: FormValues,
  onQuizComplete: (skillId: string, skillName: string) => void,
}) => {
    const [quizSkill, setQuizSkill] = useState<string | null>(null);
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    const handleVerifyClick = (skill: string) => {
        setQuizSkill(skill);
        setIsQuizOpen(true);
    };

    const handleQuizClose = (passed: boolean, skill: string) => {
        setIsQuizOpen(false);
        if (passed) {
            const skillId = `${sectionId}-${items.indexOf(skill)}`;
            onQuizComplete(skillId, skill);
        }
        setQuizSkill(null);
    }
    
    return (
      <>
        <ul className="space-y-3">
          {items.map((item, index) => {
            const id = `${sectionId}-${index}`;
            const isCompleted = completedItems.has(id);

            return (
              <li key={id} className="flex items-start gap-3 group">
                 <div className="flex items-center w-full justify-between">
                    <span className={cn('flex-1', {
                        'line-through text-green-600': isCompleted,
                        'text-foreground': !isCompleted
                    })}>
                        {isCompleted && <CheckCircle2 className="inline w-4 h-4 mr-2 text-green-500" />}
                        {item}
                    </span>
                    {!isCompleted && (
                        <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleVerifyClick(item)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <HelpCircle className="w-4 h-4 mr-2" />
                            Verify
                        </Button>
                    )}
                 </div>
              </li>
            );
          })}
        </ul>
        {isQuizOpen && quizSkill && (
            <QuizDialog 
                isOpen={isQuizOpen}
                skill={quizSkill}
                studentData={studentData}
                onClose={handleQuizClose}
            />
        )}
      </>
    );
};

export default function RoadmapDisplay({ data, onReset, studentData }: RoadmapDisplayProps) {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

  const sections = useMemo(() => {
    return {
      skillRoadmap: parseList(data.skillRoadmap),
      toolsToMaster: parseList(data.toolsToMaster),
      projects: parseList(data.projects),
      resumeInterviewPrep: parseList(data.resumeInterviewPrep),
    };
  }, [data]);

  const verifiableSkills = useMemo(() => [
    ...sections.skillRoadmap.map((_, i) => `skillRoadmap-${i}`),
    ...sections.toolsToMaster.map((_, i) => `toolsToMaster-${i}`),
  ], [sections]);

  const totalVerifiableItems = useMemo(() => verifiableSkills.length, [verifiableSkills]);
  const completedVerifiableItems = useMemo(() => new Set([...completedItems].filter(item => verifiableSkills.includes(item))), [completedItems, verifiableSkills]);

  const handleToggleItem = (itemId: string) => {
    setCompletedItems(prev => {
        const newSet = new Set(prev);
        if (newSet.has(itemId)) {
            newSet.delete(itemId);
        } else {
            newSet.add(itemId);
        }
        return newSet;
    });
  };

   const handleDownloadPdf = () => {
    setIsDownloadingPdf(true);
    try {
        generatePdf(data, studentData);
    } catch (error) {
        console.error("Failed to generate PDF", error);
        alert("Sorry, there was an error generating the PDF. Please try again.");
    } finally {
        setIsDownloadingPdf(false);
    }
  };
  
  const progressPercentage = totalVerifiableItems > 0 ? (completedVerifiableItems.size / totalVerifiableItems) * 100 : 0;
  
  const getNextMilestone = () => {
    if (totalVerifiableItems > 0 && completedVerifiableItems.size === totalVerifiableItems) {
      return "You've verified all skills!";
    }
    const nextSkillId = verifiableSkills.find(id => !completedVerifiableItems.has(id));
    if (!nextSkillId) return "No verifiable skills to track.";
    
    const [sectionKey, indexStr] = nextSkillId.split('-');
    const index = parseInt(indexStr, 10);
    // @ts-ignore
    const itemText = sections[sectionKey][index];
    return itemText.length > 40 ? itemText.substring(0, 40) + '...' : itemText;
  };

  const getProgressBadge = () => {
    const percentage = Math.round(progressPercentage);
    if (percentage === 100) {
      return <Badge className="text-xs px-2 py-1 bg-green-500 text-white border-green-600"><Award className="mr-1" /> Mastered</Badge>;
    }
    if (percentage >= 75) {
      return <Badge className="text-xs px-2 py-1 bg-yellow-400 text-yellow-900 border-yellow-500"><Award className="mr-1" /> Expert</Badge>;
    } else if (percentage >= 40) {
      return <Badge className="text-xs px-2 py-1 bg-gray-300 text-gray-800 border-gray-400"><Award className="mr-1" /> Proficient</Badge>;
    } else {
      return <Badge className="text-xs px-2 py-1 bg-orange-400 text-orange-900 border-orange-500"><Award className="mr-1" /> Beginner</Badge>;
    }
  };

  const sectionsConfigCards = [
    { id: 'motivationalNudge', title: 'Motivational Nudge', icon: Award, content: data.motivationalNudge, className: 'lg:col-span-3' },
    { id: 'skillRoadmap', title: 'Skill Roadmap', icon: List, items: sections.skillRoadmap, className: 'lg:col-span-1', isVerifiable: true },
    { id: 'toolsToMaster', title: 'Tools to Master', icon: Wrench, items: sections.toolsToMaster, className: 'lg:col-span-1', isVerifiable: true },
    { id: 'timeline', title: 'Estimated Timeline', icon: Calendar, content: data.timeline, className: 'lg-col-span-1' },
    { id: 'projects', title: 'Project Ideas', icon: FlaskConical, items: sections.projects, className: 'lg:col-span-3', isVerifiable: false },
    { id: 'resources', title: 'Learning Resources', icon: Lightbulb, content: data.resources, className: 'lg:col-span-2' },
    { id: 'careerGrowth', title: 'Career Growth', icon: TrendingUp, content: data.careerGrowth, className: 'lg:col-span-1' },
    { id: 'resumeInterviewPrep', title: 'Resume & Interview Prep', icon: Briefcase, items: sections.resumeInterviewPrep, className: 'lg:col-span-2', isVerifiable: false },
    { id: 'jobMarketInsights', title: 'Job Market Insights', icon: BarChart, content: data.jobMarketInsights, className: 'lg:col-span-1' },
  ];

  const jobsUrl = useMemo(() => {
    if (!studentData) return '/';
    const params = new URLSearchParams();
    params.set('stream', studentData.stream);
    params.set('specialization', studentData.specialization);
    params.set('aimingCareer', studentData.aimingCareer);
    params.set('salaryRange', studentData.salaryRange);
    return `/jobs?${params.toString()}`;
  }, [studentData]);

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
           <h1 className="text-3xl font-extrabold tracking-tight">
            Your Personalized Roadmap
          </h1>
          <p className="text-muted-foreground">
            Here is your AI-generated path to becoming a pro.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
            <Button asChild>
                <Link href={jobsUrl}>
                    <Search className="mr-2" />
                    Find Jobs
                </Link>
            </Button>
             <Button onClick={handleDownloadPdf} variant="outline" disabled={isDownloadingPdf}>
                {isDownloadingPdf ? (
                    <Loader2 className="mr-2 animate-spin" />
                ) : (
                    <Download className="mr-2" />
                )}
                Download PDF
            </Button>
            <Button onClick={onReset} variant="outline">Start Over</Button>
        </div>
      </div>


      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2">
             <span>Progress Tracker (Verifiable Skills)</span>
             {getProgressBadge()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
              <Progress value={progressPercentage} className="w-full h-3" />
              <div className="flex justify-between text-sm flex-wrap gap-2">
                  <p className="text-foreground"><span className="font-semibold">{Math.round(progressPercentage)}%</span> complete</p>
                  <p className="text-muted-foreground">Next: <span className="font-semibold text-foreground">{getNextMilestone()}</span></p>
              </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectionsConfigCards.map((section) => {
          if ((!section.items || section.items.length === 0) && !section.content) return null;

          return (
            <SectionCard key={section.id} title={section.title} icon={section.icon} className={section.className}>
              {section.items ? (
                 section.isVerifiable ? (
                    <UnlockedChecklist 
                        items={section.items} 
                        sectionId={section.id} 
                        completedItems={completedItems} 
                        studentData={studentData}
                        onQuizComplete={(itemId) => handleToggleItem(itemId)}
                    />
                 ) : (
                    <BulletedList
                        items={section.items}
                    />
                 )
              ) : (
                 section.id === 'motivationalNudge' ? (
                     <p className="italic">"{section.content}"</p>
                 ) : (
                    <ul className="space-y-2">
                    {parseList(section.content).map((line, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-1 text-primary shrink-0"/>
                            <span>{line}</span>
                        </li>
                    ))}
                    </ul>
                 )
              )}
            </SectionCard>
          );
        })}
      </div>
    </div>
  );
}
