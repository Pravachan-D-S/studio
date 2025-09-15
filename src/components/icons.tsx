import type { SVGProps } from 'react';

export function VidyaanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#6EE7B7', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
            </linearGradient>
        </defs>
        <path fill="url(#grad1)" d="M80 10L10 40L80 70L150 40L80 10Z" />
        <path fill="#1E40AF" d="M80 75L140 45V105C140 105 110 120 80 105C50 120 20 105 20 105V45L80 75Z" />
        <path fill="#FBBF24" d="M145 42L145 62L150 60V40L145 42Z" />

    </svg>
  );
}

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
    <div className="flex items-center justify-center gap-2" >
        <svg
            {...props}
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: 'rgb(74, 222, 128)', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: 'rgb(59, 130, 246)', stopOpacity: 1}} />
                </linearGradient>
            </defs>
            
            {/* Icon */}
            <g transform="translate(10, 0) scale(0.4)">
                <path fill="url(#logo-grad)" d="M80 10L10 40L80 70L150 40L80 10Z" />
                <path fill="#1E3A8A" d="M80 75C110 90 140 75 140 75V115C140 115 110 130 80 115C50 130 20 115 20 115V75C20 75 50 90 80 75Z" />
                <path fill="#F59E0B" d="M148 41L148 61L152 59V39L148 41Z" />
            </g>

            {/* Text */}
            <text x="80" y="55" fontFamily="Inter, sans-serif" fontSize="30" fill="#1E3A8A" textAnchor="start" fontWeight="bold">
                Vidyaan
            </text>
        </svg>
    </div>
  );
}
