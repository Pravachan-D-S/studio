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
import type { FormValues, GenerateQuizInput, GenerateQuizOutput, Roadmap } from '@/lib/types';
import {
  generateQuiz,
} from '@/ai/flows/generate-quiz';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


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

interface QuizActionResult {
    success: boolean;
    data?: GenerateQuizOutput;
    error?: string;
}

interface SaveRoadmapResult {
    success: boolean;
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

export async function generateQuizAction(
    input: GenerateQuizInput
): Promise<QuizActionResult> {
    try {
        const output = await generateQuiz(input);
        return { success: true, data: output };
    } catch (e: any) {
        console.error(e);
        return { success: false, error: e.message || 'An unknown error occurred.' };
    }
}

export async function saveRoadmapAction(
    roadmapData: GeneratePersonalizedRoadmapOutput, 
    studentData: FormValues,
    userId: string,
    name: string
): Promise<SaveRoadmapResult> {
    if (!userId) {
        return { success: false, error: 'User is not authenticated.' };
    }

    try {
        const roadmapToSave: Omit<Roadmap, 'id'> = {
            userId,
            name,
            roadmapData,
            studentData,
            createdAt: serverTimestamp(),
        };

        await addDoc(collection(db, 'roadmaps'), roadmapToSave);
        return { success: true };
    } catch (e: any) {
        console.error('Error saving roadmap: ', e);
        return { success: false, error: e.message || 'Failed to save roadmap.' };
    }
}
