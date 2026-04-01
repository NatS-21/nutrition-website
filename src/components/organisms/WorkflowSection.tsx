import { Container } from '../atoms/Container';
import { SectionTitle } from '../atoms/SectionTitle';
import { StepItem } from '../molecules/StepItem';
import { UserSearch, Activity, Sparkles, HeartPulse } from 'lucide-react';

export function WorkflowSection() {
  const steps = [
    {
      number: 1,
      title: 'Знакомство и диагностика',
      description: 'Вы заполняете анкету и дневник питания. Мы проводим первую установочную встречу.',
      icon: UserSearch
    },
    {
      number: 2,
      title: 'Анализ образа жизни',
      description: 'Я анализирую ваши привычки, текущий рацион и возможные дефициты по симптомам.',
      icon: Activity
    },
    {
      number: 3,
      title: 'Индивидуальные рекомендации',
      description: 'Вы получаете подробный, но понятный пошаговый план по питанию и образу жизни.',
      icon: Sparkles
    },
    {
      number: 4,
      title: 'Поддержка и корректировки',
      description: 'Мы на связи. Я отвечу на любые вопросы, помогу внедрить привычки мягко, без срывов и откатов и буду сопровождать вас на протяжении всего пути.',
      icon: HeartPulse
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mint-light/20 via-transparent to-transparent -z-0"></div>
      
      <Container className="relative z-10">
        <SectionTitle subtitle="Ваш комфортный путь к переменам: системно, бережно и профессионально.">
          Как проходит работа
        </SectionTitle>
        
        <div className="max-w-4xl mx-auto mt-20 relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-[31px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-pantone via-mint-light to-peach opacity-30 md:left-[31px] -z-10"></div>
          
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative transition-all duration-500 hover:translate-x-2">
                <StepItem {...step} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pantone/5 border border-pantone/10 text-pantone font-bold text-sm">
            <span className="w-2 h-2 rounded-full bg-pantone animate-ping"></span>
            Я буду рядом на каждом этапе
          </div>
        </div>
      </Container>
    </section>
  );
}
