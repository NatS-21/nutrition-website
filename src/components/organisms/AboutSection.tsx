import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../atoms/Container';
import { SectionTitle } from '../atoms/SectionTitle';
import { Button } from '../atoms/Button';
import { Award, BookOpen, Heart, ChevronDown, FileText, GraduationCap } from 'lucide-react';
import { CertificateStack } from '../molecules/CertificateStack';
import { CertificateGallery } from '../molecules/CertificateGallery';

// Import certificates
import universityPriority1 from '../../assets/sertificates/university/priority/clinical_review.png';
import universityPriority2 from '../../assets/sertificates/university/priority/couch.png';
import universityPriority3 from '../../assets/sertificates/university/priority/final.png';
import universityPriority4 from '../../assets/sertificates/university/priority/food_plan.png';
import universityPriority5 from '../../assets/sertificates/university/priority/practical.png';

import medassCert from '../../assets/sertificates/medass/medass.jpg';
import preventMedCert from '../../assets/sertificates/other/prevent-med.png';
import preventmedPdf from '../../assets/sertificates/other/Sertifikat_uchastnika_Preventmed.pdf';

const universityPriority = [
  universityPriority1,
  universityPriority2,
  universityPriority3,
  universityPriority4,
  universityPriority5
];

// Modules imports using glob - explicitly use root-relative path for reliability in Vite
const modulesRaw = import.meta.glob('/src/assets/sertificates/university/modules/*.png', { eager: true, import: 'default' });

const sortedModulePaths = Object.entries(modulesRaw)
  .sort(([pathA], [pathB]) => {
    const nameA = pathA.split('/').pop() || '';
    const nameB = pathB.split('/').pop() || '';
    
    // Check for 'module-N' pattern
    const matchA = nameA.match(/module-(\d+)/);
    const matchB = nameB.match(/module-(\d+)/);
    
    // If both are modules, sort numerically
    if (matchA && matchB) {
      return parseInt(matchA[1]) - parseInt(matchB[1]);
    }
    
    // Modules come before other files
    if (matchA) return -1;
    if (matchB) return 1;
    
    // Alphabetical sort for others (e.g. cooking.png, erd.png)
    return nameA.localeCompare(nameB);
  })
  .map(([_, value]) => value as string);

const universityAll = [...universityPriority, ...sortedModulePaths];

export function AboutSection() {
  const [textExpanded, setTextExpanded] = useState(false);
  const [universityGalleryOpen, setUniversityGalleryOpen] = useState(false);
  const [medassGalleryOpen, setMedassGalleryOpen] = useState(false);
  const [preventMedGalleryOpen, setPreventMedGalleryOpen] = useState(false);

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <Container>
        {/* Mobile Header: Small Circle Photo + Title */}
        <div className="lg:hidden flex flex-col items-center mb-6 text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-turquoise-light bg-beige-100 shrink-0">
             <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="Наталья" 
                className="w-full h-full object-cover"
              />
          </div>
          <SectionTitle centered={true} className="mb-0">
            Обо мне
          </SectionTitle>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1 space-y-12">
            {/* Desktop Large Image */}
            <div className="hidden lg:block relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-beige-100 relative border border-turquoise-light">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=1000" 
                  alt="Наталья в работе" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-turquoise rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-peach rounded-full mix-blend-multiply opacity-30 blur-xl"></div>
            </div>

            <ul className="space-y-6 lg:space-y-8">
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-turquoise-light p-2 rounded-xl text-turquoise-dark shrink-0"><BookOpen size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Профильное образование</h4>
                  <p className="text-slate-600 text-base">Диплом престижного института нутрициологии.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-turquoise-light p-2 rounded-xl text-turquoise-dark shrink-0"><Award size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Опыт работы</h4>
                  <p className="text-slate-600 text-base">Сотни клиентов, которые наладили ЖКТ и пищевое поведение.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-turquoise-light p-2 rounded-xl text-turquoise-dark shrink-0"><Heart size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Подход</h4>
                  <p className="text-slate-600 text-base">Без осуждения. Мягко, с заботой и фокусом на здоровье.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle centered={false} className="hidden lg:block mb-8">
              Обо мне
            </SectionTitle>
            
            <div className="relative">
              <div className={`space-y-6 text-lg text-slate-700 leading-relaxed transition-all duration-700 ease-in-out overflow-hidden ${!textExpanded ? 'max-h-[280px] lg:max-h-none' : 'max-h-[1500px]'}`}>
                <p>
                  Привет! Я Наталья — дипломированный интегративный клинический нутрициолог. Участник союза ПревентМед, член ассоциации НАИС.
                </p>
                <p>Мой подход – выявить корневые причины нарушений здоровья и восстановить баланс в организме таким образом, чтобы предотвратить развитие заболеваний.</p>
                <p>Помогаю восстановить здоровье и энергию, наладить работу организма и вернуть ощущение «живу в ресурсе», а не «выживаю на остатках сил».</p>
                <p>Моя работа — это не просто питание. Это системный подход к вашему здоровью: от глубинных причин усталости, проблем с ЖКТ и пищевого поведения до устойчивых результатов без откатов.</p>
                <p>Я не работаю по шаблонам и не даю универсальных «правильных» диет. Вместо этого — нахожу, что именно в вашем организме забирает энергию, и выстраиваю стратегию, которая помогает вам чувствовать себя лучше уже в процессе.</p>
                <p>Питание становится не ограничением, а инструментом восстановления: вкусным, комфортным и поддерживающим ваше тело.</p>
                <p>Практические кейсы. Работа в тройке: врач-нутрициолог-пациент.</p>
                <p>В сферу моих интересов входит Эпигенетика, Биохакинг, Микробиом, ментальное здоровье.</p>
              </div>

              {/* Mobile text fade overlay and Read More button */}
              {!textExpanded && (
                <>
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none lg:hidden" />
                  <button 
                    onClick={() => setTextExpanded(true)}
                    className="lg:hidden absolute bottom-0 left-0 text-turquoise-dark font-bold flex items-center gap-1 group py-1 bg-white/60 backdrop-blur-sm rounded-md px-2 -mb-1"
                  >
                    Читать далее
                    <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Education and Certificates Section - Full Width Row */}
        <div className="mt-24 lg:mt-32">
          <SectionTitle centered={false} className="mb-12">
            <span className="flex items-center gap-4">
              <GraduationCap size={44} className="text-indigo-950 shrink-0" strokeWidth={1.8} />
              Образование и сертификаты
            </span>
          </SectionTitle>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* University of Educational Medicine */}
            <div className="bg-beige-100/30 border border-beige-200/50 rounded-[2.5rem] p-8 md:p-10 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start justify-between gap-8 h-full">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-800 leading-tight">
                  Университет Образовательной Медицины (ООО ИФИДН, Москва)
                </h3>
                <p className="text-slate-600 text-lg">Интегративный и клинический нутрициолог.</p>
              </div>
              <div className="flex justify-start pt-4 sm:pt-0 shrink-0">
                <CertificateStack 
                  images={universityAll} 
                  onClick={() => setUniversityGalleryOpen(true)} 
                />
              </div>
            </div>

            {/* Right Column: Medass and PreventMed */}
            <div className="space-y-6">
              {/* Medass */}
              <div className="bg-turquoise-light/10 border border-turquoise-light/20 rounded-[2rem] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:bg-white transition-all duration-300">
                <div className="space-y-3">
                   <h4 className="font-bold text-slate-800 text-xl">ООО НТЦ «Медасс»</h4>
                   <p className="text-slate-600">Биоимпедансный анализ состава тела.</p>
                </div>
                <div className="shrink-0">
                  <CertificateStack 
                    images={[medassCert]} 
                    onClick={() => setMedassGalleryOpen(true)} 
                    className="h-32 w-48"
                  />
                </div>
              </div>

              {/* PreventMed */}
              <div className="bg-peach/5 border border-peach/10 rounded-[2rem] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:bg-white transition-all duration-300">
                <div className="space-y-3">
                   <h4 className="font-bold text-slate-800 text-xl">Превент Мед</h4>
                   <p className="text-slate-600">Ассоциация специалистов.</p>
                   <a 
                     href={preventmedPdf} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 text-turquoise-dark hover:text-turquoise-dark-light transition-colors text-sm font-medium border-b border-turquoise-dark/30 mt-2"
                   >
                     <FileText size={16} />
                     PDF Версия
                   </a>
                </div>
                <div className="shrink-0 text-center">
                  <CertificateStack 
                    images={[preventMedCert]} 
                    onClick={() => setPreventMedGalleryOpen(true)} 
                    className="h-32 w-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Cards grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 items-start">
          <CollapsibleCard title="С чем ещё работаю">
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Нарушения углеводного обмена (инсулинорезистентность)</li>
              <li>Гормональный дисбаланс и поддержка эндокринной системы</li>
              <li>Снижение токсической нагрузки, паразитоз и детокс-поддержка</li>
              <li>Коррекция веса и метаболический синдром</li>
              <li>Аутоимунные состояния (щитовидка, эндометриоз)</li>
              <li>Пищевые непереносимости и аллергии</li>
              <li>Анемия</li>
              <li>Дисбаланс бактерий</li>
              <li>Системное воспаление</li>
              <li>Биоимпедансный анализ тела</li>
            </ul>
          </CollapsibleCard>

          <CollapsibleCard title="Что восстанавливаю">
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Работу органов ЖКТ (желчеотток, кислотность, недостаток ферментов, микробиом)</li>
              <li>Ресурсное состояние нервной системы и сон</li>
              <li>Дефицитарные состояния (витамины, микро и макро элементы, жирные кислоты, клетчатка, антиоксиданты)</li>
              <li>Здоровье кожи, волос и ногтей через внутреннюю коррекцию</li>
              <li>Иммунную систему и общую сопротивляемость организма (адаптационная терапия)</li>
              <li>Здоровье микробиома и кишечного барьера</li>
              <li>Работу метахондрий (энергия на клеточном уровне)</li>
              <li>Естественные ритмы организма (сон, движение)</li>
            </ul>
          </CollapsibleCard>
        </div>

        {/* Gallery Modals */}
        <CertificateGallery 
          images={universityAll} 
          isOpen={universityGalleryOpen} 
          onClose={() => setUniversityGalleryOpen(false)} 
        />
        <CertificateGallery 
          images={[medassCert]} 
          isOpen={medassGalleryOpen} 
          onClose={() => setMedassGalleryOpen(false)} 
        />
        <CertificateGallery 
          images={[preventMedCert]} 
          isOpen={preventMedGalleryOpen} 
          onClose={() => setPreventMedGalleryOpen(false)} 
        />

        {/* Action Cards Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: My Story */}
          <div className="bg-peach/10 border border-peach/20 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center lg:items-start justify-between gap-8 overflow-hidden relative group hover:border-peach/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-peach/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-peach/20 blur-3xl -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="relative z-10 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-3">Моя история</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Узнайте путь от пациента к дипломированному клиническому нутрициологу</p>
            </div>
            <div className="relative z-10 w-full lg:w-auto mt-auto">
              <Link to="/story">
                <Button variant="primary" className="w-full lg:w-auto px-10 h-14 text-base shadow-lg shadow-peach/20">Прочитать историю</Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Who is Nutritionist */}
          <div className="bg-turquoise-light/20 border border-turquoise-light/40 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center lg:items-start justify-between gap-8 overflow-hidden relative group hover:border-turquoise-dark/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-turquoise-light/10">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-turquoise-dark/10 blur-3xl -ml-20 -mb-20 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="relative z-10 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-3">Чем занимается нутрициолог?</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Чем этот специалист отличается от врача и как он помогает изменить вашу жизнь</p>
            </div>
            <div className="relative z-10 w-full lg:w-auto mt-auto">
              <Link to="/nutritionist">
                <Button variant="outline" className="w-full lg:w-auto px-10 h-14 text-base bg-white/50 backdrop-blur-sm border-turquoise-dark/30 text-turquoise-dark hover:bg-turquoise-dark hover:text-white transition-all">Узнать подробнее</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CollapsibleCard({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-turquoise-light rounded-2xl overflow-hidden bg-white hover:border-turquoise-dark/30 transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left group"
      >
        <span className="font-bold text-slate-800 text-lg group-hover:text-turquoise-dark transition-colors">{title}</span>
        <ChevronDown 
          className={`text-slate-400 group-hover:text-turquoise-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-turquoise-light/30 pt-4">
          {children}
        </div>
      </div>
    </div>
  );
}
