'use client';

import React from 'react';
import type { GeneratePersonalizedRoadmapOutput } from '@/ai/flows/generate-personalized-roadmap';
import type { FormValues } from '@/lib/types';


// This component is now just a placeholder for the PDF generation logic in RoadmapDisplay
export const RoadmapPDF = ({ data, studentData, innerRef }: { data: GeneratePersonalizedRoadmapOutput; studentData: FormValues; innerRef: React.Ref<HTMLDivElement> }) => {
    return (
        <div ref={innerRef} id="pdf-content-wrapper" className="p-8 bg-white text-gray-800" style={{ width: '210mm' }}>
          {/* Content is now generated directly in the handleDownloadPdf function */}
        </div>
    )
}
