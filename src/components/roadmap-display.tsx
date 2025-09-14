'use client';

import React, { useState, useMemo, useRef } from 'react';
import type { GeneratePersonalizedRoadmapOutput } from '@/ai/flows/generate-personalized-roadmap';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import {
  List,
  GraduationCap,
  Wrench,
  Calendar,
  FlaskConical,
  Lightbulb,
  FileText,
  Briefcase,
  Users,
  Award,
  ChevronRight,
  TrendingUp,
  BarChart,
  Download,
  Loader2,
  Heart,
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { VidyaanLogo } from './icons';

interface RoadmapDisplayProps {
  data: GeneratePersonalizedRoadmapOutput;
  onReset: () => void;
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

const Checklist = ({ items, sectionId, onToggle, completedItems }: { items: string[], sectionId: string, onToggle: (id: string) => void, completedItems: Set<string> }) => (
  <ul className="space-y-3">
    {items.map((item, index) => {
      const id = `${sectionId}-${index}`;
      const isCompleted = completedItems.has(id);
      return (
        <li key={id} className="flex items-start gap-3">
          <Checkbox id={id} checked={isCompleted} onCheckedChange={() => onToggle(id)} className="mt-1"/>
          <label htmlFor={id} className={`flex-1 ${isCompleted ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
            {item}
          </label>
        </li>
      );
    })}
  </ul>
);

const PDFSection = ({ title, icon: Icon, children, isList = false }: { title: string; icon: React.ElementType; children: React.ReactNode, isList?: boolean }) => (
    <div className="mb-6 break-inside-avoid">
        <div className="flex items-center gap-3 mb-2 border-b pb-2">
            <Icon className="w-5 h-5 text-primary" />
            <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        </div>
        {isList ? (
            <ul className="space-y-1 text-xs text-gray-600">
                {React.Children.map(children, child => <li className="flex items-start"><span className="mr-2 mt-1">&#8226;</span><span>{child}</span></li>)}
            </ul>
        ) : (
             <div className="text-xs text-gray-600 space-y-1">{children}</div>
        )}
    </div>
);


const RoadmapPDF = ({ data, innerRef }: { data: GeneratePersonalizedRoadmapOutput; innerRef: React.Ref<HTMLDivElement> }) => {
  const sectionsConfig = useMemo(() => ([
    { id: 'skillRoadmap', title: 'Skill Roadmap', icon: List, items: parseList(data.skillRoadmap) },
    { id: 'toolsToMaster', title: 'Tools to Master', icon: Wrench, items: parseList(data.toolsToMaster) },
    { id: 'projects', title: 'Project Ideas', icon: FlaskConical, items: parseList(data.projects) },
    { id: 'resumeInterviewPrep', title: 'Resume & Interview Prep', icon: Briefcase, items: parseList(data.resumeInterviewPrep) },
    { id: 'timeline', title: 'Estimated Timeline', icon: Calendar, content: parseList(data.timeline) },
    { id: 'resources', title: 'Learning Resources', icon: Lightbulb, content: parseList(data.resources) },
    { id: 'careerGrowth', title: 'Career Growth', icon: TrendingUp, content: parseList(data.careerGrowth) },
    { id: 'jobMarketInsights', title: 'Job Market Insights', icon: BarChart, content: parseList(data.jobMarketInsights) },
  ]), [data]);

    return (
        <div ref={innerRef} className="p-8 bg-white text-gray-800" style={{ width: '210mm' }}>
            <div className="flex items-center justify-between pb-4 border-b mb-6">
                <VidyaanLogo className="h-12 w-auto" />
                <h1 className="text-2xl font-bold text-gray-700">Your Personalized Career Roadmap</h1>
            </div>

            {data.motivationalNudge && (
              <div className="mb-6 p-4 bg-sky-50 rounded-lg text-center">
                  <p className="text-sm italic text-sky-800">"{data.motivationalNudge}"</p>
              </div>
            )}
            
            <div className="columns-2 gap-8">
                {sectionsConfig.map(section => {
                    if ((!section.items || section.items.length === 0) && (!section.content || section.content.length === 0)) return null;

                    return (
                        <PDFSection key={section.id} title={section.title} icon={section.icon} isList={!!section.items}>
                            {(section.items || section.content)?.map((item, index) => <div key={index}>{item}</div>)}
                        </PDFSection>
                    )
                })}
            </div>

            <div className="mt-8 pt-4 border-t text-center text-xs text-gray-500">
                <p>Generated by Vidyaan - Your AI Career Guide</p>
            </div>
        </div>
    )
}

export default function RoadmapDisplay({ data, onReset }: RoadmapDisplayProps) {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => ({
    skillRoadmap: parseList(data.skillRoadmap),
    toolsToMaster: parseList(data.toolsToMaster),
    projects: parseList(data.projects),
    resumeInterviewPrep: parseList(data.resumeInterviewPrep),
  }), [data]);

  const totalChecklistItems = Object.values(sections).reduce((sum, items) => sum + items.length, 0);

  const toggleItem = (id: string) => {
    setCompletedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleDownloadPdf = async () => {
    if (!pdfRef.current) return;
    setIsGeneratingPdf(true);
    
    try {
        const canvas = await html2canvas(pdfRef.current, {
            scale: 2, // Higher scale for better quality
            useCORS: true,
            logging: false,
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
        });
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const ratio = canvasWidth / canvasHeight;
        const height = pdfWidth / ratio;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, height);
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
      ...sections.projects.map((_, i) => `projects-${i}`),
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

  const getAwardColor = () => {
    if (progressPercentage >= 75) return 'text-amber-400'; // Gold
    if (progressPercentage >= 50) return 'text-slate-400'; // Silver
    if (progressPercentage >= 25) return 'text-orange-400'; // Bronze
    return 'text-primary';
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
          <CardTitle className="flex items-center gap-2">
            <Award className={cn("w-5 h-5 transition-colors", getAwardColor())} />
             Progress Tracker
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
                <Checklist items={section.items} sectionId={section.id} onToggle={toggleItem} completedItems={completedItems} />
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
          <RoadmapPDF data={data} innerRef={pdfRef} />
      </div>
    </div>
  );
}
