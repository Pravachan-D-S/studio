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
      width="150"
      height="100"
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(25, 0)">
        {/* Graduation Cap */}
        <path d="M10 20L25 12.5L40 20L25 27.5L10 20Z" fill="hsl(var(--primary))" />
        {/* Book */}
        <path
          d="M10 22.5 C 10 27.5, 20 32.5, 25 32.5 C 30 32.5, 40 27.5, 40 22.5 L 40 35 C 40 40, 30 45, 25 45 C 20 45, 10 40, 10 35 L 10 22.5 Z"
          fill="hsl(var(--primary))"
          opacity="0.8"
        />
        {/* Tassel */}
        <path d="M40 20 L 45 20 L 45 27.5" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <text
        x="50"
        y="65"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="20"
        fontWeight="800"
        fill="hsl(var(--foreground))"
        textAnchor="middle"
      >
        vidyaan
      </text>
    </svg>
  );
}