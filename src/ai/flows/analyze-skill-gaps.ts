'use server';
/**
 * @fileOverview Identifies the skills a student is missing to reach their target career.
 *
 * - analyzeSkillGaps - A function that takes student information and returns a skill gap analysis.
 * - AnalyzeSkillGapsInput - The input type for the analyzeSkillGaps function.
 * - AnalyzeSkillGapsOutput - The return type for the analyzeSkillGaps function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSkillGapsInputSchema = z.object({
  stream: z.string().describe('The student\'s stream of study (e.g., BE, B.Tech, Diploma, MCA).'),
  branch: z.string().describe('The student\'s branch of study (e.g., ISE, CSE, ECE, Mechanical, Civil).'),
  aimingCareer: z.string().describe('The student\'s target career (e.g., Data Scientist, Web Developer, AI Expert).'),
  yearOfStudy: z.string().describe('The student\'s year of study (e.g., 1st year, 2nd year, final year, graduate).'),
  skillSelfAssessment: z.object({
    coding: z.enum(['Beginner', 'Intermediate', 'Advanced']).describe('The student\'s self-assessment of their coding skills.'),
    math: z.enum(['Beginner', 'Intermediate', 'Advanced']).describe('The student\'s self-assessment of their math skills.'),
    communication: z.enum(['Beginner', 'Intermediate', 'Advanced']).describe('The student\'s self-assessment of their communication skills.'),
  }).describe('The student\'s self-assessment of their skills.'),
});
export type AnalyzeSkillGapsInput = z.infer<typeof AnalyzeSkillGapsInputSchema>;

const AnalyzeSkillGapsOutputSchema = z.object({
  missingSkills: z.array(z.string()).describe('A list of skills the student is missing to reach their target career.'),
});
export type AnalyzeSkillGapsOutput = z.infer<typeof AnalyzeSkillGapsOutputSchema>;

export async function analyzeSkillGaps(input: AnalyzeSkillGapsInput): Promise<AnalyzeSkillGapsOutput> {
  return analyzeSkillGapsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSkillGapsPrompt',
  input: {schema: AnalyzeSkillGapsInputSchema},
  output: {schema: AnalyzeSkillGapsOutputSchema},
  prompt: `You are an AI career advisor. A student has provided the following information:

  Stream: {{{stream}}}
  Branch: {{{branch}}}
  Aiming Career: {{{aimingCareer}}}
  Year of Study: {{{yearOfStudy}}}
  Skill Self-Assessment:
    Coding: {{{skillSelfAssessment.coding}}}
    Math: {{{skillSelfAssessment.math}}}
    Communication: {{{skillSelfAssessment.communication}}}

Based on this information, identify the skills the student is missing to reach their target career. Provide a list of skills.

Missing Skills:`,
});

const analyzeSkillGapsFlow = ai.defineFlow(
  {
    name: 'analyzeSkillGapsFlow',
    inputSchema: AnalyzeSkillGapsInputSchema,
    outputSchema: AnalyzeSkillGapsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
