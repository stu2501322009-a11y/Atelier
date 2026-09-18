import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, LogOut, User } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '@/data/content';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const renderAuthButtons = () => {
    if (user) {
      return (
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1.5 text-sm text-neutral-600">
            <User size={16} />
            {user.name || user.email}
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-sm text-neutral-700 hover:text-brand-red transition-colors"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Изход</span>
          </button>
        </div>
      );
    }
    return (
      <Link
        to="/login"
        className="flex items-center gap-1.5 text-sm text-neutral-700 hover:text-brand-red transition-colors"
      >
        <LogIn size={16} />
        <span>Вход</span>
      </Link>
    );
  };

  return (
    <header
      className={`bg-white border-b border-neutral-200 sticky top-0 z-50 transition-transform duration-300 ${
        scrolled && !menuOpen ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-wide mx-auto">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-serif uppercase text-sm pb-1 border-b-2 transition-all duration-300 ${
                      isActive
                        ? 'text-brand-red border-brand-red'
                        : 'text-neutral-800 border-transparent hover:text-brand-red hover:border-brand-red'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="ml-2 pl-4 border-l border-neutral-200">
              {renderAuthButtons()}
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="md:hidden">{renderAuthButtons()}</div>
          <button
            className="md:hidden text-brand-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-neutral-200 animate-fade-in">
          <ul className="flex flex-col items-center py-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-serif uppercase text-sm pb-1 border-b-2 transition-all duration-300 ${
                      isActive
                        ? 'text-brand-red border-brand-red'
                        : 'text-neutral-800 border-transparent'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
