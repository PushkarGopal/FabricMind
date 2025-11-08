import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 50"
      width="144"
      height="30"
      {...props}
    >
      <defs>
        <linearGradient id="fabricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Stylized fabric icon */}
      <path 
        d="M 10 10 C 15 15, 25 15, 30 10 S 40 5, 45 10 M 10 20 C 15 25, 25 25, 30 20 S 40 15, 45 20 M 10 30 C 15 35, 25 35, 30 30 S 40 25, 45 30 M 10 40 C 15 45, 25 45, 30 40 S 40 35, 45 40" 
        stroke="url(#fabricGradient)" 
        strokeWidth="2.5" 
        fill="none" 
        strokeLinecap="round"
      />

      <text
        x="60"
        y="33"
        fontFamily="Playfair Display, serif"
        fontSize="36"
        fontWeight="700"
        fill="hsl(var(--primary))"
      >
        FabricMind
      </text>
    </svg>
  );
}
