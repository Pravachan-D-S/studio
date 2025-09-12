'use client';

import { useState, useMemo } from 'react';
import type { GeneratePersonalizedRoadmapOutput } from '@/ai/flows/generate-personalized-roadmap';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
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
} from 'lucide-react';

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

export default function RoadmapDisplay({ data, onReset }: RoadmapDisplayProps) {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  
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

  const sectionsConfig = [
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
        <Button onClick={onReset} variant="outline">Start Over</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Award className="w-5 h-5 text-primary" /> Progress Tracker</CardTitle>
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
                <ul className="space-y-2">
                {parseList(section.content).map((line, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-1 text-primary shrink-0"/>
                        <span>{line}</span>
                    </li>
                ))}
                </ul>
              )}
            </SectionCard>
          );
        })}
      </div>
    </div>
  );
}
