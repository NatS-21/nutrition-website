import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { MessageCircle } from 'lucide-react';
import maxIcon from '../../assets/socials/MAX.svg';
import tgIcon from '../../assets/socials/Telegram.svg';
import vkIcon from '../../assets/socials/Vk.svg';

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-turquoise-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-0 w-[500px] h-[500px] bg-turquoise-light/30 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -z-0 w-[400px] h-[400px] bg-peach/20 rounded-full blur-[100px] opacity-40 -translate-x-1/4 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -z-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] opacity-30 -translate-x-1/2 -translate-y-1/2"></div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-3xl bg-turquoise-blueish/25 border border-white/20 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center shadow-xl overflow-hidden relative group">
          {/* Corner Glow ("Засвет") */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
          
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight relative z-10">
            Готовы начать путь к жизни, полной энергии и гармонии?
          </h2>
          
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
            Запишитесь на консультацию или просто задайте вопрос. Любые уточнения в Telegram — <span className="text-white font-bold underline underline-offset-4 decoration-peach">всегда бесплатно</span>, я с радостью подскажу верное направление.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-peach hover:bg-peach/90 text-white w-full sm:w-auto hover:scale-105 active:scale-95"
            >
              Записаться на консультацию
            </Button>
            
            <div className="relative w-full sm:w-auto group/btn">
              <a href="https://t.me/katerina_foodhealth_kanal" target="_blank" rel="noreferrer" className="block">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto items-center backdrop-blur-sm border border-white/10 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="mr-2" /> Написать в Telegram
                </Button>
              </a>
              {/* Highlight Badge */}
              <div className="absolute -top-2 -right-2 bg-peach text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white transform rotate-12 group-hover/btn:scale-110 transition-transform">
                Бесплатно
              </div>
            </div>
          </div>

          {/* Social Messengers Row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-center gap-8 relative z-10">
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer" 
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
              title="Max"
            >
              <img src={maxIcon} alt="Max" className="w-6 h-6" />
            </a>

            <a 
              href="https://t.me/katerina_foodhealth_kanal" 
              target="_blank" 
              rel="noreferrer" 
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
              title="Telegram"
            >
              <img src={tgIcon} alt="Telegram" className="w-6 h-6" />
            </a>

            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer" 
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
              title="VKontakte"
            >
              <img src={vkIcon} alt="VK" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
