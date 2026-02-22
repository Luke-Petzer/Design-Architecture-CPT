import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const Heading = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
  const styles = {
    h1: 'text-[var(--font-size-h1)] leading-tight font-light italic',
    h2: 'text-[var(--font-size-h2)] leading-tight font-light',
    h3: 'text-3xl font-serif italic font-light leading-relaxed', // 8pt aligned
  };

  return (
    <Component className={cn(styles[Component as keyof typeof styles] || '', className)}>
      {children}
    </Component>
  );
};

export const Text = ({ children, className, as: Component = 'p' }: TypographyProps) => {
  return (
    <Component className={cn('text-[var(--font-size-body)] tracking-widest font-light uppercase text-slate-300 leading-relaxed', className)}>
      {children}
    </Component>
  );
};
