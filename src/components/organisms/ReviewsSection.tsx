import { Container } from '../atoms/Container';
import { SectionTitle } from '../atoms/SectionTitle';

export function ReviewsSection() {
  const reviews = [
    {
      name: 'Мария',
      result: 'Энергия +, Лёгкость',
      text: 'До Натальи я постоянно сидела на диетах. Вес уходил и возвращался. Сейчас я ем всё, но чувствую себя прекрасно: ушла тяжесть, появилось море энергии для спорта и семьи!'
    },
    {
      name: 'Елена',
      result: 'Спокойствие в еде',
      text: 'Самое главное достижение — ушло чувство вины после еды. Наталья научила меня слушать организм. Теперь походы в ресторан не вызывают панику.'
    },
    {
      name: 'Анна',
      result: 'ЖКТ в норме',
      text: 'Долгие годы мучилась от вздутия. После разбора рациона и внедрения рекомендаций, мой живот наконец-то плоский и ничего не болит.'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-turquoise-light/20">
      <Container>
        <SectionTitle subtitle="Это работает не только в теории.">
          Отзывы и результаты
        </SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-turquoise-light">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-beige-200 rounded-full flex items-center justify-center text-turquoise-dark font-bold text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{review.name}</h4>
                  <p className="text-sm text-turquoise-dark font-medium">{review.result}</p>
                </div>
              </div>
              <p className="text-slate-600 italic">«{review.text}»</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
