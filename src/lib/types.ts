import { z } from 'zod';
import { streams, salaryRanges } from './constants';
import type { GeneratePersonalizedRoadmapOutput } from '@/ai/flows/generate-personalized-roadmap';
import type { Timestamp } from 'firebase/firestore';

const skillLevels = ['Beginner', 'Intermediate', 'Advanced'] as const;

export const formSchema = z.object({
  stream: z.string({ required_error: 'Stream is required.' }).refine(val => streams.includes(val), { message: 'Please select a valid stream.'}),
  specialization: z.string().min(1, 'Specialization is required.'),
  yearOfStudy: z.string().min(1, 'Year of study is required.'),
  salaryRange: z.string({ required_error: 'Salary range is required.' }).refine(val => salaryRanges.includes(val), { message: 'Please select a valid salary range.'}),
  aimingCareer: z.string().min(1, 'Career goal is required.'),
  coding: z.enum(skillLevels, { required_error: 'Please rate your coding skills.' }),
  math: z.enum(skillLevels, { required_error: 'Please rate your math skills.' }),
  communication: z.enum(skillLevels, { required_error: 'Please rate your communication skills.' }),
});

export type FormValues = z.infer<typeof formSchema>;

export const GenerateQuizInputSchema = z.object({
  stream: z.string().describe('The student\'s stream of study (e.g., Engineering, MBA, Diploma).'),
  specialization: z.string().describe('The student\'s branch of study (e.g., CSE, Finance, Mechanical).'),
  skill: z.string().describe('The specific skill to be tested (e.g., "Data Structures and Algorithms", "Financial Modeling").'),
});
export type GenerateQuizInput = z.infer<typeof GenerateQuizInputSchema>;

const MCQSchema = z.object({
    question: z.string().describe("The multiple-choice question."),
    options: z.array(z.string()).length(4).describe("An array of 4 possible answers."),
    correctAnswer: z.string().describe("The correct answer from the options."),
});

export const EngineeringQuizSchema = z.object({
    mcqs: z.array(MCQSchema).length(2).describe("Two multiple-choice questions on fundamental concepts."),
    codingQuestion: z.string().describe("A practical coding question to test application of the skill. Provide a clear problem statement."),
    errorFindingQuestion: z.string().describe("A snippet of code or a problem description with a subtle error. The student must find and explain the error."),
    conceptualQuestion: z.string().describe("An open-ended, interview-style conceptual question."),
});

export const MbaQuizSchema = z.object({
    mcqs: z.array(MCQSchema).length(2).describe("Two multiple-choice questions on theory or terminology."),
    caseStudyQuestion: z.string().describe("A short case study. The student must analyze it and provide a solution or recommendation."),
    strategyQuestion: z.string().describe("A business or strategy scenario question requiring a thoughtful response."),
    conceptualQuestion: z.string().describe("An open-ended, interview-style conceptual question related to the business world."),
});

export const NonTechQuizSchema = z.object({
    mcqs: z.array(MCQSchema).length(2).describe("Two multiple-choice questions on basic concepts."),
    practicalQuestion: z.string().describe("A practical or diagram-based question (e.g., interpret a circuit, label a diagram, describe a process flow)."),
    errorIdentificationQuestion: z.string().describe("A description of a scenario or setup with a flaw. The student must identify the error."),
    conceptualQuestion: z.string().describe("An open-ended, interview-style conceptual question."),
});


export const GenerateQuizOutputSchema = z.object({
  quizType: z.enum(['Engineering', 'MBA', 'Non-Tech']),
  quizData: z.any(), // This will be validated dynamically
  passingCriteria: z.string().describe("A human-readable explanation of the passing criteria."),
  hints: z.array(z.string()).describe("A list of hints or key areas to study if the student fails."),
});
export type GenerateQuizOutput = z.infer<typeof GenerateQuizOutputSchema>;

export interface Roadmap {
    id: string;
    userId: string;
    name: string;
    roadmapData: GeneratePersonalizedRoadmapOutput;
    studentData: FormValues;
    createdAt: Timestamp;
}
