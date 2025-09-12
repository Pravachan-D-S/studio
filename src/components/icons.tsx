import type { SVGProps } from 'react';

export function VidyaanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#80b6a2', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1d70a2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Book */}
      <path
        d="M10 85 C 10 75, 40 70, 50 70 C 60 70, 90 75, 90 85 L 90 90 L 10 90 Z"
        fill="#1e527f"
      />
      <path
        d="M50 25 C 20 25, 10 40, 10 70 L 10 85 C 10 75, 40 70, 50 70 V 25 Z"
        fill="#2b75ae"
      />
      <path
        d="M50 25 C 80 25, 90 40, 90 70 L 90 85 C 90 75, 60 70, 50 70 V 25 Z"
        fill="#2b75ae"
      />
      {/* Cap */}
      <polygon points="50,5 5,25 50,45 95,25" fill="url(#grad1)" />
      <path d="M75 29 L 75 40 L 80 40 L 80 29 Z" fill="#f0c242" />
    </svg>
  );
}


export function VidyaanLogo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 160 50"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#80b6a2"/>
                    <stop offset="100%" stopColor="#1d70a2"/>
                </linearGradient>
            </defs>
            
            {/* Icon */}
            <g transform="translate(0, -5) scale(0.4)">
                <path d="M50 25 C 20 25, 10 40, 10 70 L 10 85 C 10 75, 40 70, 50 70 V 25 Z" fill="#2b75ae" />
                <path d="M50 25 C 80 25, 90 40, 90 70 L 90 85 C 90 75, 60 70, 50 70 V 25 Z" fill="#2b75ae" />
                <polygon points="50,5 5,25 50,45 95,25" fill="url(#logoGrad)" />
                <path d="M75 29 L 75 40 L 80 40 L 80 29 Z" fill="#f0c242" />
            </g>

            {/* Text */}
            <text x="50" y="32" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="bold" fill="#2b75ae">
                Vidyaan
            </text>
        </svg>
    );
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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
