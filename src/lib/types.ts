import { z } from 'zod';

export const formSchema = z.object({
  stream: z.string().min(1, 'Stream is required.'),
  branch: z.string().min(1, 'Branch is required.'),
  aimingCareer: z.string().min(1, 'Career goal is required.'),
  yearOfStudy: z.string().min(1, 'Year of study is required.'),
  timeAvailability: z.string().min(1, 'Time availability is required.'),
  skillSelfAssessment: z.string().min(1, 'Please assess your skills.'),
  locationPreference: z.string().min(1, 'Location preference is required.'),
  learningStyle: z.string().min(1, 'Learning style is required.'),
});

export type FormValues = z.infer<typeof formSchema>;
