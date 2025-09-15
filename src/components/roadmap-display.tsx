'use client';

import React, { useState, useMemo, useRef } from 'react';
import type { GeneratePersonalizedRoadmapOutput } from '@/ai/flows/generate-personalized-roadmap';
import type { FormValues } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
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
  Heart,
  HelpCircle,
  CheckCircle2,
  Award,
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { VidyaanLogo } from './icons';
import { QuizDialog } from './quiz-dialog';

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

const Checklist = ({ 
  items, 
  sectionId, 
  completedItems,
  studentData,
  onQuizComplete 
}: { 
  items: string[], 
  sectionId: string, 
  completedItems: Set<string>,
  studentData: FormValues,
  onQuizComplete: (skillId: string) => void,
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
            onQuizComplete(skillId);
        }
        setQuizSkill(null);
    }

    const canVerify = sectionId === 'skillRoadmap' || sectionId === 'toolsToMaster';
    
    return (
      <>
        <ul className="space-y-3">
          {items.map((item, index) => {
            const id = `${sectionId}-${index}`;
            const isCompleted = completedItems.has(id);
            return (
              <li key={id} className="flex items-start gap-3 group">
                 <div className="flex items-center w-full justify-between">
                    <span className={`flex-1 ${isCompleted ? 'line-through text-green-600' : 'text-foreground'}`}>
                        {item}
                    </span>
                    {canVerify && (
                        isCompleted ? (
                             <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                            <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={() => handleVerifyClick(item)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <HelpCircle className="w-4 h-4 mr-2" />
                                Verify
                            </Button>
                        )
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

const PDFSection = ({ title, icon: Icon, children, isList = false }: { title: string; icon: React.ElementType; children: React.ReactNode, isList?: boolean }) => (
    <div className="mb-4 break-inside-avoid">
        <div className="flex items-center gap-3 mb-2 border-b pb-2">
            <Icon className="w-5 h-5 text-primary" />
            <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        </div>
        {isList ? (
            <ul className="space-y-1 text-sm text-gray-600 pl-4">
                {React.Children.map(children, child => <li className="list-disc">{child}</li>)}
            </ul>
        ) : (
             <div className="text-sm text-gray-600 space-y-1">{children}</div>
        )}
    </div>
);


const RoadmapPDF = ({ data, studentData, innerRef }: { data: GeneratePersonalizedRoadmapOutput; studentData: FormValues; innerRef: React.Ref<HTMLDivElement> }) => {
  const sectionsConfig = useMemo(() => ([
    { id: 'studentProfile', title: 'Student Profile', icon: UserIcon, isList: true, content: [
        `Stream: ${studentData.stream}`,
        `Specialization: ${studentData.specialization}`,
        `Year of Study: ${studentData.yearOfStudy}`,
        `Aiming Career: ${studentData.aimingCareer}`,
    ]},
    { id: 'skillRoadmap', title: 'Skill Roadmap', icon: List, isList: true, items: parseList(data.skillRoadmap) },
    { id: 'toolsToMaster', title: 'Tools to Master', icon: Wrench, isList: true, items: parseList(data.toolsToMaster) },
    { id: 'timeline', title: 'Estimated Timeline', icon: Calendar, content: parseList(data.timeline) },
    { id: 'projects', title: 'Project Ideas', icon: FlaskConical, isList: true, items: parseList(data.projects) },
    { id: 'resources', title: 'Learning Resources', icon: Lightbulb, content: parseList(data.resources) },
    { id: 'careerGrowth', title: 'Career Growth', icon: TrendingUp, content: parseList(data.careerGrowth) },
    { id: 'jobMarketInsights', title: 'Job Market Insights', icon: BarChart, content: parseList(data.jobMarketInsights) },
    { id: 'resumeInterviewPrep', title: 'Resume & Interview Prep', icon: Briefcase, isList: true, items: parseList(data.resumeInterviewPrep) },
  ]), [data, studentData]);


    return (
        <div ref={innerRef} id="pdf-content" className="p-8 bg-white text-gray-800" style={{ width: '210mm' }}>
            {/* This content is for html2canvas to render */}
            <div className="flex items-center justify-between pb-4 border-b mb-6">
                <VidyaanLogo />
                <h1 className="text-2xl font-bold text-gray-700">Your Personalized Career Roadmap</h1>
            </div>

            {data.motivationalNudge && (
              <div className="mb-6 p-4 bg-sky-50 rounded-lg text-center">
                  <p className="text-sm italic text-sky-800">"{data.motivationalNudge}"</p>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-x-8">
                {sectionsConfig.map(section => {
                     if ((!section.items || section.items.length === 0) && (!section.content || section.content.length === 0)) return null;
                     const content = section.items || section.content;
                     return(
                         <div key={section.id} data-pdf-section className="mb-4 break-inside-avoid col-span-2">
                             <PDFSection title={section.title} icon={section.icon} isList={section.isList}>
                                {content?.map((item: any, index: number) => <div key={index}>{item}</div>)}
                            </PDFSection>
                         </div>
                     )
                })}
            </div>

            <div className="mt-8 pt-4 border-t text-center text-xs text-gray-500">
                <p>Generated by Vidyaan - Your AI Career Guide</p>
            </div>
        </div>
    )
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  }

export default function RoadmapDisplay({ data, onReset, studentData }: RoadmapDisplayProps) {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => ({
    skillRoadmap: parseList(data.skillRoadmap),
    toolsToMaster: parseList(data.toolsToMaster),
    projects: parseList(data.projects),
    resumeInterviewPrep: parseList(data.resumeInterviewPrep),
  }), [data]);

  const quizSections = ['skillRoadmap', 'toolsToMaster'];
  const totalChecklistItems = Object.entries(sections)
    .filter(([key]) => quizSections.includes(key))
    .reduce((sum, [, items]) => sum + items.length, 0);

  const handleQuizComplete = (itemId: string) => {
    setCompletedItems(prev => {
        const newSet = new Set(prev);
        newSet.add(itemId);
        return newSet;
    });
  };

  const handleDownloadPdf = async () => {
    const content = pdfRef.current;
    if (!content) return;
    setIsGeneratingPdf(true);
    
    try {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageHeight = pdf.internal.pageSize.getHeight();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const margin = 10; // 10mm margin
        
        let y = margin;

        const addCanvasToPdf = async (element: HTMLElement, yPos: number): Promise<number> => {
            const canvas = await html2canvas(element, { scale: 2, useCORS: true, logging: false });
            const imgData = canvas.toDataURL('image/png');
            const imgHeight = (canvas.height * (pageWidth - 2 * margin)) / canvas.width;
            
            if (yPos + imgHeight > pageHeight - margin) {
                pdf.addPage();
                yPos = margin;
            }

            pdf.addImage(imgData, 'PNG', margin, yPos, pageWidth - 2 * margin, imgHeight);
            return yPos + imgHeight;
        };

        // Render header
        const headerElement = content.querySelector('.flex.items-center.justify-between') as HTMLElement;
        if(headerElement) {
            y = await addCanvasToPdf(headerElement, y);
            y += 5; // spacing after header
        }

        // Render motivational nudge
        const nudgeElement = content.querySelector('.mb-6.p-4.bg-sky-50') as HTMLElement;
        if (nudgeElement) {
            y = await addCanvasToPdf(nudgeElement, y);
            y += 5;
        }

        // Render sections
        const sectionElements = content.querySelectorAll('[data-pdf-section]') as NodeListOf<HTMLElement>;

        for (const sectionEl of Array.from(sectionElements)) {
            const canvas = await html2canvas(sectionEl, { scale: 2, useCORS: true, logging: false });
            const imgData = canvas.toDataURL('image/png');
            const imgHeight = (canvas.height * (pageWidth - 2 * margin)) / canvas.width;

            if (y + imgHeight > pageHeight - margin) {
                pdf.addPage();
                y = margin;
            }
            
            pdf.addImage(imgData, 'PNG', margin, y, pageWidth - 2 * margin, imgHeight);
            y += imgHeight + 5; // Add some padding between sections
        }

        // Render footer
        const footerElement = content.querySelector('.mt-8.pt-4.border-t') as HTMLElement;
        if (footerElement) {
            y = await addCanvasToPdf(footerElement, y);
        }

        pdf.save('Vidyaan-Roadmap.pdf');

    } catch (error) {
        console.error("Failed to generate PDF", error);
    } finally {
        setIsGeneratingPdf(false);
    }
  };

  const progressPercentage = totalChecklistItems > 0 ? (completedItems.size / totalChecklistItems) * 100 : 0;

  const getNextMilestone = () => {
    const allItems = [
      ...sections.skillRoadmap.map((_, i) => `skillRoadmap-${i}`),
      ...sections.toolsToMaster.map((_, i) => `toolsToMaster-${i}`),
    ];
    for (const id of allItems) {
      if (!completedItems.has(id)) {
        const [section, index] = id.split('-');
        // @ts-ignore
        const itemText = sections[section][index];
        return itemText.length > 40 ? itemText.substring(0, 40) + '...' : itemText;
      }
    }
    return "You've completed all milestones!";
  }

  const getProgressBadge = () => {
    const percentage = Math.round(progressPercentage);
    let color = 'text-yellow-700'; // Bronze
    let text = 'Bronze';
    if (percentage >= 100) {
        color = 'text-yellow-500'; // Gold
        text = 'Gold';
    } else if (percentage >= 50) {
        color = 'text-gray-400'; // Silver
        text = 'Silver';
    }

    return (
        <div className={cn('flex items-center gap-2 font-semibold', color)}>
            <Award className="w-6 h-6" />
            <span>{text}</span>
        </div>
    );
  };

  const sectionsConfig = [
    { id: 'motivationalNudge', title: 'Motivational Nudge', icon: Heart, content: data.motivationalNudge, className: 'lg:col-span-3' },
    { id: 'skillRoadmap', title: 'Skill Roadmap', icon: List, items: sections.skillRoadmap, className: 'lg:col-span-1' },
    { id: 'toolsToMaster', title: 'Tools to Master', icon: Wrench, items: sections.toolsToMaster, className: 'lg:col-span-1' },
    { id: 'timeline', title: 'Estimated Timeline', icon: Calendar, content: data.timeline, className: 'lg:col-span-1' },
    { id: 'projects', title: 'Project Ideas', icon: FlaskConical, items: sections.projects, className: 'lg:col-span-3' },
    { id: 'resources', title: 'Learning Resources', icon: Lightbulb, content: data.resources, className: 'lg:col-span-2' },
    { id: 'careerGrowth', title: 'Career Growth', icon: TrendingUp, content: data.careerGrowth, className: 'lg:col-span-1' },
    { id: 'resumeInterviewPrep', title: 'Resume & Interview Prep', icon: Briefcase, items: sections.resumeInterviewPrep, className: 'lg:col-span-2' },
    { id: 'jobMarketInsights', title: 'Job Market Insights', icon: BarChart, content: data.jobMarketInsights, className: 'lg:col-span-1' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Your Personalized Roadmap</h1>
          <p className="text-muted-foreground">Here is your AI-generated path to becoming a pro.</p>
        </div>
        <div className="flex items-center gap-2">
            <Button onClick={handleDownloadPdf} disabled={isGeneratingPdf}>
                {isGeneratingPdf ? <Loader2 className="animate-spin" /> : <Download />}
                {isGeneratingPdf ? 'Generating...' : 'Download as PDF'}
            </Button>
            <Button onClick={onReset} variant="outline">Start Over</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2">
             <span>Progress Tracker</span>
             {getProgressBadge()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
              <Progress value={progressPercentage} className="w-full h-2" />
              <div className="flex justify-between text-sm flex-wrap gap-2">
                  <p className="text-foreground"><span className="font-semibold">{Math.round(progressPercentage)}%</span> complete</p>
                  <p className="text-muted-foreground">Next: <span className="font-semibold text-foreground">{getNextMilestone()}</span></p>
              </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectionsConfig.map(section => {
          if ((!section.items || section.items.length === 0) && !section.content) return null;

          return (
            <SectionCard key={section.id} title={section.title} icon={section.icon} className={section.className}>
              {section.items ? (
                <Checklist 
                    items={section.items} 
                    sectionId={section.id} 
                    completedItems={completedItems} 
                    studentData={studentData}
                    onQuizComplete={handleQuizComplete}
                />
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
      <div className="fixed top-[-10000px] left-[-10000px] z-[-1]">
          <RoadmapPDF data={data} studentData={studentData} innerRef={pdfRef} />
      </div>
    </div>
  );
}
