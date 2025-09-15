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
    <div className="flex items-center justify-center font-headline">
       <svg
        {...props}
        viewBox="0 0 150 100"
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-auto"
      >
        <defs>
          <linearGradient id="cap-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--chart-2))" />
          </linearGradient>
        </defs>

        {/* Abstract student figure */}
        <circle cx="75" cy="25" r="10" fill="url(#cap-grad)" />
        <path d="M60 40 Q 75 55, 90 40" stroke="hsl(var(--primary))" strokeWidth="4" fill="none" strokeLinecap="round" />

        {/* Open book shape */}
        <path
          d="M20 90 C 40 70, 110 70, 130 90 L 130 85 C 110 65, 40 65, 20 85 Z"
          fill="hsl(var(--primary))"
          fillOpacity="0.8"
        />
         <path
          d="M25 88 C 45 72, 105 72, 125 88"
          fill="none"
          stroke="hsl(var(--background))"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
