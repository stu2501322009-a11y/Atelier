import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryCard {
  title: string;
  slides: { before: string; after: string; label: string }[];
  description: string;
}

const galleryCards: GalleryCard[] = [
  {
    title: 'Корекция на панталон',
    description: 'Стесняване на панталон откъм талията с 4 см и коригиране на дължина с 3см.',
    slides: [
      {
        before: 'https://images.pexels.com/photos/47040/meter-tape-measure-measure-gage-47040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/35238345/pexels-photo-35238345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Отпред',
      },
      {
        before: 'https://images.pexels.com/photos/9302046/pexels-photo-9302046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/38561617/pexels-photo-38561617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Отзад',
      },
      {
        before: 'https://images.pexels.com/photos/36799021/pexels-photo-36799021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/14852082/pexels-photo-14852082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Отстрани',
      },
    ],
  },
  {
    title: 'Корекция на палто',
    description: 'Коригиране на усукан ръкав на палто.',
    slides: [
      {
        before: 'https://images.pexels.com/photos/18993419/pexels-photo-18993419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/39282336/pexels-photo-39282336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Отпред',
      },
      {
        before: 'https://images.pexels.com/photos/3613388/pexels-photo-3613388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/4398944/pexels-photo-4398944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Ръкав',
      },
      {
        before: 'https://images.pexels.com/photos/38652622/pexels-photo-38652622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/27516984/pexels-photo-27516984.png?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Ръкав детайл',
      },
    ],
  },
  {
    title: 'Корекция на дънки',
    description: 'Коригиране на подгъв на дънки. От външен видим подгъв към подгъв с пикир.',
    slides: [
      {
        before: 'https://images.pexels.com/photos/47040/meter-tape-measure-measure-gage-47040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/35238345/pexels-photo-35238345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Отпред',
      },
      {
        before: 'https://images.pexels.com/photos/36799021/pexels-photo-36799021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/14852082/pexels-photo-14852082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Подгъв',
      },
    ],
  },
  {
    title: 'Стесняване на прав панталон',
    description: 'Стесняване на прав панталон с 2 см откъм талията.',
    slides: [
      {
        before: 'https://images.pexels.com/photos/9302046/pexels-photo-9302046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/38561617/pexels-photo-38561617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Отпред',
      },
      {
        before: 'https://images.pexels.com/photos/47040/meter-tape-measure-measure-gage-47040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/35238345/pexels-photo-35238345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Отзад',
      },
    ],
  },
  {
    title: 'Корекция на рокля',
    description: 'Вталяване и коригиране на дължина на официална рокля.',
    slides: [
      {
        before: 'https://images.pexels.com/photos/8365189/pexels-photo-8365189.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/8365152/pexels-photo-8365152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Отпред',
      },
      {
        before: 'https://images.pexels.com/photos/13055401/pexels-photo-13055401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/12081900/pexels-photo-12081900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Детайл',
      },
      {
        before: 'https://images.pexels.com/photos/13430016/pexels-photo-13430016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/29627099/pexels-photo-29627099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Отстрани',
      },
    ],
  },
  {
    title: 'Корекция на покривка',
    description: 'Коригиране на размер и подгъв на покривка за маса.',
    slides: [
      {
        before: 'https://images.pexels.com/photos/34131689/pexels-photo-34131689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        after: 'https://images.pexels.com/photos/8850650/pexels-photo-8850650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        label: 'Сравнение',
      },
    ],
  },
];

function GalleryCardItem({ card }: { card: GalleryCard }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const nextSlide = () => {
    if (currentSlide < card.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = card.slides[currentSlide];

  return (
    <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3 p-4 border-b border-neutral-100">
        <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-serif text-lg">
          f
        </div>
        <h3 className="text-lg text-neutral-900 m-0">{card.title}</h3>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {card.slides.map((s, i) => (
            <div key={i} className="flex shrink-0 w-full">
              <div
                className="relative w-1/2 cursor-pointer group"
                onClick={() => setLightboxImage(s.before)}
              >
                <img
                  src={s.before}
                  alt={`Преди ${s.label}`}
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
                <span className="absolute top-2 left-2 bg-brand-red text-white text-xs px-2 py-0.5 rounded">
                  Преди
                </span>
              </div>
              <div
                className="relative w-1/2 cursor-pointer group"
                onClick={() => setLightboxImage(s.after)}
              >
                <img
                  src={s.after}
                  alt={`След ${s.label}`}
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
                <span className="absolute top-2 left-2 bg-brand-black text-white text-xs px-2 py-0.5 rounded">
                  След
                </span>
              </div>
            </div>
          ))}
        </div>

        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow-md hover:bg-brand-red hover:text-white transition-colors duration-300"
            aria-label="Предишна"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {currentSlide < card.slides.length - 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow-md hover:bg-brand-red hover:text-white transition-colors duration-300"
            aria-label="Следваща"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {card.slides.length > 1 && (
        <div className="flex justify-center gap-1.5 py-3">
          {card.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === currentSlide ? 'bg-brand-red' : 'bg-neutral-300'
              }`}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="p-4 border-t border-neutral-100">
        <p className="text-sm text-neutral-600 m-0">{card.description}</p>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setLightboxImage(null)}
            aria-label="Затвори"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Увеличена снимка"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <section className="bg-neutral-100 py-16 px-4 sm:px-8 text-center">
        <div className="max-w-content mx-auto">
          <h1 className="text-4xl text-brand-red mb-4 font-serif">Галерия</h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-wide mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryCards.map((card) => (
            <GalleryCardItem key={card.title} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}
