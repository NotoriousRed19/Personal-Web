import type { ReactNode } from 'react';

/* ═══════════════════════════════════════════
   Technology SVG Icons — Replacing emoji anti-pattern
   Each icon is a clean, monochrome SVG that inherits currentColor
   ═══════════════════════════════════════════ */

interface IconProps {
  size?: number;
  className?: string;
}

function SvgIcon({ children, size = 32, className = '' }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function ReactIcon({ size, className }: IconProps) {
  return (
    <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function NextJsIcon({ size, className }: IconProps) {
  return (
    <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M8 7.5v9l8.5-9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TypeScriptIcon({ size, className }: IconProps) {
  return (
    <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 24 24" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <text x="12" y="16.5" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="Georama, system-ui" fontWeight="800">TS</text>
    </svg>
  );
}

export function TailwindIcon({ size, className }: IconProps) {
  return (
    <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 24 24" className={className}>
      <path d="M6.5 8.5c1.5-3 4-4 7-3 1.5.5 2.2 1.8 3 3 .8 1.2 1.5 2 3 2.5-1.5 3-4 4-7 3-1.5-.5-2.2-1.8-3-3-.8-1.2-1.5-2-3-2.5z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export function FramerMotionIcon({ size, className }: IconProps) {
  return (
    <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 24 24" className={className}>
      <path d="M5 4h14v5.33H12L5 4z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
      <path d="M5 9.33h7l7 5.34H12l-7-5.34z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
      <path d="M5 14.67l7 5.33v-5.33H5z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export function ReduxIcon({ size, className }: IconProps) {
  return (
    <SvgIcon size={size} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8M12 8v8" />
    </SvgIcon>
  );
}

export function NodeJsIcon({ size, className }: IconProps) {
  return (
    <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 24 24" className={className}>
      <path d="M12 2l9 5.2v10.4L12 22l-9-4.4V7.2L12 2z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
      <text x="12" y="15" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="Satoshi, system-ui" fontWeight="700">N</text>
    </svg>
  );
}

export function ExpressIcon({ size, className }: IconProps) {
  return (
    <SvgIcon size={size} className={className}>
      <path d="M4 12h16" />
      <path d="M4 7l4 5-4 5" />
      <path d="M14 7h6M14 12h4M14 17h6" />
    </SvgIcon>
  );
}

export function PostgreSQLIcon({ size, className }: IconProps) {
  return (
    <SvgIcon size={size} className={className}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </SvgIcon>
  );
}

export function MongoDBIcon({ size, className }: IconProps) {
  return (
    <SvgIcon size={size} className={className}>
      <path d="M12 2C8 6 7 10 7 14c0 3 2 6 5 8 3-2 5-5 5-8 0-4-1-8-5-12z" />
      <line x1="12" y1="14" x2="12" y2="22" />
    </SvgIcon>
  );
}

export function RestApiIcon({ size, className }: IconProps) {
  return (
    <SvgIcon size={size} className={className}>
      <path d="M4 8h4v8H4z" />
      <path d="M10 8h4v8h-4z" />
      <path d="M16 8h4v8h-4z" />
      <line x1="8" y1="12" x2="10" y2="12" />
      <line x1="14" y1="12" x2="16" y2="12" />
    </SvgIcon>
  );
}

export function GraphQLIcon({ size, className }: IconProps) {
  return (
    <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 24 24" className={className}>
      <polygon points="12,2 22,7.5 22,16.5 12,22 2,16.5 2,7.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="12" cy="2" r="1.5" fill="currentColor" />
      <circle cx="22" cy="7.5" r="1.5" fill="currentColor" />
      <circle cx="22" cy="16.5" r="1.5" fill="currentColor" />
      <circle cx="12" cy="22" r="1.5" fill="currentColor" />
      <circle cx="2" cy="16.5" r="1.5" fill="currentColor" />
      <circle cx="2" cy="7.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function DockerIcon({ size, className }: IconProps) {
  return (
    <SvgIcon size={size} className={className}>
      <path d="M4 14c0-2 1-4 4-4h8c1 0 3 0 4 2" />
      <rect x="5" y="10" width="3" height="3" rx="0.5" />
      <rect x="9" y="10" width="3" height="3" rx="0.5" />
      <rect x="13" y="10" width="3" height="3" rx="0.5" />
      <rect x="9" y="6.5" width="3" height="3" rx="0.5" />
      <path d="M2 15c1 3 4 5 8 5s8-2 10-5" />
    </SvgIcon>
  );
}

export function GitIcon({ size, className }: IconProps) {
  return (
    <SvgIcon size={size} className={className}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <line x1="6" y1="8" x2="6" y2="16" />
      <path d="M6 8c0 4 12 4 12-2" />
    </SvgIcon>
  );
}

export function CiCdIcon({ size, className }: IconProps) {
  return (
    <SvgIcon size={size} className={className}>
      <path d="M21 12a9 9 0 0 1-9 9" />
      <path d="M3 12a9 9 0 0 1 9-9" />
      <polyline points="16 3 12 3 12 7" />
      <polyline points="8 21 12 21 12 17" />
    </SvgIcon>
  );
}

export function AwsIcon({ size, className }: IconProps) {
  return (
    <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 24 24" className={className}>
      <path d="M6 14c-2 0-3-1-3-3s2-5 5-5c.5-2 2.5-4 5-4 3 0 5 2 5.5 4.5C20.5 7 22 8.5 22 11c0 2-1.5 3-3 3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 18l4 3 4-3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="14" x2="12" y2="21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function VercelIcon({ size, className }: IconProps) {
  return (
    <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 24 24" className={className}>
      <polygon points="12,3 22,20 2,20" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export function LinuxIcon({ size, className }: IconProps) {
  return (
    <SvgIcon size={size} className={className}>
      <path d="M12 2C9 2 7 5 7 9c0 2-2 4-3 6 0 2 1 4 4 5h8c3-1 4-3 4-5-1-2-3-4-3-6 0-4-2-7-5-7z" />
      <circle cx="10" cy="8" r="1" fill="currentColor" />
      <circle cx="14" cy="8" r="1" fill="currentColor" />
      <path d="M10 12c1 1 3 1 4 0" />
    </SvgIcon>
  );
}

// Map of tech name to icon component for dynamic rendering
export const techIconMap: Record<string, (props: IconProps) => ReactNode> = {
  'React': ReactIcon,
  'Next.js': NextJsIcon,
  'TypeScript': TypeScriptIcon,
  'Tailwind CSS': TailwindIcon,
  'Framer Motion': FramerMotionIcon,
  'Redux': ReduxIcon,
  'Node.js': NodeJsIcon,
  'Express': ExpressIcon,
  'PostgreSQL': PostgreSQLIcon,
  'MongoDB': MongoDBIcon,
  'REST API': RestApiIcon,
  'GraphQL': GraphQLIcon,
  'Docker': DockerIcon,
  'Git': GitIcon,
  'CI/CD': CiCdIcon,
  'AWS': AwsIcon,
  'Vercel': VercelIcon,
  'Linux': LinuxIcon,
};
