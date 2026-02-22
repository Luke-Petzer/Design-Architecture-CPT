import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassPanelProps {
    children: ReactNode;
    className?: string;
}

export const GlassPanel = ({ children, className }: GlassPanelProps) => {
    return (
        <div className={cn('glass-panel px-12 lg:px-24', className)}>
            {children}
        </div>
    );
};
