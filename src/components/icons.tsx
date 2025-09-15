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
    <div className="flex items-center justify-center" >
        <svg
            {...props}
            viewBox="0 0 200 120"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#4FD1C5', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#F6E05E', stopOpacity: 1}} />
                </linearGradient>
            </defs>
            
            {/* Icon */}
            <g transform="translate(55, 0)">
                {/* Book */}
                <path fill="#2c5282" d="M69.92,44.32c-3.9-2.27-8.75-3.56-13.84-3.56H56c-0.03,0-0.06,0-0.09,0c-5.12,0.01-9.99,1.3-13.9,3.58 C38.1,46.56,34.56,49.53,32,53.07v30.08c0,0,12-6.68,24-0.1c12,6.58,24,0,24,0V53.05 C77.44,49.52,73.89,46.55,69.92,44.32z"/>

                {/* Cap */}
                <g>
                    <path fill="url(#logo-grad)" d="M56,12.11l-36,15v4.67l36,15l36-15v-4.67L56,12.11z"/>
                    <path fill="#F6E05E" d="M89,32.78v4h2v-4.67L89,32.78z"/>
                    <rect x="52" y="32.11" fill="#2c5282" width="8" height="12"/>
                </g>
            </g>

            {/* Text */}
            <text x="100" y="110" fontFamily="Inter, sans-serif" fontSize="24" fill="#2c5282" textAnchor="middle" fontWeight="bold">
                Vidyaan
            </text>
        </svg>
    </div>
  );
}
