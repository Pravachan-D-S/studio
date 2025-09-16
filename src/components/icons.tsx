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
      height="180"
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="capGrad" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="bookGrad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      
      {/* Graduation Cap */}
      <polygon points="100,10 20,50 100,90 180,50" fill="url(#capGrad)" />

      {/* Cap Base */}
      <rect x="75" y="85" width="50" height="15" fill="#1e3a8a" rx="5"/>
      
      {/* Tassel */}
      <line x1="100" y1="10" x2="100" y2="45" stroke="#f59e0b" strokeWidth="2.5" />
      <circle cx="100" cy="10" r="4" fill="#f59e0b" />
      <path d="M96 45 L 104 45 L 100 60 Z" fill="#f59e0b" />
      
      {/* Open Book */}
      <path 
        d="M30,100 C30,140 90,150 100,120 C110,150 170,140 170,100 L100,110 L30,100 Z" 
        fill="url(#bookGrad)"
      />
       <path 
        d="M35,102 C60,115 80,115 100,112 M165,102 C140,115 120,115 100,112"
        stroke="white"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.5"
      />

      {/* Text */}
      <text 
        x="100" 
        y="165" 
        fontFamily="Inter, Arial, sans-serif"
        fontSize="32" 
        fill="#1e3a8a"
        textAnchor="middle"
        fontWeight="bold"
      >
        Vidyaan
      </text>
    </svg>
  );
}
