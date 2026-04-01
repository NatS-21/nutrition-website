import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { ArrowLeft, Heart, Sparkles, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function StoryPage() {
  // Ensure we start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-beige-50/30">
      {/* Header / Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-mint-light/30">
        <Container>
          <div className="h-20 flex items-center">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-pantone transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Вернуться на главную</span>
            </Link>
          </div>
        </Container>
      </nav>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-16 text-center">
              <div className="inline-flex p-3 rounded-2xl bg-mint-light text-pantone mb-6">
                <Heart size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
                Моя история: путь от пациента к целителю
              </h1>
              <div className="h-1.5 w-24 bg-peach mx-auto rounded-full"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-mint-light shadow-sm">
                <p className="text-xl font-medium text-slate-800 italic mb-8 border-l-4 border-pantone pl-6">
                  "Мой путь к нутрициологии начался не в институте, а там, где пахнет антисептиком и страхом. Мне 41, а выгляжу, как говорят, на 28-35. Но тогда, в больнице, я чувствовала себя беспомощной."
                </p>

                <p>Врачи на консилиуме были категоричны: «Срочная операция. Удаляем трубу». А на мои слёзы и отказ ответили: «У вас же вторая есть!».</p>

                <p>И тогда прозвучала фраза, которая изменила всё: <span className="font-bold text-pantone">«У меня и руки две. Это не значит, что одну можно просто отдать»</span>.</p>

                <p>Я подписала отказ и вышла из больницы с одной мыслью: «Боже, помоги просто вылечить эту болезнь и сохранить то, что дано». Но в ответ мне открылся не рецепт, а целый путь. Путь, где здоровье — не удача, а системный результат. Где лечат не симптомы, а причину. Где органы не «списывают», а восстанавливают.</p>
              </div>

              <section className="space-y-6">
                <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                  <Sparkles className="text-peach" />
                  Личный эксперимент
                </h2>
                <p>Я встретила человека, который показал мне науку о здоровом образе жизни изнутри. Шаг за шагом:</p>
                <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                  {[
                    { icon: '🍃', text: 'Наладила питание клеток', desc: 'Не диета, а полноценный рацион' },
                    { icon: '🧘‍♀️', text: 'Убрала стресс', desc: 'Научилась управлять состоянием' },
                    { icon: '🌙', text: 'Восстановила сон', desc: 'Признаюсь, это было сложнее всего' },
                    { icon: '🫧', text: 'Провела очищение', desc: 'Восполнила все дефициты' }
                  ].map((item, i) => (
                    <li key={i} className="bg-white p-6 rounded-2xl border border-mint-light/50 flex flex-col gap-2">
                       <span className="text-2xl">{item.icon}</span>
                       <span className="font-bold text-slate-800">{item.text}</span>
                       <span className="text-sm text-slate-500">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="bg-mint-light/30 p-8 md:p-12 rounded-[2.5rem] border border-mint-light">
                <h2 className="text-2xl font-black text-slate-800 mb-6">«Этого не может быть»</h2>
                <p>Через время я снова пришла на проверку. Врачи разводили руками: «Этого не может быть. Выздоровление невозможно». Но анализы говорили обратное. И так было не с одним моим диагнозом.</p>
                <p>Я поняла: моя история — не уникальное везение. <span className="font-bold text-pantone">Это алгоритм</span>. Алгоритм, который может повторить каждый, если знать, как слушать своё тело.</p>
              </div>

              <section className="space-y-6">
                 <h2 className="text-2xl font-black text-slate-800">Миссия и диплом</h2>
                 <p>Я настолько погрузилась в изучение возможностей тела, что это перестало быть просто «хобби». Я получила диплом клинического нутрициолога.</p>
                 <p>Для меня это не просто профессия — <span className="font-bold underline decoration-peach decoration-4 underline-offset-4">это миссия</span>. Помогать людям не бороться с болезнями, а выстраивать такое здоровье, при котором болезни просто не имеют шанса.</p>
                 <p>Я не верю в «лишние» органы. Я верю в ресурс тела, который можно пробудить правильным питанием, образом жизни и глубоким пониманием биохимии человека.</p>
              </section>

              <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-900 text-white p-10 rounded-[2.5rem] overflow-hidden relative">
                <div className="relative z-10">
                  <h2 className="text-2xl font-black mb-4">Что кроме нутрициологии?</h2>
                  <p className="text-slate-300 leading-relaxed">
                    В моей жизни много страсти: от вокала, который лечит душу, до общения с лошадьми. Обожаю коньки, путешествия и природу. Всё это — часть моего целостного подхода к жизни. 🌿
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-peach/20 blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint/20 blur-3xl -ml-20 -mb-20"></div>
              </div>

              <section className="text-center py-12 border-t border-mint-light/30">
                <Quote className="mx-auto text-peach mb-6" size={40} />
                <p className="text-2xl font-bold text-slate-800 mb-8 leading-snug">
                  Давай найдём твой уникальный путь к телу, в котором хочется жить.
                </p>
                <Link to="/#contact">
                   <Button variant="primary" size="lg" className="px-12 h-16 text-lg">Записаться на консультацию</Button>
                </Link>
              </section>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-mint-light/30 text-center">
        <Container>
          <p className="text-slate-400">© 2026 Наталья Семынина. Все права защищены.</p>
        </Container>
      </footer>
    </div>
  );
}
