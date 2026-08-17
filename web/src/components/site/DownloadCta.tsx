import { useReveal } from "@/hooks/use-reveal";

import { StoreBadges } from "./StoreBadges";

export function DownloadCta() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="telecharger" className="relative px-4 pb-24 md:pb-32">
      <div
        ref={ref}
        className="reveal noise container relative isolate overflow-hidden rounded-5xl bg-lime px-6 py-16 md:px-14 md:py-24"
      >
        {/* Pitch markings */}
        <svg
          viewBox="0 0 1200 600"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
          aria-hidden="true"
        >
          <circle cx="600" cy="300" r="150" stroke="hsl(var(--ink))" strokeWidth="4" fill="none" />
          <line x1="600" y1="0" x2="600" y2="600" stroke="hsl(var(--ink))" strokeWidth="4" />
          <rect x="0" y="150" width="180" height="300" stroke="hsl(var(--ink))" strokeWidth="4" fill="none" />
          <rect x="1020" y="150" width="180" height="300" stroke="hsl(var(--ink))" strokeWidth="4" fill="none" />
        </svg>

        <div className="relative max-w-3xl">
          <span className="font-mono-tag text-[10px] text-ink/60">Prêt à jouer</span>
          <h2 className="mt-4 font-display text-[clamp(2.8rem,7.5vw,5.5rem)] text-ink">
            Ton prochain match
            <br />
            commence maintenant
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Télécharge Belzio, choisis ton sport et trouve une partie près de chez toi ce soir. Gratuit, sur iOS et
            Android.
          </p>

          <div className="mt-10">
            <StoreBadges variant="light" />
          </div>

          <p className="mt-6 text-sm text-ink/55">
            Aucun abonnement · Aucune carte bancaire · Désinstalle quand tu veux (mais tu ne le feras pas)
          </p>
        </div>

        <div className="pointer-events-none absolute -bottom-24 right-[-60px] hidden select-none font-display text-[16rem] leading-none text-ink/10 lg:block">
          BELZIO
        </div>
      </div>
    </section>
  );
}
