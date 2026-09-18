import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-neutral-100 py-16 px-4 sm:px-8 text-center">
        <div className="max-w-content mx-auto">
          <h1 className="text-4xl text-brand-red mb-4 font-serif">За Нас</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Безупречна конструкция и техническо майсторство
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-content mx-auto">
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
            В <strong className="text-brand-red">Teodora Gateva Atelier</strong> създаваме облекло с безупречна конструкция, съобразена изцяло с индивидуалните особености на тялото. Вярваме, че добрата визия е резултат от прецизност, правилен подбор на материи и техническо майсторство.
          </p>

          <div className="bg-neutral-50 p-8 border-l-4 border-brand-red my-10">
            <h3 className="text-xl text-neutral-900 mt-0 mb-2">Опит и Експертиза</h3>
            <p className="text-neutral-600 m-0">
              Екипът ни притежава над 20 години професионален опит в конструирането и изработката на облекло. Познаваме в детайли характера на текстила, което гарантира високо качество при изпълнението на всеки проект. От корекции на любими дрехи до създаване на официални тоалети и изпълнение на бизнес поръчки.
            </p>
          </div>

          <h2 className="text-2xl text-neutral-900 mt-12 mb-4 text-left">
            Иновативен подход към Вашето време
          </h2>
          <p className="text-neutral-600 mb-6">
            Разбираме, че времето е ценен ресурс. Затова оптимизирахме стандартния модел на шивашкото ателие, за да Ви предложим максимално удобство. Предлагаме гъвкави решения спрямо графика Ви:
          </p>

          <ul className="space-y-3 mt-6">
            <li className="flex gap-2 text-neutral-700">
              <span className="text-brand-red font-bold shrink-0">&#10003;</span>
              <span><strong>Шивач на адрес:</strong> Наш специалист Ви посещава на място за вземане на мерки и консултация (за гр. Пловдив).</span>
            </li>
            <li className="flex gap-2 text-neutral-700">
              <span className="text-brand-red font-bold shrink-0">&#10003;</span>
              <span><strong>Дистанционно ателие:</strong> Удобна опция за работа чрез куриер от всяка точка на страната.</span>
            </li>
          </ul>

          <p className="text-neutral-600 mt-6">
            Този подход ви осигурява комфорт и гъвкавост, като същевременно гарантираме професионално изпълнение и лично отношение.
          </p>

          <div className="text-center mt-12">
            <Link to="/contact" className="cta-button">Свържете се с нас</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
