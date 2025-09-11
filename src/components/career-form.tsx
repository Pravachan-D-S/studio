'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  aimingCareers,
  branches,
  learningStyles,
  locationPreferences,
  skillLevels,
  streams,
  yearsOfStudy,
} from '@/lib/constants';
import { formSchema, type FormValues } from '@/lib/types';

interface CareerFormProps {
  onSubmit: (data: FormValues) => Promise<void>;
}

const formImage = PlaceHolderImages.find(p => p.id === 'form-hero');

export default function CareerForm({ onSubmit }: CareerFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stream: '',
      branch: '',
      aimingCareer: '',
      yearOfStudy: '',
      timeAvailability: '',
      skillSelfAssessment: 'Beginner in Coding, Math, and Communication',
      locationPreference: '',
      learningStyle: '',
    },
  });

  const handleFormSubmit = async (data: FormValues) => {
    setIsLoading(true);
    await onSubmit(data);
    // No need to setIsLoading(false) here as the parent component will unmount this one
  };

  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-8 order-2 md:order-1">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-bold tracking-tight">Chart Your Course</CardTitle>
            <CardDescription>
              Tell us a bit about yourself to generate your personalized career roadmap.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="stream"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stream</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your stream" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {streams.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="branch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Branch</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your branch" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {branches.map((b) => (
                            <SelectItem key={b} value={b}>{b}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="aimingCareer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Career Goal</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your target career" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {aimingCareers.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="yearOfStudy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year of Study</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {yearsOfStudy.map((y) => (
                            <SelectItem key={y} value={y}>{y}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timeAvailability"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weekly Hours</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="learningStyle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Learning Style</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your style" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {learningStyles.map((style) => (
                            <SelectItem key={style} value={style}>{style}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="locationPreference"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location Preference</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locationPreferences.map((loc) => (
                            <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="skillSelfAssessment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skill Assessment</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Beginner in Coding" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading} size="lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate My Roadmap'
                )}
              </Button>
            </form>
          </Form>
        </div>
        <div className="relative hidden md:block order-1 md:order-2">
            {formImage && (
                <Image
                    src={formImage.imageUrl}
                    alt={formImage.description}
                    width={800}
                    height={1200}
                    className="h-full w-full object-cover"
                    data-ai-hint={formImage.imageHint}
                    priority
                />
            )}
           <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent md:bg-gradient-to-r" />
        </div>
      </div>
    </Card>
  );
}
