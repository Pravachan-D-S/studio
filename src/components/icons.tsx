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
            <path d="M10 20L20 15L30 20L20 25L10 20Z" fill="hsl(var(--primary))" />
            <path d="M20 25L30 20L40 25L30 30L20 25Z" fill="hsl(var(--primary))" opacity="0.7" />
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
