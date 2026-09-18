import { Scissors, Ruler, Truck, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceDetails = [
  {
    id: 'alterations',
    icon: Scissors,
    title: 'Корекции и вталяване',
    description:
      'Вталяване на панталони, поли, рокли, сака и дънки. Корекция на дължина, ширина, рамене и кройка за перфектна стойка.',
    items: ['Вталяване на дължина', 'Корекция на ширина', 'Прекрояване на рамене', 'Смяна на ципове и копчета'],
  },
  {
    id: 'plovdiv',
    icon: Truck,
    title: 'Шивач на адрес — Пловдив',
    description:
      'Наш шивач ще Ви посети в дома или офиса Ви в град Пловдив и региона, за да вземе мерки и дрехи за корекция.',
    items: ['Пловдив и околностите', 'Удобно за Вас време', 'Вземане на мерки на място', 'Доставка на готовите изделия'],
  },
  {
    id: 'home-textile',
    icon: Home,
    title: 'Интериорен текстил',
    description:
      'Изработка и корекции на пердета, завеси, покривала и други текстилни изделия за дома и офиса.',
    items: ['Пердета и завеси', 'Покривала за маса', 'Калъфки за възглавници', 'Корекции на дължина'],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-neutral-100 py-16 px-4 sm:px-8 text-center">
        <div className="max-w-content mx-auto">
          <h1 className="text-4xl text-brand-red mb-4 font-serif">Услуги</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            От прости корекции до сложни прекроявания — предлагаме пълна гама от
            шивашки услуги за личния гардероб и дома.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-content mx-auto space-y-16">
          {serviceDetails.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center scroll-mt-24"
              >
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Icon className="text-brand-red" size={40} />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-2xl text-neutral-900 mb-3">{service.title}</h2>
                  <p className="text-neutral-600 mb-4">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-neutral-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-neutral-100 py-12 px-4 text-center">
        <div className="max-w-content mx-auto">
          <h2 className="text-2xl text-neutral-900 mb-4">Готови да започнем?</h2>
          <Link to="/contact" className="cta-button">
            Заявете услуга
          </Link>
        </div>
      </section>
    </div>
  );
}
