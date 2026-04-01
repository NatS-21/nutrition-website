import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { ArrowLeft, Sparkles, Moon, Activity, Droplets, Microscope, Heart, Wind, ShieldAlert, Brain, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import treeImg from '../../assets/tree.jpg';
import pyramidImg from '../../assets/pyramid.jpg';

export function NutritionistPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roots = [
    { icon: <Moon size={24} />, title: "Сон и отдых", desc: "Нарушения сна и отдыха" },
    { icon: <Activity size={24} />, title: "Движение", desc: "Недостаточный уровень физической активности и движения" },
    { icon: <Droplets size={24} />, title: "Питание и вода", desc: "Неправильное питание и питьевой режим, дефициты витаминов и микроэлементов" },
    { icon: <Microscope size={24} />, title: "Микрофлора", desc: "Проблемы микрофлоры" },
    { icon: <Heart size={24} />, title: "Эмоции и дух", desc: "Нарушения духовных связей и эмоционального состояния" },
    { icon: <Wind size={24} />, title: "Экология", desc: "Экологические факторы" },
    { icon: <ShieldAlert size={24} />, title: "Травмы", desc: "Травмы тела и психики" },
    { icon: <Brain size={24} />, title: "Стресс", desc: "Хронический и острый стресс" }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-800 font-sans selection:bg-pantone/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-slate-200/50">
        <Container>
          <div className="h-16 flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-pantone transition-all group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">На главную</span>
            </Link>
            <div className="hidden sm:block text-slate-400 text-sm font-medium tracking-wider uppercase">О нутрициологии</div>
            <div className="w-20 sm:w-24"></div>
          </div>
        </Container>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="pt-12 md:pt-16 pb-24 md:pb-32 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pantone/5 blur-[120px] rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-peach/5 blur-[120px] rounded-full -ml-20 -mb-20"></div>
          
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="inline-flex p-3 rounded-2xl bg-mint-light/30 text-pantone mb-4">
                <Sparkles size={32} />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Сегодня хочу рассказать вам о том, чем занимается <br className="hidden md:block" /> 
                <span className="text-pantone tracking-tight">интегративный клинический нутрициолог</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Нутрициолог не лечит конкретные заболевания и не ставит диагнозы. Его задача — <span className="text-slate-900 font-bold">выявлять корневые причины</span> нарушений здоровья и восстанавливать баланс.
              </p>
            </div>
          </Container>
        </section>

        {/* Tree and Pyramid Combined Section */}
        <section className="pt-12 pb-24 bg-[#FAF9F6] border-y border-slate-100">
          <Container>
            <div className="space-y-16">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  Метафора дерева и фундаментальные дисбалансы
                </h2>
                <div className="h-1.5 w-20 bg-peach mx-auto rounded-full"></div>
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  Для наглядности приведу пример с деревом: если корни дерева гниют, то листва постепенно засохнет и осыпется. Так же и с нашим организмом...
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                {/* Tree Diagram */}
                <div className="bg-white p-6 md:p-10 rounded-[3rem] shadow-xl border border-slate-100 group flex flex-col items-center">
                  <div className="mb-8 overflow-hidden rounded-2xl border-4 border-slate-50">
                    <img 
                      src={treeImg} 
                      alt="Метафора дерева здоровья" 
                      className="w-full h-auto transform group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Дерево здоровья</h3>
                </div>

                {/* Pyramid Diagram */}
                <div className="bg-white p-6 md:p-10 rounded-[3rem] shadow-xl border border-slate-100 group flex flex-col items-center">
                  <div className="mb-8 overflow-hidden rounded-2xl border-4 border-slate-50 flex items-center justify-center bg-slate-50/50">
                    <img 
                      src={pyramidImg} 
                      alt="Иерархия здоровья и дисбалансов" 
                      className="max-w-full max-h-[400px] w-auto h-auto object-contain transform group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Пирамида функционального состояния</h3>
                </div>
              </div>

              {/* Narrative block after cards */}
              <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-600 leading-relaxed border-l-4 border-peach/30 pl-8 animate-slide-up">
                <p>
                  Задолго до появления симптомов в организме начинаются определенные дисбалансы, нарушающие работу органов и систем.
                </p>
                <div className="h-px w-full bg-slate-100"></div>
                <p>
                  К этим дисбалансам корней добавляется влияние генетической предрасположенности, пусковых факторов (триггеров) и постоянно присутствующих неблагоприятных факторов.
                </p>
                <p className="font-bold text-slate-900 italic">
                  Всё вместе это формирует фундаментальные дисбалансы, ведущие к возникновению симптомов, синдромов и хронических заболеваний.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* The 8 Roots & Factors Section */}
        <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-white">
          <Container>
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Рассмотрим подробнее корни:
              </h2>
              <div className="h-1.5 w-24 bg-pantone mx-auto rounded-full"></div>
            </div>

            {/* Main Roots Grid - 2 cols on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 px-2 sm:px-0">
              {roots.map((item, idx) => (
                <div key={idx} className="group p-4 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-white border-2 border-slate-100 hover:border-pantone/50 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-mint-light/40 flex items-center justify-center text-pantone mb-4 sm:mb-6 group-hover:bg-pantone group-hover:text-white transition-all duration-500 border border-slate-100 shadow-inner">
                    <span className="scale-75 sm:scale-100">{item.icon}</span>
                  </div>
                  <h3 className="text-sm sm:text-lg font-black text-slate-900 mb-2 sm:mb-3 tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-slate-700 text-[10px] sm:text-sm leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Additional Factors - Second Group */}
            <div className="max-w-4xl mx-auto space-y-8 bg-[#FAF9F6] p-8 md:p-12 rounded-[3.5rem] border border-slate-100 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-peach/5 blur-[100px] -mr-32 -mt-32"></div>
               
               <h3 className="text-2xl font-black text-slate-900 mb-8 border-b border-slate-200 pb-6 relative z-10">
                 К этому также добавляется влияние:
               </h3>

               <div className="grid gap-6 relative z-10">
                 {[
                   "🟢 Генетических предрасположенностей",
                   "🟢 Пусковых факторов (триггеров), запускающих патологические процессы",
                   "🟢 Постоянно присутствующих неблагоприятных факторов"
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:translate-x-2 transition-all duration-300">
                     <span className="text-lg md:text-xl leading-relaxed font-bold text-slate-800">{item}</span>
                   </div>
                 ))}
               </div>
            </div>
          </Container>
        </section>

        {/* Conclusion Section */}
        <section className="pt-8 md:pt-12 pb-24 md:pb-32 bg-white text-center">
          <Container>
            <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">
              <div className="space-y-6">
                <div className="inline-flex p-3 rounded-2xl bg-pantone/10 text-pantone">
                  <Heart size={32} />
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
                  Восстановление через первопричину
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                  <p>
                    Интегративная (функциональная) нутрициология фокусируется именно на восстановлении здоровья путём устранения первопричин проблем. 
                  </p>
                  <p>
                    Это позволяет предотвратить развитие болезни, улучшить самочувствие и сохранить здоровье надолго!
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF9F6] p-10 md:p-16 rounded-[3.5rem] border border-slate-100 shadow-sm relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-mint-light/20 blur-[100px] -mr-32 -mt-32"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-center gap-4 text-pantone">
                    <Info size={40} />
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                      Помните: заботьтесь о своём теле заранее
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                    Ведь профилактика гораздо эффективнее лечения 💚
                  </p>
                  <div className="pt-4">
                    <Link to="/#contact">
                      <Button variant="primary" size="lg" className="h-16 px-12 text-lg shadow-xl shadow-pantone/20 hover:shadow-pantone/40 transition-all rounded-full group-hover:scale-105">
                        Записаться на консультацию
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-sm">
            <p>© 2026 Наталья Семынина. Все права защищены.</p>
            <div className="flex gap-8">
              <Link to="/" className="hover:text-pantone transition-colors">Главная</Link>
              <Link to="/story" className="hover:text-pantone transition-colors">Моя история</Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
