import Logo from './Logo';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 text-center py-12 px-8">
      <div className="mb-6 flex justify-center">
        <Logo />
      </div>
      <div className="footer-links mb-4">
        <Link
          to="/policy"
          className="text-neutral-600 mx-2 text-sm hover:text-brand-red transition-colors"
        >
          Общи условия
        </Link>
        <Link
          to="/privacy"
          className="text-neutral-600 mx-2 text-sm hover:text-brand-red transition-colors"
        >
          Политика за поверителност
        </Link>
      </div>
      <p className="text-sm text-neutral-500 m-0">
        &copy; 2025 fixed by Teodora Gateva Atelier. Всички права запазени.
      </p>
    </footer>
  );
}
