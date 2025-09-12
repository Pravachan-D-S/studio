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
  stream: z.string().describe('The student’s stream of study (e.g., BE, B.Tech, Diploma, MCA).'),
  branch: z.string().describe('The student’s branch of study (e.g., ISE, CSE, ECE, Mechanical, Civil).'),
  aimingCareer: z.string().describe('The student’s desired career path (e.g., Data Scientist, Web Developer, AI Expert).'),
  yearOfStudy: z.string().describe('The student’s current year of study (e.g., 1st year, 2nd year, final year, graduate).'),
  timeAvailability: z.string().describe('The number of hours per week the student can dedicate to learning.'),
  skillSelfAssessment: z.string().describe('The student’s self-assessed skill level in areas like coding, math, and communication (e.g., Beginner, Intermediate, Advanced).'),
  locationPreference: z.string().describe('The student’s preferred location for work (e.g., India, US, Remote).'),
  learningStyle: z.string().describe('The student’s preferred learning style (e.g., Video, Reading, Project-based).'),
  salaryRange: z.string().optional().describe('The student\'s target salary range (e.g., 5-8 LPA, 10-15 LPA, 20+ LPA).'),
});

export type GeneratePersonalizedRoadmapInput = z.infer<typeof GeneratePersonalizedRoadmapInputSchema>;

const GeneratePersonalizedRoadmapOutputSchema = z.object({
  skillRoadmap: z.string().describe('A list of technical and soft skills to learn, presented as a newline-separated list.'),
  toolsToMaster: z.string().describe('A list of programming languages, frameworks, IDEs, and libraries to master, presented as a newline-separated list.'),
  timeline: z.string().describe('A realistic 3–12 month plan based on the student’s time availability.'),
  projects: z.string().describe('A list of 3-4 projects with increasing difficulty, suitable for a GitHub portfolio. Each project should be a single line.'),
  skillGapAnalysis: z.string().describe('An analysis highlighting the missing skills between the student’s current state and their target career.'),
  personalizedLearningPath: z.string().describe('A learning path split into weeks or milestones.'),
  resources: z.string().describe('Suggested free/paid courses, tutorials, and documentation.'),
  portfolioBuilder: z.string().describe('Guidance on how to showcase skills (GitHub, blog, LinkedIn), presented as a newline-separated list of actionable items.'),
  resumeInterviewPrep: z.string().describe('A resume outline and common technical/HR interview questions, presented as a newline-separated list.'),
  jobMarketInsights: z.string().describe('Job market insights, including demand, average salary ranges, and key certifications for the target role and location.'),
  motivationGamification: z.string().describe('Suggestions for tracking progress, giving badges/levels, and showing completion percentage towards the career goal.'),
  communityMentorship: z.string().optional().describe('Suggestions for networking (hackathons, alumni, LinkedIn), presented as a newline-separated list.'),
});

export type GeneratePersonalizedRoadmapOutput = z.infer<typeof GeneratePersonalizedRoadmapOutputSchema>;

export async function generatePersonalizedRoadmap(input: GeneratePersonalizedRoadmapInput): Promise<GeneratePersonalizedRoadmapOutput> {
  return generatePersonalizedRoadmapFlow(input);
}

const generatePersonalizedRoadmapPrompt = ai.definePrompt({
  name: 'generatePersonalizedRoadmapPrompt',
  input: {schema: GeneratePersonalizedRoadmapInputSchema},
  output: {schema: GeneratePersonalizedRoadmapOutputSchema},
  prompt: `You are an expert AI Career Advisor named Vidyaan. Your mission is to create a highly personalized, actionable, and motivational career roadmap for students in India.

  Generate a comprehensive roadmap based on the following student information. Be encouraging and use a tone that resonates with students.

  Stream: {{{stream}}}
  Branch: {{{branch}}}
  Aiming Career: {{{aimingCareer}}}
  Year of Study: {{{yearOfStudy}}}
  Time Availability: {{{timeAvailability}}} hours/week
  Skill Self-Assessment: {{{skillSelfAssessment}}}
  Location Preference: {{{locationPreference}}}
  Learning Style: {{{learningStyle}}}
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
  2.  **Tools to Master:** Specific programming languages, frameworks, IDEs, and libraries.
  3.  **Timeline:** A realistic 3–12 month plan.
  4.  **Projects:** 3-4 project ideas with increasing difficulty.
  5.  **Skill Gap Analysis:** Highlight the key skills this student needs to focus on.
  6.  **Personalized Learning Path:** A learning path split into clear milestones (e.g., weekly or monthly).
  7.  **Resources:** Suggest top free and paid courses, tutorials, and documentation (e.g., from Coursera, Udemy, YouTube, official docs).
  8.  **Portfolio Builder:** Actionable steps for showcasing skills (e.g., "Create a GitHub profile with pinned projects", "Write a blog post on Medium about your first project").
  9.  **Resume & Interview Prep:** A brief resume outline and 3-5 common technical/HR interview questions for the target role.
  10. **Job Market Insights:** Insights on demand, salary ranges in India (cross-reference with user's target), and valuable certifications.
  11. **Motivation & Gamification:** A short, encouraging message about tracking progress.
  12. **Community & Mentorship:** Suggestions for networking.`,
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
