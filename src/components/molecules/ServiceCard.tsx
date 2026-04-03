import { type ReactNode } from 'react';
import { Button } from '../atoms/Button';

interface ServiceCardProps {
  title: string;
  description: ReactNode;
  forWhom: string;
  price?: string;
  onMoreInfo?: () => void;
}

export function ServiceCard({ title, description, forWhom, price, onMoreInfo }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 transition-all border border-turquoise-light flex flex-col h-full w-full group">
      <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-turquoise-dark transition-colors">{title}</h3>
      <div className="flex-grow mb-6 text-slate-600 space-y-4">
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">Что входит:</h4>
          <div className="text-sm md:text-base">{description}</div>
        </div>
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">Для кого:</h4>
          <p className="text-sm md:text-base leading-relaxed">{forWhom}</p>
        </div>
      </div>
      {price && <div className="text-xl font-bold text-turquoise-dark mb-6">{price}</div>}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="text-sm h-11" onClick={onMoreInfo}>Подробнее</Button>
        <Button variant="primary" className="text-sm h-11">Записаться</Button>
      </div>
    </div>
  );
}
