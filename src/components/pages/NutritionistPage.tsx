import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { ArrowLeft, Sparkles, Zap, Info, Moon, Activity, Droplets, Microscope, Heart, Wind, ShieldAlert, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import treeImg from '../../assets/tree.jpg';

export function NutritionistPage() {
  // Ensure we start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roots = [
    { icon: Moon, title: "Сон и отдых", desc: "Нарушения сна и недостаток качественного восстановления" },
    { icon: Activity, title: "Движение", desc: "Дефицит физической активности и застойные явления" },
    { icon: Droplets, title: "Питание и вода", desc: "Дефицит нутриентов, обезвоживание, несбалансированный рацион" },
    { icon: Microscope, title: "Микрофлора", desc: "Дисбаланс бактерий в кишечнике (микробиом)" },
    { icon: Heart, title: "Связь с собой", desc: "Эмоциональное выгорание, потеря контакта со своим телом" },
    { icon: Wind, title: "Экология", desc: "Влияние окружающей среды и токсическая нагрузка" },
    { icon: ShieldAlert, title: "Травмы", desc: "Последствия физических и психологических травм" },
    { icon: Brain, title: "Стресс", desc: "Хронический стресс и его влияние на гормональный фон" }
  ];

  return (
    <div className="min-h-screen bg-[#FaFaFa]">
      {/* Header / Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-mint-light/30">
        <Container>
          <div className="h-20 flex items-center">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-pantone transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium font-heading tracking-wide">Вернуться на главную</span>
            </Link>
          </div>
        </Container>
      </nav>

      <section className="py-16 md:py-24 overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="mb-20 text-center relative">
              <div className="inline-flex p-4 rounded-3xl bg-mint-light/50 text-pantone mb-8 shadow-sm relative z-10">
                <Sparkles size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-8 leading-tight relative z-10">
                Чем на самом деле занимается <br className="hidden md:block" /> нутрициолог?
              </h1>
              <div className="h-2 w-32 bg-peach mx-auto rounded-full relative z-10"></div>
              
              {/* Background Accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mint-light/20 via-transparent to-transparent -z-0"></div>
            </div>

            {/* Introductory Text */}
            <div className="prose prose-lg prose-slate max-w-none mb-20 space-y-8 text-slate-700 leading-relaxed">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-mint-light shadow-xl shadow-mint-light/10 relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
                      Важно понимать: нутрициолог не лечит болезни и не ставит диагнозы.
                    </p>
                    <p>
                      Его главная миссия — найти истоки нарушений в организме и мягко восстановить внутренний баланс, чтобы предотвратить развитие заболеваний.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-mint-light/20 blur-3xl -mr-32 -mt-32"></div>
              </div>
            </div>

            {/* Tree Metaphor Section */}
            <section className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-white border border-mint-light shadow-2xl relative group">
                    <img 
                      src={treeImg} 
                      alt="Метафора дерева здоровья" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
                  </div>
                  {/* Decorative blobs */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-peach/10 rounded-full blur-[80px] -z-10"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mint-light/30 rounded-full blur-[80px] -z-10"></div>
                </div>

                <div className="space-y-8 order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Представьте здоровье <br className="hidden md:block" /> как дерево
                  </h2>
                  <div className="h-1.5 w-16 bg-pantone rounded-full"></div>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed italic">
                    <p>
                      «Если корни дерева слабы или повреждены, листва рано или поздно засохнет. Так и с нашим телом...»
                    </p>
                    <p className="not-italic">
                      Задолго до появления первых симптомов в нём начинают накапливаться дисбалансы, которые постепенно нарушают работу целых систем. 
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Roots Grid */}
            <section className="mb-24 space-y-12">
               <div className="text-center">
                 <h2 className="text-3xl font-black text-slate-800 mb-4">Какие «корни» ведут к проблемам?</h2>
                 <p className="text-slate-500 max-w-xl mx-auto italic">Фундаментальные основы, на которых строится ваше самочувствие каждый день.</p>
               </div>

               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {roots.map((item, idx) => (
                   <div key={idx} className="bg-white p-6 rounded-[2rem] border border-mint-light hover:border-peach/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-mint-light/10 group flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-mint-light/40 flex items-center justify-center text-pantone mb-5 group-hover:bg-peach group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                        <item.icon size={26} />
                      </div>
                      <h4 className="font-black text-slate-800 text-base mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
               </div>
            </section>

            {/* Iceberg Callout */}
            <section className="mb-24 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-pantone/20 blur-[100px] -mr-48 -mt-48 group-hover:opacity-60 transition-opacity"></div>
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-peach/10 blur-[100px] -ml-48 -mb-48 group-hover:opacity-40 transition-opacity"></div>

               <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                     <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-mint-light font-bold text-xs tracking-widest uppercase">
                        <Microscope size={16} />
                        Функциональный подход
                     </div>
                     <h2 className="text-3xl md:text-5xl font-black leading-tight">Здоровье под <br /> другим углом</h2>
                     <p className="text-slate-300 text-lg leading-relaxed">
                        Мы не работаем с диагнозом как с конечной точкой. Мы рассматриваем его как вершину айсберга 🧊.
                     </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] space-y-6">
                     <h3 className="text-xl font-bold text-mint-light border-b border-white/10 pb-4">Что скрыто под поверхностью?</h3>
                     <ul className="space-y-4">
                        {[
                          "Нарушения усвоения и детоксикации",
                          "Сбои в выработке энергии на клеточном уровне",
                          "Гормональные и иммунные дисбалансы",
                          "Нарушение структурной целостности ЖКТ"
                        ].map((item, idx) => (
                          <li key={idx} className="flex gap-4 items-start text-slate-300">
                             <Zap size={20} className="text-peach shrink-0 mt-1" />
                             <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </section>

            {/* Mission & Conclusion */}
            <section className="text-center py-16 space-y-12">
               <div className="max-w-2xl mx-auto space-y-8">
                 <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-snug">
                   Инвестиция в будущее
                 </h2>
                 <p className="text-lg text-slate-600 leading-relaxed">
                   Интегративная нутрициология позволяет не просто снять симптомы, а создать условия, в которых болезнь не сможет развиться. <span className="font-bold text-pantone">Забота о здоровье сегодня — это жизнь, полная энергии завтра.</span>
                 </p>
                 <div className="h-1.5 w-24 bg-peach mx-auto rounded-full"></div>
               </div>

               <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-mint-light/50 flex flex-col md:flex-row gap-10 items-center justify-between shadow-sm relative group overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-mint-light/5 to-transparent pointer-events-none"></div>
                 <div className="text-left relative z-10 flex gap-6 items-center">
                    <div className="w-16 h-16 rounded-full bg-peach/10 flex items-center justify-center text-peach shrink-0">
                       <Info size={32} />
                    </div>
                    <div>
                       <h3 className="text-xl md:text-2xl font-black text-slate-800">Хотите разобраться в истоках?</h3>
                       <p className="text-slate-500">Обсудим вашу ситуацию на бесплатной ознакомительной консультации.</p>
                    </div>
                 </div>
                 <div className="relative z-10 shrink-0 w-full md:w-auto">
                    <Link to="/#contact">
                       <Button variant="primary" size="lg" className="w-full md:w-auto px-10 h-16 text-lg shadow-xl shadow-peach/20 hover:scale-105 active:scale-95 transition-all">Прийти на консультацию</Button>
                    </Link>
                 </div>
               </div>
            </section>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-mint-light/30 text-center">
        <Container>
          <p className="text-slate-400">© 2026 Наталья Семынина. Все права защищены. <br className="md:hidden" /> Профилактика эффективнее лечения 💚</p>
        </Container>
      </footer>
    </div>
  );
}
