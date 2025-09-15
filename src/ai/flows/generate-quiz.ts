'use server';
/**
 * @fileOverview Generates an adaptive quiz to verify a student's skill.
 *
 * - generateQuiz - A function that creates a quiz based on the student's stream and a specific skill.
 * - GenerateQuizInput - The input type for the generateQuiz function.
 * - GenerateQuizOutput - The return type for the generateQuiz function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

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

const EngineeringQuizSchema = z.object({
    mcqs: z.array(MCQSchema).length(2).describe("Two multiple-choice questions on fundamental concepts."),
    codingQuestion: z.string().describe("A practical coding question to test application of the skill. Provide a clear problem statement."),
    errorFindingQuestion: z.string().describe("A snippet of code or a problem description with a subtle error. The student must find and explain the error."),
    conceptualQuestion: z.string().describe("An open-ended, interview-style conceptual question."),
});

const MbaQuizSchema = z.object({
    mcqs: z.array(MCQSchema).length(2).describe("Two multiple-choice questions on theory or terminology."),
    caseStudyQuestion: z.string().describe("A short case study. The student must analyze it and provide a solution or recommendation."),
    strategyQuestion: z.string().describe("A business or strategy scenario question requiring a thoughtful response."),
    conceptualQuestion: z.string().describe("An open-ended, interview-style conceptual question related to the business world."),
});

const NonTechQuizSchema = z.object({
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


export async function generateQuiz(input: GenerateQuizInput): Promise<GenerateQuizOutput> {
  return generateQuizFlow(input);
}


const generateQuizFlow = ai.defineFlow(
  {
    name: 'generateQuizFlow',
    inputSchema: GenerateQuizInputSchema,
    outputSchema: GenerateQuizOutputSchema,
  },
  async (input) => {
    const isEngineering = ['Engineering', 'MCA'].includes(input.stream);
    const isMba = input.stream === 'MBA';
    
    let quizType: 'Engineering' | 'MBA' | 'Non-Tech';
    let promptName: string;
    let outputSchema: z.ZodTypeAny;

    if (isEngineering) {
        quizType = 'Engineering';
        promptName = 'generateEngineeringQuizPrompt';
        outputSchema = EngineeringQuizSchema;
    } else if (isMba) {
        quizType = 'MBA';
        promptName = 'generateMbaQuizPrompt';
        outputSchema = MbaQuizSchema;
    } else {
        quizType = 'Non-Tech';
        promptName = 'generateNonTechQuizPrompt';
        outputSchema = NonTechQuizSchema;
    }

    const quizGenerationPrompt = ai.definePrompt({
        name: promptName,
        input: { schema: GenerateQuizInputSchema },
        output: { schema: outputSchema },
        prompt: `You are an expert Quiz Master for technical and business students. Your task is to generate a short but effective quiz to verify a student's proficiency in a specific skill.

        **Student Profile:**
        - Stream: {{{stream}}}
        - Specialization: {{{specialization}}}
        - Skill to Test: {{{skill}}}

        **Instructions:**
        - Generate a quiz that strictly follows the requested output format.
        - The questions must be highly relevant to the specified skill and appropriate for the student's field.
        - For MCQs, ensure the options are plausible and there is only one correct answer.
        - For coding or practical questions, keep them concise but challenging enough to test real understanding.
        - The overall difficulty should be at an intermediate level.
        
        ${
          quizType === 'Engineering'
            ? `**Quiz Structure for Engineering/MCA:**
            1.  **MCQs (2):** Test fundamental concepts.
            2.  **Coding Question (1):** A practical problem to solve with code.
            3.  **Error-Finding Question (1):** A buggy code snippet or logic puzzle.
            4.  **Conceptual Question (1):** An interview-style "what is" or "how does it work" question.`
            : quizType === 'MBA'
            ? `**Quiz Structure for MBA:**
            1.  **MCQs (2):** Test core theories or terminology.
            2.  **Case Study Question (1):** A mini-case study requiring analysis.
            3.  **Strategy Question (1):** A scenario requiring a strategic business response.
            4.  **Conceptual Question (1):** An interview-style question about a business concept.`
            : `**Quiz Structure for Non-Tech/Diploma:**
            1.  **MCQs (2):** Test foundational knowledge.
            2.  **Practical/Diagram Question (1):** A question based on a diagram, process flow, or practical setup.
            3.  **Error-Identification Question (1):** A scenario with a flaw to be identified.
            4.  **Conceptual Question (1):** An interview-style question about a core concept.`
        }
        `
    });

    const { output } = await quizGenerationPrompt(input);

    return {
        quizType,
        quizData: output!,
        passingCriteria: "You must answer at least one of the first two MCQs correctly AND at least one of the remaining three questions correctly to pass.",
        hints: [
            `Review the fundamental concepts of ${input.skill}.`,
            `Try some practical exercises or tutorials related to ${input.skill}.`,
            `Focus on the areas covered in the questions you answered incorrectly.`
        ]
    };
  }
);
