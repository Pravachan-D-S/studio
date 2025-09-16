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

export function VidyaanLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="200"
      height="150"
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="gradCap" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#708090" />
          <stop offset="100%" stopColor="#2F4F4F" />
        </linearGradient>
        <linearGradient id="gradTassel" x1="0" y1="0" x2="1" y2="0">
           <stop offset="0%" stopColor="#E6E6FA" />
           <stop offset="100%" stopColor="#B0C4DE" />
        </linearGradient>
      </defs>
      
      {/* Mortarboard */}
      <path d="M10 50 L100 10 L190 50 L100 90 Z" fill="url(#gradCap)" />

      {/* Cap base */}
      <path d="M30 55 C 30 45, 170 45, 170 55 L 160 75 L 40 75 Z" fill="#2F4F4F" />

      {/* Tassel */}
      <line x1="100" y1="10" x2="100" y2="40" stroke="url(#gradTassel)" strokeWidth="3" />
      <circle cx="100" cy="10" r="4" fill="#E6E6FA" />
      <path d="M95 40 L105 40 L100 55 Z" fill="url(#gradTassel)" />

      {/* Text */}
      <text 
        x="100" 
        y="130" 
        fontFamily="Inter, Arial, sans-serif"
        fontSize="30" 
        fill="#708090"
        textAnchor="middle"
        fontWeight="bold"
      >
        Vidyaan
      </text>
    </svg>
  );
}
