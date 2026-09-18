import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '@/lib/api';
import Logo from '@/components/Logo';

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Паролите не съвпадат');
      return;
    }

    if (newPassword.length < 6) {
      setError('Паролата трябва да е поне 6 символа');
      return;
    }

    if (!token) {
      setError('Линкът за възстановяване е невалиден');
      return;
    }

    setLoading(true);
    try {
      await api.resetPassword(token, newPassword);
      navigate('/login');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Грешка при възстановяване');
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
          Нова парола
        </h1>
        <p className="text-center text-neutral-500 text-sm mb-6">
          Въведете новата си парола
        </p>

        {error && (
          <div className="mb-4 p-3 bg-error/10 border border-error/30 rounded text-error text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="block text-sm text-neutral-700 mb-1">
              Нова парола
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
            {loading ? 'Запазване...' : 'Запазете новата парола'}
          </button>
        </form>

        <p className="text-center text-sm text-neutral-500 mt-6">
          <Link to="/login" className="text-brand-red hover:underline">
            Обратно към входа
          </Link>
        </p>
      </div>
    </div>
  );
}
