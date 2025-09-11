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
});

export type GeneratePersonalizedRoadmapInput = z.infer<typeof GeneratePersonalizedRoadmapInputSchema>;

const GeneratePersonalizedRoadmapOutputSchema = z.object({
  skillRoadmap: z.string().describe('A list of technical and soft skills to learn.'),
  toolsToMaster: z.string().describe('A list of programming languages, frameworks, IDEs, and libraries to master.'),
  timeline: z.string().describe('A realistic 3–12 month plan based on the student’s time availability.'),
  projects: z.string().describe('A list of projects with increasing difficulty, suitable for a GitHub portfolio.'),
  skillGapAnalysis: z.string().describe('An analysis highlighting the missing skills between the student’s current state and their target career.'),
  personalizedLearningPath: z.string().describe('A learning path split into weeks or milestones.'),
  resources: z.string().describe('Suggested free/paid courses, tutorials, and documentation.'),
  portfolioBuilder: z.string().describe('Guidance on how to showcase skills (GitHub, blog, LinkedIn).'),
  resumeInterviewPrep: z.string().describe('A resume outline and common technical/HR interview questions.'),
  jobMarketInsights: z.string().describe('Job market insights, including demand, salary ranges, and certifications for the target role.'),
  motivationGamification: z.string().describe('Suggestions for tracking progress, giving badges/levels, and showing completion percentage towards the career goal.'),
  communityMentorship: z.string().optional().describe('Suggestions for networking (hackathons, alumni, LinkedIn).'),
});

export type GeneratePersonalizedRoadmapOutput = z.infer<typeof GeneratePersonalizedRoadmapOutputSchema>;

export async function generatePersonalizedRoadmap(input: GeneratePersonalizedRoadmapInput): Promise<GeneratePersonalizedRoadmapOutput> {
  return generatePersonalizedRoadmapFlow(input);
}

const generatePersonalizedRoadmapPrompt = ai.definePrompt({
  name: 'generatePersonalizedRoadmapPrompt',
  input: {schema: GeneratePersonalizedRoadmapInputSchema},
  output: {schema: GeneratePersonalizedRoadmapOutputSchema},
  prompt: `You are an AI Career Advisor designed to help students plan their careers.

  Your job is to take student inputs and generate a personalized career roadmap with learning steps, skills, tools, projects, and preparation guidance.

  Generate a roadmap based on the following student information:

  Stream: {{{stream}}}
  Branch: {{{branch}}}
  Aiming Career: {{{aimingCareer}}}
  Year of Study: {{{yearOfStudy}}}
  Time Availability: {{{timeAvailability}}}
  Skill Self-Assessment: {{{skillSelfAssessment}}}
  Location Preference: {{{locationPreference}}}
  Learning Style: {{{learningStyle}}}

  Output should be formatted to address the following:

  Skill Roadmap: list of technical + soft skills to learn.

  Tools to Master: programming languages, frameworks, IDEs, libraries.

  Timeline: realistic 3–12 month plan based on availability.

  Projects: increasing difficulty (with GitHub-friendly titles).

  Skill Gap Analysis: highlight missing skills between student’s current state and target career.

  Personalized Learning Path: split into weeks or milestones.

  Resources: suggest free/paid courses, tutorials, and documentation.

  Portfolio Builder: suggest how to showcase skills (GitHub, blog, LinkedIn).

  Resume & Interview Prep: resume outline + common technical/HR questions.

  Job Market Insights: show demand, salary ranges, and certifications for the target role.

  Motivation & Gamification: track progress, give badges/levels, show completion % towards career goal.

  Community & Mentorship (optional): suggest networking (hackathons, alumni, LinkedIn).`,
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
