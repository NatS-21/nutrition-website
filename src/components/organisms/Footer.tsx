import { Container } from '../atoms/Container';

export function Footer() {
  return (
    <footer id="contacts" className="bg-mint-darker text-white/80 py-12">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 border-b border-white/10 pb-8">
          <div>
            <div className="text-2xl font-black text-white tracking-wider mb-4">
              НАТАЛЬЯ
            </div>
            <p className="text-sm mb-4">
              Индивидуальные консультации нутрициолога онлайн.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-peach transition-colors">Услуги</a></li>
              <li><a href="#about" className="hover:text-peach transition-colors">Обо мне</a></li>
              <li><a href="#workflow" className="hover:text-peach transition-colors">Формат</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>Telegram: <a href="https://t.me/katerina_foodhealth_kanal" className="hover:text-peach transition-colors">@katerina_foodhealth_kanal</a></li>
              <li>Email: hello@example.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Соцсети</h4>
            <ul className="space-y-2 text-sm flex flex-col">
              <a href="https://t.me/katerina_foodhealth_kanal" target="_blank" rel="noreferrer" className="hover:text-peach transition-colors">Telegram-канал</a>
              <a href="https://vk.com/id333099678" target="_blank" rel="noreferrer" className="hover:text-peach transition-colors">Вконтакте</a>
              <a href="https://vk.com/id333099678" target="_blank" rel="noreferrer" className="hover:text-peach transition-colors">Max</a>
            </ul>
          </div>
        </div>
        
        <div className="text-sm text-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Наталья. Все права защищены.</p>
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
        </div>
      </Container>
    </footer>
  );
}
