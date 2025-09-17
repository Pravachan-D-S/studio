'use client';

import type { AnalyzeSkillGapsOutput } from "@/ai/flows/analyze-skill-gaps";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { VidyatejLogo } from "./icons";

interface MissingSkillsScreenProps {
    data: AnalyzeSkillGapsOutput;
    onProceed: () => void;
}

export default function MissingSkillsScreen({ data, onProceed }: MissingSkillsScreenProps) {
    const { missingSkills } = data;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="px-4 lg:px-6 h-16 flex items-center">
                <VidyatejLogo className="h-8 w-auto" />
            </header>
            <main className="flex-1 flex items-center justify-center p-4">
                <Card className="w-full max-w-2xl text-center animate-fade-in-up shadow-2xl bg-card">
                    <CardHeader>
                        <CardTitle className="text-3xl font-extrabold">Your Skill Gap Analysis</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground">
                            Here are the key areas to focus on to achieve your career goals.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {missingSkills && missingSkills.length > 0 ? (
                            <ul className="space-y-3 text-left">
                                {missingSkills.map((skill, index) => (
                                    <li key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span className="font-medium">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-muted-foreground">
                                No specific missing skills were identified. You seem to have a strong foundation!
                            </p>
                        )}
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                        <p className="text-sm text-muted-foreground">
                           Ready to see how you can build these skills? Let's generate your personalized roadmap.
                        </p>
                        <Button onClick={onProceed} size="lg" className="w-full md:w-auto rounded-full">
                            Generate My Roadmap
                            <ArrowRight className="ml-2" />
                        </Button>
                    </CardFooter>
                </Card>
            </main>
        </div>
    );
}
