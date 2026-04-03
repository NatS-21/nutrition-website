import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold leading-[1.25rem] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-light disabled:opacity-50 disabled:pointer-events-none transform active:scale-95 text-center';
    
    const variants = {
      primary: 'bg-peach hover:bg-beige-300 text-white hover:opacity-90',
      secondary: 'bg-turquoise hover:bg-turquoise-blueish text-slate-800',
      outline: 'border-2 border-turquoise text-turquoise-dark hover:bg-turquoise-light',
      ghost: 'hover:bg-beige-100 text-turquoise-dark',
    };

    const sizes = {
      sm: 'h-10 px-5 text-sm',
      md: 'h-12 px-8 text-base',
      lg: 'h-14 px-10 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], 'leading-[1.25rem]', className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
