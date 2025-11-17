import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    const { ok, data } = await register(name, email, password);
    if (!ok) {
      setError(data?.error || "Erreur lors de l'inscription");
    } else {
      alert('Inscription réussie ! Vous pouvez vous connecter.');
      navigate('/login');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 rounded-2xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold text-gfi-primary mb-6">Créer un compte</h2>
      {error && <div className="mb-4 rounded bg-red-100 p-2 text-red-700">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-600" htmlFor="name">
            Nom & prénom
          </label>
          <input
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full rounded border border-slate-200 px-3 py-2 focus:border-gfi-primary focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-600" htmlFor="reg-email">
            Email
          </label>
          <input
            id="reg-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded border border-slate-200 px-3 py-2 focus:border-gfi-primary focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-600" htmlFor="reg-password">
            Mot de passe (8 caractères minimum)
          </label>
          <input
            id="reg-password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full rounded border border-slate-200 px-3 py-2 focus:border-gfi-primary focus:outline-none"
            required
          />
        </div>
        <button type="submit" className="w-full rounded-full bg-gfi-secondary py-2 font-semibold text-gfi-dark">
          S'inscrire
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-slate-600">
        Déjà inscrit ?{' '}
        <a href="/login" className="font-semibold text-gfi-primary hover:underline">
          Se connecter
        </a>
      </p>
    </div>
  );
}
