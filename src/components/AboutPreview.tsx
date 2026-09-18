import { Link } from 'react-router-dom';
import { Scissors, Ruler, Truck, Award } from 'lucide-react';

const features = [
  {
    icon: Ruler,
    title: 'Прецизни мерки',
    description: 'Всяка корекция започва с точни измервания за перфектна стойка.',
  },
  {
    icon: Scissors,
    title: 'Занаятчийски подход',
    description: 'Всеки шев е изработен с внимание към най-малките детайли.',
  },
  {
    icon: Truck,
    title: 'Шивач на адрес',
    description: 'Ще Ви посетим в Пловдив и региона за мерки и проби.',
  },
  {
    icon: Award,
    title: 'Гарантия за качество',
    description: 'Гарантираме резултат, който отговаря на Вашите очаквания.',
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-content mx-auto">
        <h2 className="text-center text-3xl text-brand-red mb-2 font-serif">
          За fixed by Teodora Gateva
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
          Ателието съчетава класически шивашки традиции със съвременен подход,
          за да предложи услуги, които отговарят на нуждата на всяка фигура и
          всеки гардероб.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center p-6 rounded-lg border border-neutral-200 hover:border-brand-red transition-colors duration-300 hover:shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Icon className="text-brand-red" size={28} />
                  </div>
                </div>
                <h3 className="text-lg text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-600 m-0">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/about" className="cta-button">
            Научете повече
          </Link>
        </div>
      </div>
    </section>
  );
}
