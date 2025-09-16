'use client';

import React, { useState, useMemo, useRef } from 'react';
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
  Lock,
  Award,
  HelpCircle,
  CheckCircle2,
  Check,
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { QuizDialog } from './quiz-dialog';
import { RoadmapPDF } from './roadmap-pdf';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

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

const SimpleChecklist = ({ items, sectionId, onToggle, completedItems }: { items: string[], sectionId: string, onToggle: (id: string) => void, completedItems: Set<string> }) => (
    <ul className="space-y-3">
        {items.map((item, index) => {
            const id = `${sectionId}-${index}`;
            const isCompleted = completedItems.has(id);
            return (
                <li key={id} className="flex items-center gap-3">
                    <Checkbox id={id} checked={isCompleted} onCheckedChange={() => onToggle(id)} />
                    <Label htmlFor={id} className={cn('flex-1 cursor-pointer', { 'line-through text-muted-foreground': isCompleted, 'text-foreground': !isCompleted })}>{item}</Label>
                </li>
            )
        })}
    </ul>
);

const LockedChecklist = ({ 
  items, 
  sectionId, 
  completedItems,
  studentData,
  onQuizComplete,
  isLocked,
  unlockedIndex,
}: { 
  items: string[], 
  sectionId: string, 
  completedItems: Set<string>,
  studentData: FormValues,
  onQuizComplete: (skillId: string, skillName: string) => void,
  isLocked: boolean,
  unlockedIndex: number,
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
            const canVerify = isLocked ? index === unlockedIndex : !isCompleted;
            const isSkillLocked = isLocked && index > unlockedIndex;

            return (
              <li key={id} className="flex items-start gap-3 group">
                 <div className="flex items-center w-full justify-between">
                    <span className={cn('flex-1', {
                        'line-through text-green-600': isCompleted,
                        'text-foreground': !isCompleted && !isSkillLocked,
                        'text-muted-foreground': isSkillLocked,
                    })}>
                        {item}
                    </span>
                    {canVerify && !isCompleted ? (
                        <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleVerifyClick(item)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <HelpCircle className="w-4 h-4 mr-2" />
                            Verify
                        </Button>
                    ) : (
                        isSkillLocked ? (
                             <Lock className="w-4 h-4 text-muted-foreground" />
                        ) : isCompleted ? (
                             <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : null
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
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => ({
    skillRoadmap: parseList(data.skillRoadmap),
    toolsToMaster: parseList(data.toolsToMaster),
    projects: parseList(data.projects),
    resumeInterviewPrep: parseList(data.resumeInterviewPrep),
  }), [data]);

  const allSkills = useMemo(() => [
    ...sections.skillRoadmap.map((_, i) => `skillRoadmap-${i}`),
    ...sections.toolsToMaster.map((_, i) => `toolsToMaster-${i}`),
  ], [sections]);

  const totalChecklistItems = useMemo(() => allSkills.length, [allSkills]);
  
  const unlockedItemIndex = useMemo(() => {
    return allSkills.findIndex(id => !completedItems.has(id));
  }, [completedItems, allSkills]);
  
  const handleSimpleChecklistToggle = (itemId: string) => {
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

  const handleQuizComplete = (itemId: string, skillName: string) => {
    setCompletedItems(prev => {
        const newSet = new Set(prev);
        newSet.add(itemId);
        return newSet;
    });
  };

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    const content = pdfContainerRef.current;
    if (!content) {
        setIsGeneratingPdf(false);
        return;
    }

    const pdf = new jsPDF('p', 'pt', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const margin = 40;
    const contentWidth = pdfWidth - margin * 2;

    const sections = content.querySelectorAll('[data-pdf-section]');
    let yPos = margin;

    const addPageIfNeeded = (elementHeight: number) => {
        if (yPos + elementHeight > pdfHeight - margin) {
            pdf.addPage();
            yPos = margin;
        }
    };

    // Header
    const headerCanvas = await html2canvas(content.querySelector('#pdf-header') as HTMLElement, { scale: 2 });
    const headerImgData = headerCanvas.toDataURL('image/png');
    const headerHeight = (headerCanvas.height * contentWidth) / headerCanvas.width;
    addPageIfNeeded(headerHeight);
    pdf.addImage(headerImgData, 'PNG', margin, yPos, contentWidth, headerHeight);
    yPos += headerHeight + 20;

    // Motivational Nudge
    const nudgeEl = content.querySelector('#pdf-nudge') as HTMLElement;
    if (nudgeEl) {
        const nudgeCanvas = await html2canvas(nudgeEl, { scale: 2 });
        const nudgeHeight = (nudgeCanvas.height * contentWidth) / nudgeCanvas.width;
        addPageIfNeeded(nudgeHeight + 20);
        pdf.addImage(nudgeCanvas.toDataURL('image/png'), 'PNG', margin, yPos, contentWidth, nudgeHeight);
        yPos += nudgeHeight + 20;
    }
    
    // Main content sections
    for (const section of Array.from(sections)) {
        const canvas = await html2canvas(section as HTMLElement, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');
        const sectionHeight = (canvas.height * contentWidth) / canvas.width;

        addPageIfNeeded(sectionHeight + 10);
        
        pdf.addImage(imgData, 'PNG', margin, yPos, contentWidth, sectionHeight);
        yPos += sectionHeight + 10; // Add some padding between sections
    }

    // Footer
    const footerEl = content.querySelector('#pdf-footer') as HTMLElement;
    if (footerEl) {
        const footerCanvas = await html2canvas(footerEl, { scale: 2 });
        const footerHeight = (footerCanvas.height * contentWidth) / footerCanvas.width;
        addPageIfNeeded(footerHeight + 20);
        pdf.addImage(footerCanvas.toDataURL('image/png'), 'PNG', margin, yPos, contentWidth, footerHeight);
    }

    pdf.save('Vidyaan-Roadmap.pdf');
    setIsGeneratingPdf(false);
  };


  const progressPercentage = totalChecklistItems > 0 ? (completedItems.size / totalChecklistItems) * 100 : 0;

  const getNextMilestone = () => {
    if (unlockedItemIndex === -1 && totalChecklistItems > 0) {
        return "You've completed all verifiable skills!";
    }
    if (totalChecklistItems === 0) {
        return "No verifiable skills in this roadmap.";
    }
    const nextId = allSkills[unlockedItemIndex];
    if (!nextId) return "All skills verified!";

    const [section, indexStr] = nextId.split('-');
    const index = parseInt(indexStr, 10);
    // @ts-ignore
    const itemText = sections[section][index];
    return itemText.length > 40 ? itemText.substring(0, 40) + '...' : itemText;
  }

  const getProgressBadge = () => {
    const percentage = Math.round(progressPercentage);
    if (percentage >= 80) {
      return <Badge className="text-xs px-2 py-1 bg-yellow-400 text-yellow-900 border-yellow-500"><Award className="mr-1" /> Gold</Badge>;
    } else if (percentage >= 40) {
      return <Badge className="text-xs px-2 py-1 bg-gray-300 text-gray-800 border-gray-400"><Award className="mr-1" /> Silver</Badge>;
    } else {
      return <Badge className="text-xs px-2 py-1 bg-orange-400 text-orange-900 border-orange-500"><Award className="mr-1" /> Bronze</Badge>;
    }
  };

  const sectionsConfig = [
    { id: 'motivationalNudge', title: 'Motivational Nudge', icon: Award, content: data.motivationalNudge, className: 'lg:col-span-3' },
    { id: 'skillRoadmap', title: 'Skill Roadmap', icon: List, items: sections.skillRoadmap, className: 'lg:col-span-1', isLocked: true },
    { id: 'toolsToMaster', title: 'Tools to Master', icon: Wrench, items: sections.toolsToMaster, className: 'lg:col-span-1', isLocked: true },
    { id: 'timeline', title: 'Estimated Timeline', icon: Calendar, content: data.timeline, className: 'lg:col-span-1' },
    { id: 'projects', title: 'Project Ideas', icon: FlaskConical, items: sections.projects, className: 'lg:col-span-3', isLocked: false },
    { id: 'resources', title: 'Learning Resources', icon: Lightbulb, content: data.resources, className: 'lg:col-span-2' },
    { id: 'careerGrowth', title: 'Career Growth', icon: TrendingUp, content: data.careerGrowth, className: 'lg:col-span-1' },
    { id: 'resumeInterviewPrep', title: 'Resume & Interview Prep', icon: Briefcase, items: sections.resumeInterviewPrep, className: 'lg:col-span-2', isLocked: false },
    { id: 'jobMarketInsights', title: 'Job Market Insights', icon: BarChart, content: data.jobMarketInsights, className: 'lg:col-span-1' },
  ];
  
  const unlockedSectionName = allSkills[unlockedItemIndex] ? allSkills[unlockedItemIndex].split('-')[0] : null;


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
             <span>Progress Tracker (Verifiable Skills)</span>
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
        {sectionsConfig.map((section, idx) => {
          if ((!section.items || section.items.length === 0) && !section.content) return null;
           
           let sectionUnlockedIndex = -1;
           if (section.id === 'skillRoadmap' && unlockedSectionName === 'skillRoadmap') {
               sectionUnlockedIndex = unlockedItemIndex;
           } else if (section.id === 'toolsToMaster' && unlockedSectionName === 'toolsToMaster') {
               sectionUnlockedIndex = unlockedItemIndex - sections.skillRoadmap.length;
           }

          return (
            <SectionCard key={section.id} title={section.title} icon={section.icon} className={section.className}>
              {section.items ? (
                 section.isLocked ? (
                    <LockedChecklist 
                        items={section.items} 
                        sectionId={section.id} 
                        completedItems={completedItems} 
                        studentData={studentData}
                        onQuizComplete={handleQuizComplete}
                        isLocked={section.isLocked}
                        unlockedIndex={sectionUnlockedIndex}
                    />
                 ) : (
                    <SimpleChecklist
                        items={section.items}
                        sectionId={section.id}
                        completedItems={completedItems}
                        onToggle={handleSimpleChecklistToggle}
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
      {/* Hidden container for PDF rendering */}
      <div className="fixed top-[-10000px] left-[-10000px] z-[-1]">
        <RoadmapPDF data={data} studentData={studentData} innerRef={pdfContainerRef} />
      </div>
    </div>
  );
}
