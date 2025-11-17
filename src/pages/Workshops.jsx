import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    fetch('/api/workshops')
      .then(r => r.json())
      .then(setWorkshops)
      .finally(() => setLoading(false));
  }, []);

  const handleRegister = async (id) => {
    if (!token) {
      alert('Veuillez vous connecter pour vous inscrire.');
      return;
    }

    const res = await fetch(`/api/workshops/${id}/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      alert('✅ Inscription confirmée !');
    } else {
      const err = await res.json();
      alert(`⚠️ ${err.error || "Échec de l'inscription"}`);
    }
  };

  if (loading) return <div className="text-center py-12 text-slate-600">Chargement...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gfi-primary mb-8">Prochains ateliers</h1>

      {workshops.length === 0 ? (
        <p className="text-slate-600">Aucun atelier prévu pour le moment. Revenez bientôt !</p>
      ) : (
        <div className="space-y-6">
          {workshops.map(workshop => (
            <div
              key={workshop.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">{workshop.title}</h2>
              <p className="text-gfi-primary font-medium mt-1">
                📅 {new Date(workshop.date).toLocaleDateString('fr-FR')} · 🕒{' '}
                {new Date(workshop.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
              </p>
              <p className="text-slate-600 mt-1">📍 {workshop.location}</p>
              <button
                onClick={() => handleRegister(workshop.id)}
                className="mt-4 rounded-full bg-gfi-secondary px-4 py-2 text-sm font-semibold text-gfi-dark transition hover:-translate-y-0.5"
              >
                S'inscrire
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
