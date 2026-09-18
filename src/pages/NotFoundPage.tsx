import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-24 px-4 text-center">
      <h1 className="text-6xl text-brand-red font-serif mb-4">404</h1>
      <p className="text-neutral-600 mb-8">
        Страницата, която търсите, не е намерена.
      </p>
      <Link to="/" className="cta-button">
        Към началната страница
      </Link>
    </div>
  );
}
