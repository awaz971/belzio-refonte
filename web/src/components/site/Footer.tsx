import { Instagram, Linkedin, Mail } from "lucide-react";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Produit",
    links: [
      { label: "Comment ça marche", href: "#comment" },
      { label: "Sports", href: "#sports" },
      { label: "Fonctionnalités", href: "#app" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Communauté",
    links: [
      { label: "Organiser un match", href: "#telecharger" },
      { label: "Devenir ambassadeur", href: "mailto:hello@belzio.app" },
      { label: "Clubs & complexes", href: "mailto:hello@belzio.app" },
      { label: "Presse", href: "mailto:hello@belzio.app" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Conditions d'utilisation", href: "#" },
      { label: "Confidentialité", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Mentions légales", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-chalk/8 bg-[#080B09] pt-16">
      <div className="container">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M12 2c-3.6 0-6.5 2.9-6.5 6.5C5.5 13.4 12 22 12 22s6.5-8.6 6.5-13.5C18.5 4.9 15.6 2 12 2Z"
                    fill="hsl(var(--ink))"
                  />
                  <circle cx="12" cy="8.4" r="2.6" fill="hsl(var(--lime))" />
                </svg>
              </span>
              <span className="font-display text-2xl text-chalk">Belzio</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-chalk/45">
              L&apos;app qui transforme l&apos;envie de jouer en match réel. Foot, padel, basket et sports urbains,
              autour de toi.
            </p>
            <div className="mt-6 flex gap-2.5">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@belzio.app", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-chalk/12 text-chalk/60 transition-colors hover:border-lime hover:text-lime"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="font-mono-tag text-[10px] text-chalk/40">{column.title}</p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-chalk/60 transition-colors hover:text-lime">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-chalk/8 py-7 text-xs text-chalk/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Belzio. Tous droits réservés.</span>
          <span>Fait avec du terrain boueux et beaucoup de matchs du mardi soir.</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden text-center font-display text-[clamp(4rem,17vw,15rem)] leading-[0.75] text-chalk/[0.035]"
      >
        BELZIO
      </div>
    </footer>
  );
}
