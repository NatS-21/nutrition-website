import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-32 relative overflow-hidden w-full">
      <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-mint-light rounded-full blur-3xl opacity-50 translate-x-1/4 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-beige-100 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/2"></div>
      
      <div className="w-full border-b-2 border-pantone/30 py-4 mb-8 lg:mb-10">
        <Container>
          <div className="flex items-center gap-4">
            <div className="lg:hidden w-12 aspect-square rounded-full overflow-hidden border-2 border-mint-light flex-shrink-0">
               <img 
                src="https://images.unsplash.com/photo-1594824436998-fdfbc5610d48?auto=format&fit=crop&q=80&w=300&h=400" 
                alt="Наталья Семынина" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-pantone font-bold text-xs lg:text-sm tracking-[0.2em] leading-none uppercase w-full">
              Наталья Семынина — дипломированный интегративный клинический нутрициолог
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-4 lg:mb-6 leading-tight">
              Собираю пазл твоего здоровья
            </h1>
            
            <div className="space-y-4 mb-6 lg:mb-8 max-w-lg">
              <p className="text-lg lg:text-xl text-slate-600">
                Ваш персональный навигатор, который поможет восстановить не только тело, но и качество жизни во всех её аспектах. 
              </p>
              <p className="text-lg lg:text-xl text-slate-600">
                Помогу скорректировать Ваш образ жизни через питание, стресс-менеджмент, сон и физическую активность.
              </p>
              <p className="text-lg lg:text-xl text-slate-600 font-bold text-pantone">
                Индивидуальные консультации нутрициолога онлайн.
              </p>
            </div>
            
            <ul className="space-y-2 lg:space-y-4 mb-8 lg:mb-10">
              {['Персонализированный подход', 'Работа с причинами', 'Поддержка на всём пути'].map((item) => (
                <li key={item} className="flex items-center gap-2 lg:gap-3 text-base lg:text-lg text-slate-700 font-medium">
                  <CheckCircle2 className="text-pantone flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button variant="primary" size="lg">Записаться на консультацию</Button>
              <a href="#services" className="inline-flex">
                 <Button variant="outline" size="lg" className="w-full">Узнать подробнее</Button>
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-mint-light relative group border border-mint-light">
              <div className="absolute inset-0 bg-gradient-to-tr from-mint to-transparent opacity-40 mix-blend-multiply group-hover:opacity-20 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1594824436998-fdfbc5610d48?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Наталья - нутрициолог" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
