
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

export function VidyatejLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
    </svg>
  );
}


export function CompanyLogo({ companyName, ...props }: { companyName: string } & SVGProps<SVGSVGElement>) {
  const logoSrc = `/logos/${companyName.toLowerCase().replace(/\s+/g, '-')}.png`;
  const fallbackName = companyName.charAt(0).toUpperCase();

  return (
    <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-full overflow-hidden" {...props}>
        <img 
            src={logoSrc} 
            alt={`${companyName} logo`} 
            className="w-full h-full object-contain"
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                
                const parent = target.parentElement;
                if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex items-center justify-center bg-secondary text-secondary-foreground font-bold text-xl';
                    fallback.textContent = fallbackName;
                    parent.appendChild(fallback);
                }
            }}
        />
    </div>
  );
}
