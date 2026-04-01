import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CertificateGalleryProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateGallery({ images, initialIndex = 0, isOpen, onClose }: CertificateGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (isOpen && thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentIndex, isOpen]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  }, [isOpen, onClose, handleNext, handlePrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black/95 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Header */}
      <div className="w-full flex justify-between items-center p-6 z-10">
        <div className="text-white/60 text-sm font-medium bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
          {currentIndex + 1} / {images.length}
        </div>
        <button 
          className="text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
          onClick={onClose}
        >
          <X size={28} />
        </button>
      </div>

      {/* Main Image View */}
      <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden group/main px-4">
        {images.length > 1 && (
          <>
            <button 
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white transition-all p-4 rounded-full hover:bg-white/10"
              onClick={handlePrev}
            >
              <ChevronLeft size={48} />
            </button>
            <button 
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white transition-all p-4 rounded-full hover:bg-white/10"
              onClick={handleNext}
            >
              <ChevronRight size={48} />
            </button>
          </>
        )}

        <div 
          className="relative max-w-full max-h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={images[currentIndex]} 
            alt={`Certificate ${currentIndex + 1}`} 
            className="max-w-full max-h-[70vh] object-contain shadow-2xl rounded-sm select-none"
          />
        </div>
      </div>

      {/* Thumbnail Bar */}
      {images.length > 1 && (
        <div 
          className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 py-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-screen-xl mx-auto px-6 overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex gap-3 justify-start min-w-max pb-2">
              {images.map((image, index) => (
                <button
                  key={image + index}
                  ref={(el) => { thumbnailRefs.current[index] = el; }}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "relative w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-300 shrink-0",
                    currentIndex === index 
                      ? "border-peach scale-110 shadow-lg z-10" 
                      : "border-transparent opacity-40 hover:opacity-80"
                  )}
                >
                  <img 
                    src={image} 
                    alt={`Thumb ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  {currentIndex === index && (
                    <div className="absolute inset-0 bg-peach/10" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
