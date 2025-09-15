'use server';
/**
 * @fileOverview Generates an adaptive quiz to verify a student's skill.
 *
 * - generateQuiz - A function that creates a quiz based on the student's stream and a specific skill.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import type { GenerateQuizInput, GenerateQuizOutput } from '@/lib/types';
import { EngineeringQuizSchema, MbaQuizSchema, NonTechQuizSchema, GenerateQuizInputSchema, GenerateQuizOutputSchema } from '@/lib/types';

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
