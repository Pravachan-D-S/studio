'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { saveRoadmapAction } from '@/app/actions';
import type { GeneratePersonalizedRoadmapOutput } from '@/ai/flows/generate-personalized-roadmap';
import type { FormValues } from '@/lib/types';
import { useRouter } from 'next/navigation';

interface SaveRoadmapDialogProps {
  isOpen: boolean;
  onClose: () => void;
  roadmapData: GeneratePersonalizedRoadmapOutput;
  studentData: FormValues;
  userId: string;
}

export function SaveRoadmapDialog({
  isOpen,
  onClose,
  roadmapData,
  studentData,
  userId,
}: SaveRoadmapDialogProps) {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSave = async () => {
    if (!name.trim()) {
      toast({
        variant: 'destructive',
        title: 'Validation Error',
        description: 'Please enter a name for your roadmap.',
      });
      return;
    }

    setIsLoading(true);
    const result = await saveRoadmapAction(
      roadmapData,
      studentData,
      userId,
      name
    );
    setIsLoading(false);

    if (result.success) {
      toast({
        title: 'Roadmap Saved!',
        description: `Your roadmap "${name}" has been successfully saved.`,
      });
      onClose();
      router.push('/dashboard');
    } else {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: result.error || 'Failed to save roadmap. Please try again.',
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Your Roadmap</DialogTitle>
          <DialogDescription>
            Give your personalized roadmap a name so you can revisit it later.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 py-4">
          <label htmlFor="roadmap-name" className="text-sm font-medium">
            Roadmap Name
          </label>
          <Input
            id="roadmap-name"
            placeholder="e.g., My AI Engineer Path"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Roadmap
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
