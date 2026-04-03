import { type ReactNode, useEffect } from 'react';
import { Button } from '../atoms/Button';
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: ReactNode;
  forWhom: string;
  price?: string;
  expandedInfo?: ReactNode;
  hideDescriptionInPopup?: boolean;
}

export function ServiceModal({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  forWhom, 
  price, 
  expandedInfo,
  hideDescriptionInPopup = false
}: ServiceModalProps) {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] flex flex-col rounded-[2.5rem] border border-turquoise-light animate-in fade-in zoom-in duration-300">
        {/* Fixed Header with Close Button */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110]">
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/80 backdrop-blur-md border border-turquoise-light/50 hover:bg-turquoise-light text-slate-400 hover:text-slate-600 transition-all shadow-sm"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto p-8 md:p-12 pt-10">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 leading-tight pr-12">{title}</h3>
            
            <div className="space-y-8">
              {!hideDescriptionInPopup && (
                <section>
                  <h4 className="text-lg font-bold text-turquoise-dark mb-3 uppercase tracking-wider text-sm">Что входит во время работы:</h4>
                  <div className="text-slate-600 text-lg">{description}</div>
                </section>
              )}

              {expandedInfo && (
                <section>
                  <h4 className="text-lg font-bold text-turquoise-dark mb-3 uppercase tracking-wider text-sm">Подробная информация:</h4>
                  <div className="text-slate-600 text-lg prose prose-slate max-w-none">
                    {expandedInfo}
                  </div>
                </section>
              )}

              <section>
                <h4 className="text-lg font-bold text-turquoise-dark mb-3 uppercase tracking-wider text-sm">Для кого подходит:</h4>
                <p className="text-slate-600 text-lg leading-relaxed">{forWhom}</p>
              </section>
            </div>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="p-6 md:px-12 md:pb-8 border-t border-turquoise-light/30 bg-slate-50/20 rounded-b-[2.5rem]">
          <div className="flex flex-row items-center justify-between gap-4">
            {price && (
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Стоимость:</span>
                <div className="text-2xl md:text-3xl font-black text-turquoise-dark leading-none mt-1">{price}</div>
              </div>
            )}
            <div className="flex gap-4">
               <Button variant="primary" className="px-6 md:px-10 h-12 md:h-14">Записаться</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
