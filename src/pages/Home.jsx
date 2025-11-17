import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: '💡',
    title: 'Pédagogique',
    description: 'Des ateliers conçus pour rendre la science du climat claire et actionnable.',
  },
  {
    icon: '🤝',
    title: 'Collaboratif',
    description: 'On apprend ensemble, en reliant expériences locales et enjeux mondiaux.',
  },
  {
    icon: '🌍',
    title: 'Scientifique',
    description: 'Basé sur les travaux du GIEC, mis à jour avec des données locales.',
  },
];

const gallery = [
  { src: '/images/fresque-ufhb.svg', alt: "Atelier à l'UFHB" },
  { src: '/images/fresque-journee-carriere.svg', alt: 'Journée carrière' },
  { src: '/images/cartes-climat.svg', alt: 'Cartes du climat' },
];

const events = [
  { date: '24 janv 2026', place: 'UFHB, Abidjan', type: 'Atelier étudiants' },
  { date: '25 fév 2026', place: 'UJLoG, Daloa', type: 'Clubs climat' },
  { date: '12 mars 2026', place: 'IRD, Bingerville', type: 'Session ouverte' },
];

export default function Home() {
  return (
    <main>
      <section className="bg-gfi-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gfi-secondary">Fresqueurs CI</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Comprendre le climat, ensemble, en Côte d&apos;Ivoire
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto">
            Participe à un atelier collaboratif pour décrypter les mécanismes du changement climatique et imaginer les
            solutions adaptées à nos réalités locales.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/evenements"
              className="inline-block rounded-full bg-gfi-secondary px-6 py-3 font-semibold text-gfi-dark shadow-md transition hover:-translate-y-0.5 hover:bg-yellow-400"
            >
              Voir les prochains ateliers
            </Link>
            <Link
              to="/ressources"
              className="inline-block rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Découvrir la Fresque
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gfi-primary mb-4">Qu&apos;est-ce que la Fresque ?</h2>
            <p className="text-slate-600">
              En 3 heures, nous recréons ensemble la chaîne des causes et conséquences du changement climatique.
              Résultat : un déclic et des pistes d’action pour chacun.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4 items-center">
            <div className="grid order-2 gap-4 sm:grid-cols-3 md:col-span-3 md:order-1">
              {pillars.map(pillar => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                >
                  <div className="text-3xl">{pillar.icon}</div>
                  <div className="mt-3 font-semibold text-gfi-primary">{pillar.title}</div>
                  <p className="text-sm text-slate-500 mt-2">{pillar.description}</p>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/images/carte-ivoire.svg"
                alt="Carte stylisée de la Côte d'Ivoire"
                className="rounded-2xl shadow-lg ring-1 ring-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gfi-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gfi-primary mb-4">Témoignages & Photos</h2>
            <p className="text-slate-600">Des ateliers dans les écoles, universités et entreprises ivoiriennes.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            {gallery.map(image => (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="h-48 rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
              />
            ))}
          </div>
          <blockquote className="max-w-3xl mx-auto text-center text-lg text-slate-700 italic">
            “J&apos;ai enfin compris les liens entre nos actions quotidiennes et les dérèglements observés. Maintenant
            je peux l&apos;expliquer autour de moi.” – Awa, étudiante
          </blockquote>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gfi-primary mb-8">Prochains ateliers</h2>
          <ul className="mx-auto mb-8 max-w-xl space-y-4 text-left">
            {events.map(event => (
              <li
                key={event.date + event.place}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-lg font-semibold text-gfi-primary">{event.date}</p>
                  <p className="text-slate-600">{event.place}</p>
                </div>
                <span className="mt-2 inline-flex rounded-full bg-gfi-light px-3 py-1 text-sm font-semibold text-gfi-primary sm:mt-0">
                  {event.type}
                </span>
              </li>
            ))}
          </ul>
          <Link to="/evenements" className="text-gfi-primary font-semibold">
            Voir tout le calendrier →
          </Link>
        </div>
      </section>
    </main>
  );
}
