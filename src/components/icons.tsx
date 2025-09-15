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
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 0L0 12V36L24 48L48 36V12L24 0Z"
        fill="url(#grad1)"
      />
      <path
        d="M24 4L4 14V34L24 44L44 34V14L24 4Z"
        fill="url(#grad2)"
      />
      <path
        d="M12 18V30L24 36L36 30V18L24 12L12 18Z"
        fill="#FFFFFF"
        opacity="0.2"
      />
      <path
        d="M24 21L16 25V29L24 33L32 29V25L24 21Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function VidyaanLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2 font-headline">
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
      <span className="text-xl font-bold text-foreground">Vidyaan</span>
    </div>
  );
}
