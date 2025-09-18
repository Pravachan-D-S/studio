
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { jobsData, type Company } from '@/lib/jobs-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CompanyLogo, VidyatejLogo } from '@/components/icons';
import { ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';

const parseSalary = (range: string): [number, number] => {
    if (range.includes('+')) {
        const min = parseInt(range.replace('+', '').replace(' LPA', ''));
        return [min, Infinity];
    }
    if (range.includes('<')) {
        const max = parseInt(range.replace('<', '').replace(' LPA', ''));
        return [0, max];
    }
    const [min, max] = range.replace(' LPA', '').split('-').map(Number);
    return [min, max];
}


function JobResults() {
    const searchParams = useSearchParams();
    const stream = searchParams.get('stream');
    const specialization = searchParams.get('specialization');
    const aimingCareer = searchParams.get('aimingCareer');
    const salaryRange = searchParams.get('salaryRange');

    if (!stream || !specialization || !aimingCareer || !salaryRange) {
        return (
            <Alert variant="destructive">
                <AlertTitle>Missing Information</AlertTitle>
                <AlertDescription>
                    Could not find job recommendations because some information is missing. Please go back and generate a roadmap first.
                </AlertDescription>
            </Alert>
        )
    }

    const targetSalary = parseSalary(salaryRange);
    
    const relevantRoles = jobsData[stream]?.[specialization] ?? [];
    const filteredRole = relevantRoles.find(role => role.role === aimingCareer);

    if (!filteredRole) {
        return (
             <Alert>
                <Search className="h-4 w-4" />
                <AlertTitle>No Exact Matches Found</AlertTitle>
                <AlertDescription>
                   We couldn't find specific job listings for "{aimingCareer}" in our current dataset. Try exploring related roles!
                </AlertDescription>
            </Alert>
        )
    }

    const recommendedCompanies = filteredRole.companies.filter(company => {
        const companySalary = parseSalary(company.package);
        // Check for overlap between user's target salary range and company's offered range
        return Math.max(targetSalary[0], companySalary[0]) <= Math.min(targetSalary[1], companySalary[1]);
    });

    if (recommendedCompanies.length === 0) {
        return (
            <Alert>
                <Search className="h-4 w-4" />
                <AlertTitle>No Companies Match Your Salary Criteria</AlertTitle>
                <AlertDescription>
                    No companies for the role of "{aimingCareer}" matched your target salary of {salaryRange}. Consider adjusting your salary expectations or exploring other roles.
                </AlertDescription>
            </Alert>
        )
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recommendedCompanies.map(company => (
                <JobCard key={company.company} company={company} role={aimingCareer} />
            ))}
        </div>
    );
}

function JobCard({ company, role }: { company: Company, role: string }) {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <CompanyLogo companyName={company.company} />
                    <div>
                        <CardTitle>{company.company}</CardTitle>
                        <CardDescription>Offers the role of a {role}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                 <div className="text-sm font-semibold text-foreground">
                    Package Offered: <span className="font-bold text-primary">{company.package}</span>
                </div>
            </CardContent>
            <CardFooter>
                 <Button asChild className="w-full">
                    <a href={company.website} target="_blank" rel="noopener noreferrer">Apply Now</a>
                </Button>
            </CardFooter>
        </Card>
    );
}


export default function JobsPage() {
    return (
        <div className="min-h-screen bg-background">
             <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <VidyatejLogo className="h-6 w-6" />
                        <span className="font-bold">Vidyatej Job Matcher</span>
                    </Link>
                    <div className="flex flex-1 items-center justify-end space-x-4">
                        <Button variant="outline" asChild>
                           <Link href="/">
                                <ArrowLeft className="mr-2" />
                                Back to Generator
                           </Link>
                        </Button>
                    </div>
                </div>
            </header>
            <main className="container py-8">
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold">Recommended Job Opportunities</h1>
                        <p className="text-muted-foreground">
                            Based on your profile, here are some companies that could be a great fit for you.
                        </p>
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <JobResults />
                    </Suspense>
                </div>
            </main>
        </div>
    );
}
