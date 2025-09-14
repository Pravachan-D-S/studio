import { z } from 'zod';
import { streams, salaryRanges } from './constants';

export const formSchema = z.object({
  stream: z.string({ required_error: 'Stream is required.' }).refine(val => streams.includes(val), { message: 'Please select a valid stream.'}),
  specialization: z.string().min(1, 'Specialization is required.'),
  yearOfStudy: z.string().min(1, 'Year of study is required.'),
  salaryRange: z.string({ required_error: 'Salary range is required.' }).refine(val => salaryRanges.includes(val), { message: 'Please select a valid salary range.'}),
  aimingCareer: z.string().min(1, 'Career goal is required.'),
});

export type FormValues = z.infer<typeof formSchema>;
