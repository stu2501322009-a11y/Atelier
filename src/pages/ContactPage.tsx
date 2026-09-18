import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTermsAccepted(false);
  };

  return (
    <div className="bg-white">
      <section className="bg-neutral-100 py-16 px-4 sm:px-8 text-center">
        <div className="max-w-content mx-auto">
          <h1 className="text-4xl text-brand-red mb-4 font-serif">
            Свържете се с нас
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Имате въпроси или искате да направите заявка?
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form side */}
          <div>
            {submitted ? (
              <div className="text-center p-12 bg-white border border-neutral-200 border-t-4 border-t-brand-red shadow-md rounded-lg animate-fade-up">
                <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="text-brand-red" size={40} />
                </div>
                <h3 className="font-script text-4xl text-brand-black mb-4">
                  Благодарим Ви!
                </h3>
                <p className="text-neutral-600 mb-2">
                  Запитването Ви е прието успешно.
                </p>
                <p className="text-neutral-600 mb-8">
                  Нашият екип ще го прегледа внимателно и ще Ви отговори в рамките на 24 часа.
                </p>
                <button
                  onClick={resetForm}
                  className="cta-button-secondary"
                >
                  Ново запитване
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl text-neutral-900 mb-6">
                  Изпратете ни запитване
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-neutral-700 mb-1">
                      Име и Фамилия
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded font-serif text-base focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-neutral-700 mb-1">
                      Имейл
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded font-serif text-base focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-neutral-700 mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded font-serif text-base focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-neutral-700 mb-1">
                      Вашето съобщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded font-serif text-base focus:outline-none focus:border-brand-red transition-colors resize-none"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      required
                      className="mt-1 shrink-0"
                    />
                    <label htmlFor="terms" className="text-sm text-neutral-600">
                      Съгласявам се с{' '}
                      <Link to="/policy" className="text-brand-red hover:underline" target="_blank">Общите условия</Link>{' '}
                      и{' '}
                      <Link to="/privacy" className="text-brand-red hover:underline" target="_blank">Политиката за поверителност</Link>{' '}
                      на сайта.
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="cta-button w-full disabled:bg-neutral-400 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Изпращане...' : 'Изпрати'}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info side */}
          <div>
            <h2 className="text-2xl text-neutral-900 mb-6">
              Информация за контакт
            </h2>
            <div className="space-y-6 text-neutral-700">
              <div>
                <strong className="block mb-1">Телефон:</strong>
                <p className="m-0">+359 88 671 0201</p>
                <p className="m-0">+359 88 496 5453</p>
              </div>
              <div>
                <strong className="block mb-1">Имейл:</strong>
                <p className="m-0">teodoragatevaatelier@gmail.com</p>
              </div>
              <div>
                <strong className="block mb-1">Работно време:</strong>
                <p className="m-0">Понеделник - Петък: 09:00 - 19:00</p>
                <p className="m-0">Събота: 10:00 - 15:00</p>
                <p className="m-0">Неделя: почивен ден</p>
              </div>
              <div>
                <strong className="block mb-1">Адрес:</strong>
                <p className="m-0">гр. Пловдив, ж.к. Христо Смирненски, ул. "Царевец" 53</p>
              </div>
            </div>

            <div className="mt-6 w-full rounded-lg overflow-hidden shadow-md hover:-translate-y-0.5 transition-transform duration-300">
              <iframe
                src="https://maps.google.com/maps?q=гр.+Пловдив,+ул.+Царевец+53&t=&z=16&ie=UTF8&iwloc=&output=embed"
                title="Карта - Пловдив, ул. Царевец 53"
                className="block w-full h-[250px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
