import { Link } from 'react-router-dom';

export default function IndividualDesignPage() {
  return (
    <div className="bg-white">
      <section className="bg-neutral-100 py-16 px-4 sm:px-8 text-center">
        <div className="max-w-content mx-auto">
          <h1 className="text-4xl text-brand-red mb-4 font-serif">
            Индивидуален дизайн
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Създаваме уникални облекла за официални събития, сватби и специални
            поводи. Превръщаме Вашата идея в перфектно изработен гарнитур.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/8365189/pexels-photo-8365189.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Индивидуален дизайн"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl text-neutral-900 mb-4">Процесът</h2>
            <ol className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Консултация',
                  desc: 'Обсъждаме Вашата идея, повод и предпочитания за материя и силует.',
                },
                {
                  step: '2',
                  title: 'Скица и материали',
                  desc: 'Изготвяме скица и избираме подходящи материи за реализацията.',
                },
                {
                  step: '3',
                  title: 'Мерки и кройка',
                  desc: 'Вземаме точни мерки и изготвяме индивидуална кройка за Вашата фигура.',
                },
                {
                  step: '4',
                  title: 'Проби и финал',
                  desc: 'Правим проби за корекции и финализираме изделието до перфектен резултат.',
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600 m-0">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-12 px-4 text-center">
        <div className="max-w-content mx-auto">
          <h2 className="text-2xl text-neutral-900 mb-4">
            Имате идея? Да я реализираме.
          </h2>
          <Link to="/contact" className="cta-button">
            Свържете се с нас
          </Link>
        </div>
      </section>
    </div>
  );
}
