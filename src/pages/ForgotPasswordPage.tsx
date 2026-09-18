import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '@/lib/api';
import Logo from '@/components/Logo';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await api.requestPasswordReset(email);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Грешка при изпращане');
    } finally {
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
          Забравена парола
        </h1>
        <p className="text-center text-neutral-500 text-sm mb-6">
          Въведете имейла си, за да получите линк за възстановяване
        </p>

        {sent ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-neutral-700 mb-2">
              Имейлът е изпратен успешно.
            </p>
            <p className="text-sm text-neutral-500 mb-6">
              Проверете пощата си за инструкции как да възстановите паролата си.
            </p>
            <Link to="/login" className="cta-button-secondary">
              Обратно към входа
            </Link>
          </div>
        ) : (
          <>
            {error && (
              <div className="mb-4 p-3 bg-error/10 border border-error/30 rounded text-error text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button
                type="submit"
                disabled={loading}
                className="cta-button w-full disabled:bg-neutral-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Изпращане...' : 'Изпрати линк за възстановяване'}
              </button>
            </form>

            <p className="text-center text-sm text-neutral-500 mt-6">
              <Link to="/login" className="text-brand-red hover:underline">
                Обратно към входа
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
