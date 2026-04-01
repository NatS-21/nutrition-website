import { useState } from 'react';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Услуги', href: '#services' },
    { label: 'Обо мне', href: '#about' },
    { label: 'Как проходит работа', href: '#workflow' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-mint-light">
      <Container className="flex items-center justify-between h-20">
        <div className="text-2xl font-black text-pantone tracking-wider">
          НАТАЛЬЯ
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-600 hover:text-pantone font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button variant="primary" size="sm">Записаться на консультацию</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="xl:hidden text-slate-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-mint-light absolute top-20 left-0 right-0 p-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-lg text-slate-600 hover:text-pantone font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" className="w-full mt-4">Записаться на консультацию</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
