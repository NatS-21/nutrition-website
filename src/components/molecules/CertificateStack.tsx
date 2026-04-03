import { cn } from '../../utils/cn';

interface CertificateStackProps {
  images: string[];
  onClick?: () => void;
  className?: string;
}

export function CertificateStack({ images, onClick, className }: CertificateStackProps) {
  // Use first 3 images for the stack representation
  const displayImages = images.slice(0, 3);

  return (
    <div 
      className={cn(
        "relative h-48 w-64 cursor-pointer pt-6 pl-4 group",
        className
      )}
      onClick={onClick}
    >
      {displayImages.map((image, index) => {
        // More dramatic fan-out on hover
        const rotationMap = {
          0: 'group-hover:-rotate-6',
          1: 'group-hover:rotate-0',
          2: 'group-hover:rotate-6',
        };
        const translateMap = {
          0: 'group-hover:-translate-x-12',
          1: 'group-hover:translate-x-0',
          2: 'group-hover:translate-x-12',
        };
        const zIndexMap = {
          0: 'z-10',
          1: 'z-20',
          2: 'z-30',
        };

        return (
          <div 
            key={image}
            className={cn(
              "absolute inset-0 w-full h-full rounded-lg bg-white shadow-lg overflow-hidden border border-slate-200 transition-all duration-500 ease-out",
              zIndexMap[index as keyof typeof zIndexMap],
              rotationMap[index as keyof typeof rotationMap],
              translateMap[index as keyof typeof translateMap]
            )}
            style={{
              transform: `rotate(${(index - 1) * 3}deg) translateY(${index * 4}px)`,
            }}
          >
            <img 
              src={image} 
              alt={`Certificate ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
          </div>
        );
      })}
      
      {/* Badge for more certificates if any */}
      {images.length > 3 && (
        <div className="absolute bottom-2 right-2 z-40 bg-turquoise-dark text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
          +{images.length - 3}
        </div>
      )}
    </div>
  );
}
