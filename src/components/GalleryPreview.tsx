import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gallerySlides } from '@/data/content';

export default function GalleryPreview() {
  const [current, setCurrent] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const next = () => {
    setCurrent((prev) => (prev + 1) % gallerySlides.length);
    setShowBefore(true);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
    setShowBefore(true);
  };

  const slide = gallerySlides[current];

  return (
    <section className="bg-neutral-100 py-16 px-4 sm:px-8">
      <div className="max-w-content mx-auto">
        <h2 className="text-center text-3xl text-brand-red mb-2 font-serif">
          Преди и след
        </h2>
        <p className="text-center text-neutral-600 mb-8">
          Вижте разликата, която професионалната изработка прави.
        </p>

        <div className="relative max-w-2xl mx-auto">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <img
              src={showBefore ? slide.beforeImage : slide.afterImage}
              alt={`${slide.title} - ${showBefore ? 'преди' : 'след'}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <span className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 text-sm uppercase rounded">
              {showBefore ? 'Преди' : 'След'}
            </span>
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 border border-neutral-300 rounded-full p-2 shadow-md hover:bg-brand-red hover:text-white transition-colors duration-300"
            aria-label="Предишна"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 border border-neutral-300 rounded-full p-2 shadow-md hover:bg-brand-red hover:text-white transition-colors duration-300"
            aria-label="Следваща"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-neutral-700 mb-3">{slide.title}</p>
          <button
            onClick={() => setShowBefore(!showBefore)}
            className="cta-button-secondary text-sm py-2 px-6"
          >
            {showBefore ? 'Вижте след' : 'Вижте преди'}
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {gallerySlides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setShowBefore(true);
              }}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === current ? 'bg-brand-red' : 'bg-neutral-300'
              }`}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
