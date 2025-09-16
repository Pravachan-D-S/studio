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

export function VidyaanIcon(props: SVGProps<SVGSVGElement>) {
  // This is deprecated but kept to avoid breaking any potential lingering imports.
  // The primary logo is VidyaanLogo.
  return <VidyaanLogo {...props} />;
}

export function VidyaanLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="549"
      height="473"
      viewBox="0 0 549 473"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="capGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0082C8" />
          <stop offset="100%" stopColor="#FFE082" />
        </linearGradient>
        <linearGradient id="bookGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#005B96" />
          <stop offset="100%" stopColor="#003F5C" />
        </linearGradient>
      </defs>
      <polygon
        points="275,70 370,110 275,150 180,110"
        fill="url(#capGradient)"
      />
      <rect x="235" y="140" width="80" height="40" rx="20" fill="#005B96" />
      <rect x="355" y="110" width="20" height="50" rx="10" fill="#FFE082" />
      <circle cx="365" cy="160" r="8" fill="#FFE082" />
      <path
        d="M185 170 Q275 210 275 300 Q185 260 185 170 Z"
        fill="url(#bookGradient)"
      />
      <path
        d="M365 170 Q275 210 275 300 Q365 260 365 170 Z"
        fill="url(#bookGradient)"
      />
      <text
        x="75"
        y="410"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="110"
        fill="#005B96"
        fontWeight="bold"
      >
        Vidyaan
      </text>
    </svg>
  );
}
