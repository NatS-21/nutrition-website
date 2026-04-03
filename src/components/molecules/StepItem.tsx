import type { LucideIcon } from 'lucide-react';

interface StepItemProps {
  number: number;
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export function StepItem({ number, title, description, icon: Icon }: StepItemProps) {
  return (
    <div className="flex items-start gap-6 sm:gap-8 group p-4 -ml-4 rounded-3xl hover:bg-white/50 transition-all duration-300">
      <div className="relative flex-shrink-0">
        {/* Step Circle with Icon */}
        <div className="w-14 h-14 rounded-full bg-white border-2 border-turquoise-light text-turquoise-dark flex items-center justify-center text-xl font-bold group-hover:border-peach group-hover:bg-peach group-hover:text-white group-hover:shadow-lg group-hover:shadow-peach/30 transition-all duration-500 z-10 relative">
          {Icon ? <Icon size={24} /> : number}
        </div>
        
        {/* Step Number Badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-turquoise-dark text-white text-[10px] flex items-center justify-center font-bold border-2 border-white group-hover:bg-slate-800 transition-colors duration-300 z-20">
          {number}
        </div>
      </div>

      <div className="pt-2">
        <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-turquoise-dark transition-colors duration-300">{title}</h3>
        {description && <p className="text-slate-600 leading-relaxed font-medium">{description}</p>}
      </div>
    </div>
  );
}
