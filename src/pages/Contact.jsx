export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gfi-primary mb-6">Contact</h1>
      <p className="text-slate-600 mb-8">
        Une question sur les ateliers, une envie de partenariat ou de formation ? Nous répondons sous 48&nbsp;h.
      </p>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-slate-500">Email</p>
          <a className="text-lg font-semibold text-gfi-primary" href="mailto:contact@fresqueurs.ci">
            contact@fresqueurs.ci
          </a>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-slate-500">Adresse</p>
          <p className="text-lg font-semibold text-gfi-primary">Abidjan, Côte d&apos;Ivoire</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-slate-500">Réseaux</p>
          <p className="text-slate-600">Slack Fresqueurs CI, LinkedIn, WhatsApp communautaire</p>
        </div>
      </div>
    </div>
  );
}
