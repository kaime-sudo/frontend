import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/evenements', label: 'Événements' },
  { to: '/become-animator', label: 'Animateur' },
  { to: '/ressources', label: 'Ressources' },
  { to: '/contact', label: 'Contact' },
];

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
];

export default function Header() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('gfi:lang') || 'fr');

  useEffect(() => {
    localStorage.setItem('gfi:lang', language);
  }, [language]);

  useEffect(() => {
    setIsMenuOpen(false); // Fermer le menu après navigation (mobile)
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gfi-primary no-underline">
            GFI
            <br />
            <span className="text-sm font-normal text-slate-600">Groupe des Fresqueurs Ivoiriens</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="md:hidden text-slate-600 hover:text-gfi-primary focus:outline-none"
            aria-label="Menu principal"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <nav className="hidden md:flex items-center space-x-5">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-1 pb-1 font-medium transition ${
                    isActive
                      ? 'text-gfi-primary border-b-2 border-gfi-primary'
                      : 'text-slate-600 hover:text-gfi-primary border-b-2 border-transparent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="flex items-center gap-1">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 text-xs font-semibold rounded ${
                    language === lang.code ? 'bg-gfi-primary text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                  aria-label={`Langue : ${lang.label}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {user ? (
              <button
                onClick={logout}
                className="ml-2 rounded-full bg-gfi-secondary px-4 py-1.5 text-xs font-bold text-gfi-dark hover:bg-yellow-400 transition"
                aria-label="Déconnexion"
              >
                Déconnexion
              </button>
            ) : (
              <Link
                to="/login"
                className="ml-2 rounded-full bg-gfi-primary px-4 py-1.5 text-xs font-bold text-white hover:bg-blue-700 transition"
                aria-label="Connexion"
              >
                Connexion
              </Link>
            )}
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded font-medium ${isActive ? 'bg-gfi-light text-gfi-primary' : 'text-slate-600 hover:bg-slate-100'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="pt-3 border-t border-slate-200">
                <div className="flex gap-2 mb-3">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`px-3 py-1 text-xs font-semibold rounded ${
                        language === lang.code ? 'bg-gfi-primary text-white' : 'text-slate-600 bg-slate-200'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                {user ? (
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-gfi-dark bg-gfi-secondary rounded hover:bg-yellow-400"
                  >
                    Déconnexion
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="block w-full text-center px-3 py-2 text-sm font-medium text-white bg-gfi-primary rounded hover:bg-blue-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
