import type { SVGProps } from 'react';

export function VidyaanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4FD1C5' }} />
          <stop offset="100%" style={{ stopColor: '#F0C242' }} />
        </linearGradient>
      </defs>
      {/* Book */}
      <path
        d="M85,85 A40,40 0 0,0 15,85 L15,90 L85,90 Z M15,85 A40,40 0 0,1 85,85"
        fill="#1a3a6e"
      />
      <path
        d="M50 25 L10 45 L50 65 L90 45 Z"
        fill="url(#grad1)"
      />
      {/* Tassel */}
      <path d="M80 48 L80 60 L85 60 L85 48 Z" fill="#F0C242" />
    </svg>
  );
}


export function VidyaanLogo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 180 60"
            xmlns="http://www.w3.org/2000/svg"
        >
             <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4FD1C5" />
                  <stop offset="100%" stopColor="#F0C242" />
                </linearGradient>
            </defs>
            
            {/* Icon */}
            <g transform="translate(65, -5) scale(0.5)">
                {/* Book */}
                <path
                    d="M85,85 A40,40 0 0,0 15,85 L15,90 L85,90 Z M15,85 A40,40 0 0,1 85,85"
                    fill="#1a3a6e"
                />
                {/* Cap */}
                <path
                    d="M50 25 L10 45 L50 65 L90 45 Z"
                    fill="url(#logoGrad)"
                />
                {/* Tassel */}
                <path d="M80 48 L80 60 L85 60 L85 48 Z" fill="#F0C242" />
            </g>

            {/* Text */}
            <text x="50%" y="52" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#1a3a6e">
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
