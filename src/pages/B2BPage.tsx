import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function B2BPage() {
  const services = [
    { title: 'Конструкция и моделиране', desc: 'Разработка на прецизни кройки по Ваша скица или техническо задание.' },
    { title: 'Изработка на мостри', desc: 'Ушиване на прототипи за уточняване на финалната визия преди старта на серийното производство.' },
    { title: 'Серийно ушиване', desc: 'Капацитет за изпълнение на малки и средни серии, както и на цели колекции.' },
    { title: 'Специфични проекти', desc: 'Гъвкави решения за нестандартни изделия и сложни конструкции.' },
    { title: 'Контрол на качеството', desc: 'Детайлна проверка на всяка бройка за коректно изпълнение и търговски вид.' },
  ];

  const advantages = [
    { title: 'Над 20 години опит', desc: 'Екип с дългогодишна практика в работата с разнообразни материи и технологии на шиене.' },
    { title: 'Коректно партньорство', desc: 'Ясна комуникация и точно спазване на договорените графици.' },
    { title: 'Търговски вид', desc: 'Внимание към детайла, което гарантира, че изделията са напълно готови за пазарна реализация.' },
  ];

  return (
    <div className="bg-white">
      <section className="bg-neutral-100 py-16 px-4 sm:px-8 text-center">
        <div className="max-w-content mx-auto">
          <h1 className="text-4xl text-brand-red mb-4 font-serif">
            Производство за модни брандове и дизайнери
            <br />
            <span className="text-2xl">(B2B/Ишлеме)</span>
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-content mx-auto">
          <h2 className="text-2xl text-neutral-900 mb-4">
            Цялостна реализация на модни линии. От идеята до пазара.
          </h2>
          <p className="text-neutral-600 mb-8">
            Teodora Gateva Atelier е Вашият производствен партньор за създаване на висококачествено облекло. Ние работим както с утвърдени брандове, така и със стартиращи дизайнери, като поемаме целия производствен цикъл. Гарантираме стриктно спазване на техническите изисквания, сроковете и високото ниво на изработка.
          </p>

          <h3 className="text-xl text-brand-red mt-10 mb-4">Нашите услуги:</h3>
          <ul className="space-y-3 mb-8">
            {services.map((s) => (
              <li key={s.title} className="flex gap-2 text-neutral-700">
                <span className="text-brand-red font-bold shrink-0">&#10003;</span>
                <span><strong>{s.title}:</strong> {s.desc}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl text-brand-red mt-10 mb-4">Защо да изберете нас?</h3>
          <ul className="space-y-3 mb-8">
            {advantages.map((a) => (
              <li key={a.title} className="flex gap-2 text-neutral-700">
                <span className="text-brand-red font-bold shrink-0">&#10003;</span>
                <span><strong>{a.title}:</strong> {a.desc}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-6 bg-neutral-50 border-l-4 border-brand-red">
            <p className="text-neutral-700 m-0">
              <strong>Свържете се с нас:</strong> Изпратете Вашето запитване чрез попълване на онлайн формата или се свържете с наш технолог на телефон{' '}
              <a href="tel:0886710201" className="text-brand-red font-bold hover:underline">088 671 0201</a>, за да обсъдим капацитета и сроковете за Вашата колекция.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="cta-button">Направете B2B запитване</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
