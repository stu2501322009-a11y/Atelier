import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Logo from '@/components/Logo';

export default function SignupPage() {
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Паролите не съвпадат');
      return;
    }

    if (password.length < 6) {
      setError('Паролата трябва да е поне 6 символа');
      return;
    }

    setLoading(true);
    try {
      await signup(name, email, password);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Грешка при регистрация');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      const googleClient = (window as unknown as { google?: { accounts: { id: { initialize: (config: unknown) => void; prompt: () => void } } } }).google;
      if (!googleClient) {
        setError('Google входът не е наличен в момента');
        setLoading(false);
        return;
      }

      googleClient.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
        callback: async (response: { credential: string }) => {
          try {
            await loginWithGoogle(response.credential);
            navigate('/');
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Грешка при Google вход');
          } finally {
            setLoading(false);
          }
        },
      });
      googleClient.accounts.id.prompt();
    } catch {
      setError('Google входът не е наличен');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>

        <h1 className="text-2xl text-center text-brand-red font-serif mb-2">
          Регистрация
        </h1>
        <p className="text-center text-neutral-500 text-sm mb-6">
          Създайте профил, за да управлявате заявките си
        </p>

        {error && (
          <div className="mb-4 p-3 bg-error/10 border border-error/30 rounded text-error text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-neutral-700 mb-1">
              Име и фамилия
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:border-brand-red transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-neutral-700 mb-1">
              Имейл
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:border-brand-red transition-colors"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-neutral-700 mb-1">
              Парола
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:border-brand-red transition-colors"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm text-neutral-700 mb-1">
              Потвърдете парола
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:border-brand-red transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="cta-button w-full disabled:bg-neutral-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Регистриране...' : 'Регистрирайте се'}
          </button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="flex-1 h-px bg-neutral-200" />
          <span className="text-sm text-neutral-400">или</span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 border border-neutral-300 rounded px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors disabled:opacity-50"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Регистрирайте се с Google
        </button>

        <p className="text-center text-sm text-neutral-500 mt-6">
          Имате профил?{' '}
          <Link to="/login" className="text-brand-red hover:underline">
            Влезте
          </Link>
        </p>
      </div>
    </div>
  );
}
