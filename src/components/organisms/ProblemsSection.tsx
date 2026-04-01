import { useState, useEffect } from 'react';
import { Container } from '../atoms/Container';
import { SectionTitle } from '../atoms/SectionTitle';
import { AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../atoms/Button';

export function ProblemsSection() {
  const problems = [
    'Постоянные диеты без результата',
    'Усталость, вздутие, проблемы с пищеварением',
    'Переедание и чувство вины',
    'Хотите идти к цели, а тело не может',
    'Путаница в информации о питании',
    'Нет ясного системного подхода',
    'Когнитивная перегрузка, туман в голове',
    'Гормональные колебания',
    'Выпадают волосы, акне, зуд и высыпания на коже',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % problems.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + problems.length) % problems.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % problems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [problems.length]);

  return (
    <section id="problems" className="pt-8 pb-16 md:pt-12 md:pb-20 bg-[#FaFaFa] overflow-hidden">
      <Container>
        <SectionTitle 
          subtitle="Я понимаю вашу ситуацию и уже работала с такими запросами."
          className="mb-2 md:mb-4"
        >
          Если вы узнаёте себя — я могу помочь
        </SectionTitle>
        
        <div className="relative mt-0 max-w-xl mx-auto h-[380px] md:h-[480px] flex items-center justify-center">
          {problems.map((problem, idx) => {
            // Calculate shortest-path circular distance
            const diff = (idx - activeIndex + problems.length) % problems.length;
            let position = diff;
            if (position > problems.length / 2) position -= problems.length;

            const isActive = position === 0;
            const isPrev = position === -1;
            const isNext = position === 1;
            
            const absPos = Math.abs(position);
            // Hide cards that are far away to prevent them from "flying by"
            const isVisible = absPos <= 1.5;

            return (
              <div 
                key={idx}
                className={`absolute w-[240px] md:w-[320px] aspect-[1] transition-all duration-700 ease-out p-6 md:p-10 bg-white border border-mint-light rounded-[2.5rem] flex flex-col items-center justify-center text-center
                  ${isActive ? 'z-30 opacity-100 scale-100 rotate-0 translate-x-0' : ''}
                  ${isPrev ? 'z-20 opacity-40 scale-90 -rotate-12 -translate-x-[60%] md:-translate-x-[80%]' : ''}
                  ${isNext ? 'z-20 opacity-40 scale-90 rotate-12 translate-x-[60%] md:translate-x-[80%]' : ''}
                  ${!isVisible ? 'z-10 opacity-0 scale-75 translate-y-12 pointer-events-none' : ''}
                `}
              >
                <div className="w-14 h-14 rounded-full bg-peach/10 flex items-center justify-center mb-6 text-peach flex-shrink-0">
                  <AlertCircle size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">
                  {problem}
                </h3>
              </div>
            );
          })}
          
          {/* Controls */}
          <div className="absolute -bottom-8 md:-bottom-12 left-0 right-0 flex justify-center items-center gap-6 z-40">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center border-mint-light text-pantone hover:bg-white"
              onClick={prevCard}
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex gap-2">
              {problems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-peach w-5' : 'bg-mint-light'}`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center border-mint-light text-pantone hover:bg-white"
              onClick={nextCard}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
