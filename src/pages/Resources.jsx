const resources = [
  {
    title: 'Introduction à la Fresque du Climat',
    description: 'Comprendre la méthode, l’histoire et les impacts.',
    link: 'https://fresqueduclimat.org',
  },
  {
    title: 'Kit animateur Fresqueurs CI',
    description: 'Tous les supports francophones et les visuels adaptés à la Côte d’Ivoire.',
    link: '#',
  },
  {
    title: 'Données locales sur le climat',
    description: 'Travaux IRD, GIEC et études académiques sur l’Afrique de l’Ouest.',
    link: '#',
  },
];

export default function Resources() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gfi-primary mb-6">Ressources</h1>
      <p className="text-slate-600 mb-8">
        Sélection de ressources pour approfondir la compréhension du climat et animer des ateliers locaux.
      </p>
      <div className="space-y-4">
        {resources.map(resource => (
          <article key={resource.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-gfi-primary">{resource.title}</h2>
            <p className="mt-2 text-slate-600">{resource.description}</p>
            <a href={resource.link} className="mt-3 inline-block text-gfi-primary font-semibold">
              Consulter →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
