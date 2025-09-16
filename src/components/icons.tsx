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
      width="550"
      height="470"
      viewBox="0 0 550 470"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          id="capGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
          gradientTransform="rotate(45)"
        >
          <stop offset="0%" stopColor="#0082C8" />
          <stop offset="100%" stopColor="#FFEE82" />
        </linearGradient>
        <linearGradient id="bookGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#005B96" />
          <stop offset="100%" stopColor="#003F5C" />
        </linearGradient>
      </defs>

      {/* Graduation Cap */}
      <polygon
        points="275,20 450,110 275,200 100,110"
        fill="url(#capGradient)"
      />

      {/* Tassel */}
      <path
        d="M 450 110 L 460 180"
        stroke="#FFEE82"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="460" cy="185" r="8" fill="#FFEE82" />

      {/* Open Book */}
      <path
        d="M150,220 C200,260 275,280 275,350 C175,320 120,270 150,220 Z"
        fill="url(#bookGradient)"
      />
      <path
        d="M400,220 C350,260 275,280 275,350 C375,320 430,270 400,220 Z"
        fill="url(#bookGradient)"
      />

      {/* Text */}
      <text
        x="50%"
        y="430"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="80"
        fill="#005B96"
        textAnchor="middle"
        fontWeight="900"
      >
        Vidyaan
      </text>
    </svg>
  );
}
