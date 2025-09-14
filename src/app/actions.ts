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

// Note: This function has been updated to accept any object that fits the input type.
// This is a temporary solution to accommodate the new dynamic form.
// A more robust solution would involve a more flexible schema or multiple actions.
export async function generateRoadmapAction(
  input: Omit<GeneratePersonalizedRoadmapInput, 'skillSelfAssessment' | 'locationPreference' | 'learningStyle' | 'timeAvailability'> & { [key: string]: string }
): Promise<ActionResult> {
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
