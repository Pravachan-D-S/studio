'use client';

import { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, where } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Loader2, PlusCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import type { Roadmap } from '@/lib/types';
import { format } from 'date-fns';

function RoadmapCard({ roadmap }: { roadmap: Roadmap }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
            <FileText className="h-8 w-8 text-primary" />
            <span className="text-xs text-muted-foreground">
                {roadmap.createdAt ? format(roadmap.createdAt.toDate(), 'PPP') : 'N/A'}
            </span>
        </div>
        <CardTitle>{roadmap.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          For a career as a <span className="font-semibold text-foreground">{roadmap.studentData.aimingCareer}</span>
        </CardDescription>
        {/* You can add more details here if needed */}
      </CardContent>
    </Card>
  );
}


export default function DashboardPage() {
  const [user] = useAuthState(auth);
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);

  const roadmapsQuery = user ? query(collection(db, 'roadmaps'), where('userId', '==', user.uid)) : null;
  const [value, loading, error] = useCollection(roadmapsQuery);

  useEffect(() => {
    if (value) {
      const data = value.docs.map(doc => ({ id: doc.id, ...doc.data() } as Roadmap));
      setRoadmaps(data);
    }
  }, [value]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }
  
  if (error) {
    return <p className="text-destructive">Error: {error.message}</p>;
  }

  if (roadmaps.length === 0) {
    return (
       <div className="text-center">
            <h2 className="text-2xl font-semibold">No Roadmaps Yet</h2>
            <p className="mt-2 text-muted-foreground">
              You haven't saved any career roadmaps.
            </p>
            <Button asChild className="mt-4">
              <Link href="/">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Your First Roadmap
              </Link>
            </Button>
          </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your Saved Roadmaps</h1>
        <Button asChild>
          <Link href="/">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Roadmap
          </Link>
        </Button>
      </div>
       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map(roadmap => (
          <Link href={`/roadmap/${roadmap.id}`} key={roadmap.id} className="block hover:scale-105 transition-transform duration-200">
             <RoadmapCard roadmap={roadmap} />
          </Link>
        ))}
       </div>
    </div>
  );
}
