import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function HowToMeasurePage() {
  return (
    <div className="bg-white">
      <section className="bg-neutral-100 py-16 px-4 sm:px-8 text-center">
        <div className="max-w-content mx-auto">
          <h1 className="text-4xl text-brand-red mb-4 font-serif">
            Как да вземем мерки?
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Следвайте тези лесни стъпки, за да сте сигурни в перфектния резултат.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-content mx-auto">
          <h2 className="text-2xl text-neutral-900 mb-4">
            Как да опишете желаната корекция
          </h2>
          <p className="text-neutral-600 mb-6">
            Когато ни изпращате дреха, е важно да сте максимално ясни. Например:
          </p>

          <blockquote className="border-l-4 border-brand-red bg-neutral-50 p-4 mb-4 text-neutral-700 italic">
            <strong>Пример 1 (Дънки):</strong> "Дънките са ми широки в талията. Искам да се стеснят с 3 см. Също така, крачолите са ми дълги. Искам да се скъсят с 5 см, като се запази оригиналният подгъв."
          </blockquote>
          <blockquote className="border-l-4 border-brand-red bg-neutral-50 p-4 mb-4 text-neutral-700 italic">
            <strong>Пример 2 (Сако):</strong> "Ръкавите на сакото са ми дълги. Искам да се скъсят с 2 см от рамото."
          </blockquote>
          <p className="text-neutral-600 mb-8">
            Можете да използвате карфици, за да отбележите желаната дължина или ширина, или просто да опишете с думи и сантиметри.
          </p>

          <hr className="border-neutral-200 my-8" />

          <h2 className="text-2xl text-neutral-900 mb-6">Видео Инструкции</h2>

          <h3 className="text-xl text-neutral-900 mb-4">Корекция на Панталони и Дънки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="w-full aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-neutral-500">
                <Play size={48} className="mx-auto mb-2" />
                <span className="text-lg">Видео Инструкция</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg text-neutral-900 mb-3">Инструкции (Текст):</h4>
              <ul className="space-y-3">
                <li className="text-sm text-neutral-600">
                  <strong>За скъсяване (Дължина):</strong> Облечете панталона с обувките, с които ще го носите. Прегънете крачола до желаната дължина. Измерете колко сантиметра е излишната материя.
                </li>
                <li className="text-sm text-neutral-600">
                  <strong>За стесняване (Талия):</strong> Облечете панталона. Захванете излишната материя на гърба (или отстрани), докато панталонът прилепне удобно. Измерете захванатото количество плат.
                </li>
                <li className="text-sm text-neutral-600">
                  <strong>За стесняване (Крачоли):</strong> Отбележете с карфици колко по-тесен искате да бъде крачолът и в коя част (бедро, коляно, глезен).
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-neutral-200 my-8" />

          <h3 className="text-xl text-neutral-900 mb-4">Корекция на Ризи и Блузи</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="w-full aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-neutral-500">
                <Play size={48} className="mx-auto mb-2" />
                <span className="text-lg">Видео Инструкция</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg text-neutral-900 mb-3">Инструкции (Текст):</h4>
              <ul className="space-y-3">
                <li className="text-sm text-neutral-600">
                  <strong>За скъсяване (Ръкави):</strong> Измерете от ръба на ръкава до точката, до която искате да бъде скъсен.
                </li>
                <li className="text-sm text-neutral-600">
                  <strong>За вталяване:</strong> Облечете ризата. Помолете някой да захване излишната материя на гърба равномерно от двете страни. Измерете общо колко сантиметра са захванати.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="cta-button">Готови ли сте? Направете заявка</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
