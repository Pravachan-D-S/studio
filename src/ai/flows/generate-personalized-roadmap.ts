'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personalized career roadmap for students.
 *
 * The flow takes student inputs such as stream, branch, career goals, current skills, etc., and generates
 * a personalized career roadmap with learning steps, timelines, and resources.
 *
 * @exports generatePersonalizedRoadmap - The main function to trigger the roadmap generation flow.
 * @exports GeneratePersonalizedRoadmapInput - The input type for the generatePersonalizedRoadmap function.
 * @exports GeneratePersonalizedRoadmapOutput - The output type for the generatePersonalizedRoadmap function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedRoadmapInputSchema = z.object({
  stream: z.string().describe('The student’s stream of study (e.g., Engineering, MBA, MCA).'),
  specialization: z.string().describe('The student’s branch or specialization (e.g., CSE, Finance, Software Development).'),
  programDuration: z.string().describe('The duration of the student\'s program in years.'),
  aimingCareer: z.string().describe('The student’s desired career path (e.g., Data Scientist, Web Developer, Product Manager).'),
  salaryRange: z.string().describe('The student\'s target salary range (e.g., <5 LPA, 5-10 LPA, 20+ LPA).'),
});

export type GeneratePersonalizedRoadmapInput = z.infer<typeof GeneratePersonalizedRoadmapInputSchema>;

const GeneratePersonalizedRoadmapOutputSchema = z.object({
  skillRoadmap: z.string().describe('A list of technical and soft skills to learn, presented as a newline-separated list.'),
  toolsToMaster: z.string().describe('A list of programming languages, frameworks, IDEs, and libraries to master, presented as a newline-separated list.'),
  timeline: z.string().describe('A realistic plan based on the student’s program duration and career goal, estimating how many years it might take to reach the goal.'),
  projects: z.string().describe('A list of 3-4 projects with increasing difficulty, suitable for a GitHub portfolio. Each project should be a single line.'),
  resources: z.string().describe('Suggested free/paid courses, tutorials, books, and communities.'),
  careerGrowth: z.string().describe('An overview of career growth opportunities for the chosen path, including potential roles and advancements.'),
  resumeInterviewPrep: z.string().describe('A resume outline and common technical/HR interview questions, presented as a newline-separated list.'),
  jobMarketInsights: z.string().describe('Job market insights, including demand, average salary ranges, and key certifications for the target role and location.'),
});

export type GeneratePersonalizedRoadmapOutput = z.infer<typeof GeneratePersonalizedRoadmapOutputSchema>;

export async function generatePersonalizedRoadmap(input: GeneratePersonalizedRoadmapInput): Promise<GeneratePersonalizedRoadmapOutput> {
  return generatePersonalizedRoadmapFlow(input);
}

const generatePersonalizedRoadmapPrompt = ai.definePrompt({
  name: 'generatePersonalizedRoadmapPrompt',
  input: {schema: GeneratePersonalizedRoadmapInputSchema},
  output: {schema: GeneratePersonalizedRoadmapOutputSchema},
  prompt: `You are an expert AI Career Advisor named Vidyaan. Your mission is to create a highly personalized, actionable, and motivational career roadmap for students.

  Generate a comprehensive roadmap based on the following student information. Be encouraging and use a tone that resonates with students.

  Stream: {{{stream}}}
  Specialization: {{{specialization}}}
  Program Duration: {{{programDuration}}} years
  Aiming Career: {{{aimingCareer}}}
  Target Salary: {{{salaryRange}}}

  **IMPORTANT INSTRUCTIONS:**
  - For any field that should be a list, provide a newline-separated string. For example:
    - Skill 1
    - Skill 2
    - Skill 3
  - Be specific and provide concrete examples.
  - The tone should be like a friendly and knowledgeable mentor.

  **Roadmap Output:**

  1.  **Skill Roadmap:** A list of essential technical and soft skills.
  2.  **Tools to Master:** Specific programming languages, frameworks, and libraries.
  3.  **Estimated Timeline:** An estimation of how many years it will take to achieve the career goal.
  4.  **Project Ideas:** 3-4 project ideas with increasing difficulty.
  5.  **Learning Resources:** Suggest top free and paid courses, books, and communities.
  6.  **Career Growth:** Describe potential career growth and future opportunities.
  7.  **Resume & Interview Prep:** A brief resume outline and 3-5 common interview questions.
  8.  **Job Market Insights:** Insights on demand, salary ranges, and valuable certifications.`,
});

const generatePersonalizedRoadmapFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedRoadmapFlow',
    inputSchema: GeneratePersonalizedRoadmapInputSchema,
    outputSchema: GeneratePersonalizedRoadmapOutputSchema,
  },
  async input => {
    const {output} = await generatePersonalizedRoadmapPrompt(input);
    return output!;
  }
);
