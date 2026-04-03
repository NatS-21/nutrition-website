import { useState, useEffect } from 'react';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import telegramIcon from '../../assets/socials/Telegram.svg';
import vkIcon from '../../assets/socials/Vk.svg';
import logo from '../../assets/logo/semynina-logo.svg';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Услуги', href: '#services' },
    { label: 'Обо мне', href: '#about' },
    { label: 'Как проходит работа', href: '#workflow' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-turquoise-light">
      <Container className="flex items-center justify-between h-20">
        <Link to="/" className="relative z-[60] block h-10">
          <img src={logo} alt="Наталья Семынина" className="h-full w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-600 hover:text-turquoise-dark font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button variant="primary" size="sm">Записаться на консультацию</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="xl:hidden text-turquoise-dark p-2 relative z-[60] transition-transform duration-300 active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </Container>

      {/* Full-screen Mobile Nav Overlay */}
      <div 
        className={`fixed top-0 left-0 w-full h-[100dvh] bg-white z-[100] xl:hidden flex flex-col transition-premium transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header inside menu */}
        <div className="flex items-center justify-between h-20 shrink-0 pl-6 sm:pl-10 pr-2">
          <Link to="/" className="h-10 block" onClick={() => setIsOpen(false)}>
             <img src={logo} alt="Наталья Семынина" className="h-full w-auto" />
          </Link>
          <button 
            className="text-turquoise-dark p-2 transition-transform duration-300 active:scale-110 hover:rotate-90"
            onClick={() => setIsOpen(false)}
            aria-label="Закрыть меню"
          >
            <X size={36} />
          </button>
        </div>

        {/* Background Decorative Elements */}
        <div className={`absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-turquoise-light/30 blur-[120px] rounded-full transition-all duration-[2000ms] ease-out pointer-events-none ${isOpen ? 'scale-110 opacity-100' : 'scale-75 opacity-0'}`} />
        
        <nav className="flex-1 flex flex-col items-center justify-center gap-10 px-6 text-center relative z-10">
          {navLinks.map((link, index) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`text-3xl font-bold text-slate-800 hover:text-turquoise-dark transition-premium transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          <div 
            className={`w-full max-w-xs mt-10 transition-premium transform ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${200 + navLinks.length * 80}ms` }}
          >
            <Button variant="primary" className="w-full text-xl py-5 shadow-2xl shadow-turquoise-dark/30">
              Записаться
            </Button>
          </div>
        </nav>

        {/* Footer info in menu */}
        <div 
          className={`flex flex-col items-center gap-4 p-10 border-t border-slate-100 transition-premium relative z-10 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${400 + navLinks.length * 80}ms` }}
        >
          <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold font-montserrat">Персональное сопровождение</span>
          <a href="tel:+70000000000" className="text-2xl font-bold text-turquoise-dark font-montserrat tracking-tight">+7 (900) 000-00-00</a>
          <div className="flex gap-8 mt-4">
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 active:scale-95 drop-shadow-sm">
              <img src={telegramIcon} alt="Telegram" className="w-10 h-10 brightness-0" />
            </a>
            <a href="https://vk.com/yourusername" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 active:scale-95 drop-shadow-sm">
              <img src={vkIcon} alt="VK" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
