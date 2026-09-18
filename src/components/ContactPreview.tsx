import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPreview() {
  return (
    <section className="bg-neutral-900 text-white py-16 px-4 sm:px-8">
      <div className="max-w-content mx-auto">
        <h2 className="text-center text-3xl text-white mb-2 font-serif">
          Свържете се с нас
        </h2>
        <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
          Готови сме да обсъдим Вашия проект. Свържете се по най-удобния за Вас
          начин.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <MapPin className="mx-auto mb-3 text-brand-red-light" size={28} />
            <h3 className="text-white mb-1">Адрес</h3>
            <p className="text-neutral-400 text-sm m-0">Пловдив, България</p>
          </div>
          <div>
            <Phone className="mx-auto mb-3 text-brand-red-light" size={28} />
            <h3 className="text-white mb-1">Телефон</h3>
            <p className="text-neutral-400 text-sm m-0">+359 XX XXX XXX</p>
          </div>
          <div>
            <Mail className="mx-auto mb-3 text-brand-red-light" size={28} />
            <h3 className="text-white mb-1">Имейл</h3>
            <p className="text-neutral-400 text-sm m-0">atelier@fixed.bg</p>
          </div>
          <div>
            <Clock className="mx-auto mb-3 text-brand-red-light" size={28} />
            <h3 className="text-white mb-1">Работно време</h3>
            <p className="text-neutral-400 text-sm m-0">Пн–Сб: 9:00–18:00</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-block bg-brand-red text-white px-8 py-3 uppercase font-serif rounded transition-all duration-300 hover:bg-white hover:text-brand-black"
          >
            Изпратете съобщение
          </Link>
        </div>
      </div>
    </section>
  );
}
