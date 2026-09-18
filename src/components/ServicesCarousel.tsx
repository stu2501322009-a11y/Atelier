import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCardItem from './ServiceCardItem';
import { services } from '@/data/content';

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.querySelector('article')?.clientWidth ?? 280;
    const gap = 16;
    const directionMultiplier = direction === 'left' ? -1 : 1;
    track.scrollBy({
      left: directionMultiplier * (cardWidth + gap),
      behavior: 'smooth',
    });
    setIndex((prev) =>
      direction === 'left'
        ? Math.max(0, prev - 1)
        : Math.min(services.length - 1, prev + 1)
    );
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-wide mx-auto">
        <h2 className="text-center text-3xl text-brand-red mb-2 font-serif">
          Нашите услуги
        </h2>
        <p className="text-center text-neutral-600 mb-8 max-w-2xl mx-auto">
          От индивидуални корекции до пълноценно производство на модни линии —
          всичко на едно място.
        </p>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="snap-center shrink-0 w-[280px] sm:w-[320px]"
              >
                <ServiceCardItem service={service} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-neutral-300 rounded-full p-2 shadow-md hover:bg-brand-red hover:text-white transition-colors duration-300 z-10 hidden sm:block"
            aria-label="Предишна"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-neutral-300 rounded-full p-2 shadow-md hover:bg-brand-red hover:text-white transition-colors duration-300 z-10 hidden sm:block"
            aria-label="Следваща"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {services.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === index ? 'bg-brand-red' : 'bg-neutral-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
