import { Link } from 'react-router-dom';
import type { ServiceCard } from '@/data/content';

export default function ServiceCardItem({ service }: { service: ServiceCard }) {
  return (
    <div className="flex flex-col bg-white border border-neutral-200 rounded shadow-sm hover:-translate-y-1.5 transition-transform duration-300 group">
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex flex-col justify-center items-center text-center p-2">
          <h3 className="text-white text-lg md:text-xl mb-2 drop-shadow-md break-words">
            {service.title}
          </h3>
          <p className="text-neutral-100 text-sm leading-snug drop-shadow-sm m-0">
            {service.description}
          </p>
        </div>
      </div>
      <div className="p-4 bg-white text-center border-t border-neutral-200">
        <Link
          to={service.link}
          className="cta-button-secondary w-full block text-center text-sm py-2.5 px-4"
        >
          Вижте детайли
        </Link>
      </div>
    </div>
  );
}
