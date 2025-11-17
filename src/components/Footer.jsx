import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/evenements', label: 'Événements' },
  { to: '/become-animator', label: 'Animateur' },
  { to: '/ressources', label: 'Ressources' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gfi-dark text-white pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-2">Groupe des Fresqueurs Ivoiriens</h3>
            <p className="text-gfi-light/80">
              Ateliers citoyens pour comprendre le changement climatique en Côte d&apos;Ivoire et agir localement.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              {footerLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-gfi-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact & Partenaires</h3>
            <p className="text-gfi-light/80">
              contact@fresqueurs.ci<br />
              Abidjan, Côte d&apos;Ivoire
            </p>
            <p className="mt-2 text-gfi-secondary font-semibold">IRD, communautés locales, écoles</p>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gfi-light/70">© 2025 Fresqueurs CI. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
