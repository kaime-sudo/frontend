const steps = [
  {
    title: '1. Participer à un atelier',
    description: "Vivre l'expérience en tant que participant pour comprendre le déroulé.",
  },
  {
    title: '2. Formation animateur',
    description: 'Session de 3h30 pour maîtriser la posture et animer en autonomie.',
  },
  {
    title: '3. Mentorat GFI',
    description: "Accompagnement par un binôme d'animateurs expérimentés.",
  },
];

export default function BecomeAnimator() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Merci ! Nous t’écrirons dès que les prochaines dates seront disponibles.');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gfi-primary mb-6">Devenir animateur ou animatrice</h1>
      <p className="text-slate-600 mb-10">
        Rejoins la communauté d’animateurs Fresqueurs CI et fais vivre des ateliers dans ton école, ton entreprise ou
        ton quartier.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map(step => (
          <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-gfi-secondary">{step.title}</p>
            <p className="mt-3 text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-2xl bg-gfi-light p-6">
        <p className="font-semibold text-gfi-primary">Intéressé·e ?</p>
        <p className="text-slate-600">
          Écris à{' '}
          <a className="font-semibold underline" href="mailto:contact@fresqueurs.ci">
            contact@fresqueurs.ci
          </a>{' '}
          pour recevoir les prochaines dates de formation en Côte d&apos;Ivoire.
        </p>
      </div>

      <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom & prénom" className="w-full rounded border px-3 py-2" required />
        <input type="email" placeholder="Email" className="w-full rounded border px-3 py-2" required />
        <button type="submit" className="w-full rounded bg-gfi-secondary px-4 py-2 font-semibold text-gfi-dark">
          Recevoir les dates de formation
        </button>
      </form>
    </div>
  );
}
