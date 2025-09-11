'use server';

import {
  generatePersonalizedRoadmap,
  type GeneratePersonalizedRoadmapInput,
  type GeneratePersonalizedRoadmapOutput,
} from '@/ai/flows/generate-personalized-roadmap';

interface ActionResult {
  success: boolean;
  data?: GeneratePersonalizedRoadmapOutput;
  error?: string;
}

export async function generateRoadmapAction(
  input: GeneratePersonalizedRoadmapInput
): Promise<ActionResult> {
  try {
    const output = await generatePersonalizedRoadmap(input);
    return { success: true, data: output };
  } catch (e: any) {
    console.error(e);
    return { success: false, error: e.message || 'An unknown error occurred.' };
  }
}
