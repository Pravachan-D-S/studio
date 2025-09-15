import type { SVGProps } from 'react';

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// Deprecated: VidyaanIcon is no longer used and is replaced by the new VidyaanLogo.
export function VidyaanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--chart-2))" />
          </linearGradient>
        </defs>
        {/* Book shape */}
        <path
          d="M4 24V6C4 5.44772 4.44772 5 5 5H27C27.5523 5 28 5.44772 28 6V24C28 24.5523 27.5523 25 27 25H5C4.44772 25 4 24.5523 4 24Z"
          fill="hsl(var(--primary))"
          fillOpacity="0.1"
        />
        <path
          d="M4 24V6C4 5.44772 4.44772 5 5 5H16V25H5C4.44772 25 4 24.5523 4 24Z"
          fill="hsl(var(--primary))"
          fillOpacity="0.2"
        />
        <path
          d="M16 5V25H27C27.5523 25 28 24.5523 28 24V6C28 5.44772 27.5523 5 27 5H16Z"
          fill="hsl(var(--primary))"
          fillOpacity="0.3"
        />
        {/* Graduation cap */}
        <path
          d="M2 14L16 21L30 14L16 7L2 14Z"
          fill="url(#logo-grad)"
        />
        <path d="M13 20V26H19V20" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
  );
}


export function VidyaanLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-3 font-headline">
      <svg
        {...props}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 27.5C3.33333 27.5 2.5 21.6667 2.5 20C2.5 18.3333 3.33333 12.5 10 12.5"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M30 27.5C36.6667 27.5 37.5 21.6667 37.5 20C37.5 18.3333 36.6667 12.5 30 12.5"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 12.5C10 10.5 13.5 7.5 20 7.5C26.5 7.5 30 10.5 30 12.5"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 27.5C10 29.5 13.5 32.5 20 32.5C26.5 32.5 30 29.5 30 27.5"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
          fill="hsl(var(--primary))"
          fillOpacity="0.8"
        />
        <path
          d="M20 32.5V20"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-2xl font-bold tracking-tight text-foreground">Vidyaan</span>
    </div>
  );
}
