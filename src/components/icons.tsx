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
                <stop offset="0%" style={{ stopColor: '#3b82f6' }} />
                <stop offset="100%" style={{ stopColor: '#1e40af' }} />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="48" stroke="url(#grad1)" strokeWidth="4" />
        <g transform="translate(0, 5)">
            {/* Book */}
            <path 
                d="M50 80C65 70 80 75 90 85 V 60 C 85 55 70 50 50 60 C 30 50 15 55 10 60 V 85 C 20 75 35 70 50 80Z" 
                fill="#fff"
                stroke="#1e40af"
                strokeWidth="2"
            />
            <path d="M50 60 V 80" stroke="#1e40af" strokeWidth="2" />
            
            {/* Graduation Cap */}
            <path d="M50 20 L20 40 L50 60 L80 40 Z" fill="#1e40af" />
            
            {/* Tassel */}
            <path d="M75 40 L75 55" stroke="#FBBF24" strokeWidth="2.5" />
            <circle cx="75" cy="55" r="3" fill="#FBBF24" />
        </g>
    </svg>
  );
}


export function VidyaanLogo(props: SVGProps<SVGSVGElement>) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Inter, sans-serif' }}>
            <VidyaanIcon style={{ height: '1.75em', width: '1.75em' }} />
            <span style={{ marginLeft: '0.5em', fontSize: '1.5em', fontWeight: 'bold', color: '#1e3a8a' }}>
                Vidyaan
            </span>
        </div>
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
