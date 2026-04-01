import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div id={id} className={cn('max-w-6xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
