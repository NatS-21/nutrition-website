import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionTitle({ children, subtitle, className, centered = true }: SectionTitleProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
