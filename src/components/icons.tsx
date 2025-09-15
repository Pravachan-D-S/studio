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

// Deprecated: VidyaanIcon is replaced by VidyaanLogo's new SVG
export function VidyaanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 112 112"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#6EE7B7', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path fill="url(#grad1)" d="M56 0L0 25L56 50L112 25L56 0Z" />
      <path fill="#1E40AF" d="M56 53.125L100 28.125V78.125C100 78.125 78.125 90.625 56 78.125C33.875 90.625 12.5 78.125 12.5 78.125V28.125L56 53.125Z" />
      <path fill="#FBBF24" d="M103.125 26.25V41.25L106.25 39.375V25L103.125 26.25Z" />
    </svg>
  )
}

export function VidyaanLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center" >
      <svg
          {...props}
          viewBox="0 0 112 100"
          xmlns="http://www.w3.org/2000/svg"
      >
          <defs>
              <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#4FD1C5', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#F6E05E', stopOpacity: 1}} />
              </linearGradient>
          </defs>
          
          {/* Icon */}
          <g>
              {/* Book */}
              <path fill="#2c5282" d="M93.92,35.32c-3.9-2.27-8.75-3.56-13.84-3.56H80c-0.03,0-0.06,0-0.09,0c-5.12,0.01-9.99,1.3-13.9,3.58 C62.1,37.56,58.56,40.53,56,44.07v30.08c0,0,12-6.68,24-0.1c12,6.58,24,0,24,0V44.05 C101.44,40.52,97.89,37.55,93.92,35.32z"/>

              {/* Cap */}
              <g>
                  <path fill="url(#logo-grad)" d="M80,3.11l-36,15v4.67l36,15l36-15v-4.67L80,3.11z"/>
                  <path fill="#F6E05E" d="M113,23.78v4h2v-4.67L113,23.78z"/>
                  <rect x="76" y="23.11" fill="#2c5282" width="8" height="12"/>
              </g>
          </g>

          {/* Text */}
          <text x="56" y="95" fontFamily="Inter, sans-serif" fontSize="24" fill="#2c5282" textAnchor="middle" fontWeight="bold">
              Vidyaan
          </text>
      </svg>
    </div>
  );
}
