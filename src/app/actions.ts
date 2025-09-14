'use server';

import {
  generatePersonalizedRoadmap,
  type GeneratePersonalizedRoadmapInput,
  type GeneratePersonalizedRoadmapOutput,
} from '@/ai/flows/generate-personalized-roadmap';
import {
  analyzeSkillGaps,
  type AnalyzeSkillGapsInput,
  type AnalyzeSkillGapsOutput,
} from '@/ai/flows/analyze-skill-gaps';
import type { FormValues } from '@/lib/types';


interface RoadmapActionResult {
  success: boolean;
  data?: GeneratePersonalizedRoadmapOutput;
  error?: string;
}

interface SkillGapActionResult {
  success: boolean;
  data?: AnalyzeSkillGapsOutput;
  error?: string;
}

export async function generateRoadmapAction(
  input: FormValues
): Promise<RoadmapActionResult> {
  try {
    const preparedInput: GeneratePersonalizedRoadmapInput = {
      stream: input.stream,
      specialization: input.specialization,
      yearOfStudy: input.yearOfStudy,
      aimingCareer: input.aimingCareer,
      salaryRange: input.salaryRange,
    };
    const output = await generatePersonalizedRoadmap(preparedInput);
    return { success: true, data: output };
  } catch (e: any) {
    console.error(e);
    return { success: false, error: e.message || 'An unknown error occurred.' };
  }
}


export async function analyzeGapsAction(
  input: FormValues
): Promise<SkillGapActionResult> {
  try {
    // We can't pass the full FormValues to the Zod schema if it has extra fields,
    // so we manually construct the input for the AI flow.
    const preparedInput: AnalyzeSkillGapsInput = {
        stream: input.stream,
        specialization: input.specialization,
        aimingCareer: input.aimingCareer,
        yearOfStudy: input.yearOfStudy,
        skillSelfAssessment: {
            coding: input.coding,
            math: input.math,
            communication: input.communication,
        },
    };
    const output = await analyzeSkillGaps(preparedInput);
    return { success: true, data: output };
  } catch (e: any) {
    console.error(e);
    return { success: false, error: e.message || 'An unknown error occurred.' };
  }
}
