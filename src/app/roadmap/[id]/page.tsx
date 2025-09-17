
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import RoadmapDisplay from '@/components/roadmap-display';
import type { Roadmap } from '@/lib/types';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { VidyatejLogo } from '@/components/icons';


async function getRoadmapData(id: string): Promise<Roadmap | null> {
  try {
    const docRef = doc(db, 'roadmaps', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Roadmap;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching roadmap:", error);
    return null;
  }
}

export default async function SavedRoadmapPage({ params }: { params: { id: string } }) {
  const roadmapData = await getRoadmapData(params.id);

  if (!roadmapData) {
    notFound();
  }
  
  const handleReset = () => {
    // This is a dummy function to satisfy the component's prop requirement.
    // On the saved roadmap page, we'll likely navigate back to the dashboard.
    // The button for this is handled within the component.
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
        <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex items-center gap-2">
              <VidyatejLogo className="h-8 w-auto" />
              <span className="font-bold text-lg">Vidyatej</span>
            </div>
            <div className="ml-auto">
                <Button asChild variant="outline">
                    <Link href="/dashboard">Back to Dashboard</Link>
                </Button>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6 md:p-8">
            <RoadmapDisplay 
              data={roadmapData.roadmapData} 
              onReset={handleReset} 
              studentData={roadmapData.studentData}
            />
          </main>
    </div>
  );
}
