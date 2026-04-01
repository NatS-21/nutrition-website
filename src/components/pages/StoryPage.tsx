import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { ArrowLeft, Sparkles, Quote, Wind, Moon, Sun, Heart, Mic2, Compass, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import heroImg from '../../assets/natalia_story_hero.png';
import hobbiesImg from '../../assets/natalia_hobbies.png';

export function StoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <div className="hidden sm:block text-slate-400 text-sm font-medium tracking-wider uppercase">Моя история</div>
            <div className="w-20 sm:w-24"></div> {/* Spacer for balance */}
          </div>
        </Container>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden py-12 md:py-0">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImg} 
              alt="Наталья Семынина" 
              className="w-full h-full object-cover object-center opacity-90 scale-105 animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>
          
          <Container className="relative z-10">
            <div className="max-w-2xl animate-slide-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-pantone/10 text-pantone text-xs font-bold tracking-widest uppercase mb-8">
                Основано на личном опыте
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                Меня зовут <span className="text-pantone">Наталья</span>,<br />
                и я верю: в теле нет «лишних» органов.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                Есть только неуслышанные сигналы. 🩺✨
              </p>
            </div>
          </Container>
          
          {/* Subtle scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-300 hidden md:block">
            <Waves size={32} />
          </div>
        </section>

        {/* The Turning Point Section */}
        <section className="py-24 md:py-32 bg-white relative">
          <Container>
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  От отчаяния в больничной палате — к призванию, которое меняет жизни
                </h2>
                <div className="h-1.5 w-20 bg-peach rounded-full"></div>
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  "Мой путь к нутрициологии начался не в институте, а там, где пахнет антисептиком и страхом. Мне 40, а выгляжу, как говорят, на 27-32 (спасибо, сон и любовь к геронтологии с 16 лет 😉)."
                </p>
              </div>
              <div className="lg:col-span-7 space-y-8">
                <div className="bg-beige-100/50 p-8 md:p-12 rounded-[2.5rem] border border-beige-200/50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-peach/5 rounded-full blur-3xl group-hover:bg-peach/10 transition-colors duration-700"></div>
                  
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 relative z-10">
                    Но тогда, в больнице, я чувствовала себя беспомощной. Врачи на консилиуме были категоричны: <span className="font-bold text-slate-900">«Срочная операция. Удаляем трубу»</span>. А на мои слёзы и отказ ответили: «У вас же вторая есть!».
                  </p>
                  
                  <div className="relative z-10 py-10 px-8 bg-white/80 backdrop-blur-sm rounded-3xl border-l-8 border-peach shadow-sm mb-8">
                    <Quote className="absolute top-4 right-4 text-peach/20" size={48} />
                    <p className="text-2xl md:text-3xl font-black text-slate-900 leading-tight italic">
                      «У меня и руки две. Это не значит, что одну можно просто отдать».
                    </p>
                  </div>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Я подписала отказ и вышла из больницы с одной мыслью: «Боже, помоги просто вылечить эту болезнь и сохранить то, что дано». Но в ответ мне открылся не рецепт, а целый путь. 
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* The Philosophy Section */}
        <section className="py-24 bg-pantone text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_rgba(255,138,80,0.4)_0%,_transparent_50%)]"></div>
          </div>
          
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                Путь, где здоровье — это не удача, а системный результат
              </h2>
              <p className="text-xl md:text-2xl text-mint-light font-medium leading-relaxed">
                Где лечат не симптомы, а причину. <br />
                Где органы не «списывают», а восстанавливают.
              </p>
            </div>
          </Container>
        </section>

        {/* The Experiment Section */}
        <section className="py-24 md:py-32 bg-[#FAF9F6]">
          <Container>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">Личный эксперимент</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto italic">
                Я встретила человека, который показал мне науку о здоровом образе жизни изнутри. Шаг за шагом я трансформировала свою реальность:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: <Wind className="text-pantone" size={32} />, 
                  title: "Питание", 
                  desc: "Наладила питание — не диету, а полноценное питание клетки.",
                  accent: "bg-mint-light/30"
                },
                { 
                  icon: <Sun className="text-peach" size={32} />, 
                  title: "Стресс", 
                  desc: "Убрала хронический стресс (да, это возможно!).",
                  accent: "bg-peach/10"
                },
                { 
                  icon: <Moon className="text-slate-400" size={32} />, 
                  title: "Сон", 
                  desc: "Научилась спать (признаюсь, это было сложнее всего!).",
                  accent: "bg-slate-100"
                },
                { 
                  icon: <Waves className="text-pantone/60" size={32} />, 
                  title: "Очищение", 
                  desc: "Провела грамотное очищение и восполнила дефициты.",
                  accent: "bg-mint-light/20"
                }
              ].map((item, i) => (
                <div key={i} className={`${item.accent} p-8 rounded-[2rem] border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 group`}>
                  <div className="p-4 bg-white rounded-2xl inline-block mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-20 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-peach opacity-5 rounded-bl-full -mr-4 -mt-4"></div>
              <div className="md:w-2/3 space-y-6 relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900">«Этого не может быть»</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Через время я снова пришла на проверку. Врачи разводили руками: «Этого не может быть. Выздоровление невозможно». Но анализы говорили обратное. И так было не с одним моим диагнозом.
                </p>
                <div className="flex items-center gap-4 text-pantone font-bold text-lg">
                  <span className="w-12 h-0.5 bg-pantone"></span>
                  Это алгоритм
                </div>
              </div>
              <div className="md:w-1/3 bg-pantone/5 p-8 rounded-3xl border border-pantone/10 text-center">
                <Sparkles className="text-pantone mx-auto mb-4" size={48} />
                <p className="text-slate-700 font-medium leading-relaxed">
                  Алгоритм, который может повторить каждый, если знать, как слушать своё тело.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Mission Section */}
        <section className="py-24 md:py-32 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex p-3 rounded-2xl bg-peach/10 text-peach mb-2">
                  <Heart size={32} />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                  Когда личное исцеление превращается в профессию
                </h2>
              </div>
              
              <div className="prose prose-lg prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
                <p>
                  Я настолько погрузилась в изучение возможностей тела, что это перестало быть просто «хобби». Я поняла: моя история — не уникальное везение. <br /><br />
                  Поэтому я получила <span className="text-slate-900 font-bold underline decoration-peach decoration-4 underline-offset-4">диплом клинического нутрициолога</span>. 
                </p>
                
                <div className="bg-slate-900 text-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <Quote className="absolute top-6 right-6 text-white/10" size={80} />
                  <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic">
                    «Для меня это не просто профессия — это миссия. Помогать людям не бороться с болезнями, а выстраивать такое здоровье, при котором болезни просто не имеют шанса. Находить и устранять корень, а не срезать верхушку проблем».
                  </p>
                </div>
                
                <p className="text-center text-xl font-bold text-slate-800 pt-8">
                  Я не верю в «лишние» органы. Я верю в ресурс тела, который можно пробудить правильным питанием, образом жизни и глубоким пониманием биохимии человека.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Hobbies Section */}
        <section className="py-24 md:py-32 bg-[#FAF9F6] overflow-hidden">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-pantone/10 rounded-[3rem] blur-2xl"></div>
                <img 
                  src={hobbiesImg} 
                  alt="Увлечения Натальи" 
                  className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900">А что кроме нутрициологии?</h2>
                <p className="text-lg text-slate-600 leading-relaxed uppercase tracking-wider font-bold">
                  Вокал, лошади, природа 🌿
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Пока что я не мама, но в моей жизни много любви и страсти: от вокала, который лечит душу, до общения с лошадьми, которые учат чувствовать без слов. Обожаю кататься на коньках, путешествовать и просто быть на природе. 
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Mic2 size={20} />, text: "Вокал" },
                    { icon: <Compass size={20} />, text: "Путешествия" },
                    { icon: <Heart size={20} />, text: "Лошади" },
                    { icon: <Sun size={20} />, text: "Природа" }
                  ].map((hobby, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <span className="text-pantone">{hobby.icon}</span>
                      <span className="font-bold text-slate-700 text-sm">{hobby.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-slate-600 font-medium italic">
                  "Всё это — часть моего целостного подхода к жизни."
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 bg-white text-center">
          <Container>
            <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                Давай знакомиться ближе
              </h2>
              <div className="prose prose-xl prose-slate mx-auto text-slate-600 leading-relaxed">
                <p>
                  Если ты устал от бесконечного лечения симптомов, если тебе говорят «с этим надо просто смириться», если ты хочешь не просто временного облегчения, а настоящего, глубокого здоровья — давай знакомиться ближе. Вместе мы найдём твой уникальный путь к телу, в котором хочется жить.
                </p>
              </div>
              
              <div className="pt-8 space-y-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <Link to="/#contact">
                    <Button variant="primary" size="lg" className="h-16 px-12 text-lg shadow-xl shadow-pantone/20 hover:shadow-pantone/40 transition-all rounded-full">
                      Начать свой путь к здоровью
                    </Button>
                  </Link>
                </div>
                <p className="text-pantone font-bold flex items-center justify-center gap-2">
                  <Sparkles size={20} />
                  Готова стать твоим проводником
                </p>
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
              <Link to="/nutritionist" className="hover:text-pantone transition-colors">О нутрициологии</Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
