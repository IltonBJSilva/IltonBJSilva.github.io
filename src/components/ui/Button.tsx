import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
  icon?: LucideIcon;
  href?: string;
  onClick?: () => void;
  className?: string;
  /** `true` baixa com o nome original; uma string define o nome do arquivo. */
  download?: boolean | string;
  ariaLabel?: string;
}

const variants = {
  primary:
    'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 dark:shadow-blue-500/20',
  secondary:
    'border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:bg-white/[0.03] dark:text-slate-100 dark:hover:border-white/30 dark:hover:bg-white/[0.06]',
  ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white',
};

const sizes = {
  sm: 'h-9 gap-1.5 px-3 text-sm',
  md: 'h-11 gap-2 px-5 text-sm sm:text-[15px]',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  href,
  onClick,
  className = '',
  download,
  ariaLabel,
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {Icon && <Icon size={size === 'sm' ? 16 : 18} aria-hidden="true" />}
      {children}
    </>
  );

  if (href) {
    const external = href.startsWith('http') && !download;
    return (
      <a
        href={href}
        className={styles}
        aria-label={ariaLabel}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
