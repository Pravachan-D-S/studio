'use client';

import React, { useMemo } from 'react';
import type { GeneratePersonalizedRoadmapOutput } from '@/ai/flows/generate-personalized-roadmap';
import type { FormValues } from '@/lib/types';
import { VidyaanLogo } from './icons';
import {
  List,
  Wrench,
  Calendar,
  FlaskConical,
  Lightbulb,
  Briefcase,
  TrendingUp,
  BarChart,
} from 'lucide-react';


const parseList = (text: string | undefined): string[] => {
  if (!text) return [];
  return text.split('\n').map(s => s.replace(/^- /, '').trim()).filter(Boolean);
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

export const RoadmapPDF = ({ data, studentData, innerRef }: { data: GeneratePersonalizedRoadmapOutput; studentData: FormValues; innerRef: React.Ref<HTMLDivElement> }) => {
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
            <style>{`
              @media print {
                html, body {
                  width: 210mm;
                  height: 297mm;
                }
                @page {
                  size: A4;
                  margin: 10mm;
                }
                .break-inside-avoid {
                  page-break-inside: avoid;
                }
              }
            `}</style>
            <div id="pdf-header" className="flex items-center justify-between pb-4 border-b mb-6">
                <h1 className="text-3xl font-bold text-gray-800" style={{ color: '#005B96' }}>Vidyaan</h1>
                <h2 className="text-2xl font-semibold text-gray-700">Your Personalized Career Roadmap</h2>
            </div>

            {data.motivationalNudge && (
              <div id="pdf-nudge" className="mb-6 p-4 bg-sky-50 rounded-lg text-center break-inside-avoid">
                  <p className="text-sm italic text-sky-800">"{data.motivationalNudge}"</p>
              </div>
            )}
            
            <div className="columns-2 gap-x-8">
                {sectionsConfig.map(section => {
                     if ((!section.items || section.items.length === 0) && (!section.content || section.content.length === 0)) return null;
                     const content = section.items || section.content;
                     return(
                         <div key={section.id} data-pdf-section className="mb-4 break-inside-avoid">
                             <PDFSection title={section.title} icon={section.icon} isList={section.isList}>
                                {content?.map((item: any, index: number) => <div key={index}>{item}</div>)}
                            </PDFSection>
                         </div>
                     )
                })}
            </div>

            <div id="pdf-footer" className="mt-8 pt-4 border-t text-center text-xs text-gray-500">
                <p>Generated by Vidyaan - Your AI Career Guide</p>
            </div>
        </div>
    )
}