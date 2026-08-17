import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { IMAGES } from "@/lib/assets";
import { cn } from "@/lib/utils";

type Sport = {
  id: string;
  label: string;
  formats: string;
  headline: string;
  copy: string;
  image: string;
  accent: string;
  stat: string;
  statLabel: string;
};

const SPORTS: Sport[] = [
  {
    id: "foot",
    label: "Foot",
    formats: "5v5 · 7v7 · Futsal",
    headline: "Un 5v5 ce soir, sans chercher 9 potes",
    copy: "Les city stades et complexes autour de toi, avec les créneaux réellement disponibles. Arrive seul ou avec ton équipe : Belzio complète les places manquantes.",
    image: IMAGES.foot,
    accent: "hsl(var(--lime))",
    stat: "68%",
    statLabel: "des matchs complets en moins de 3 h",
  },
  {
    id: "padel",
    label: "Padel",
    formats: "Double · Mixte",
    headline: "Il te manque un quatrième ? Il est déjà là",
    copy: "Publie ton créneau réservé, indique le niveau souhaité et laisse les joueurs du coin compléter la partie. Fini les annulations de dernière minute.",
    image: IMAGES.padel,
    accent: "hsl(var(--ice))",
    stat: "1 439",
    statLabel: "parties de padel complétées ce mois-ci",
  },
  {
    id: "basket",
    label: "Basket",
    formats: "3v3 · 5v5 · Playground",
    headline: "Le playground le plus proche, en live",
    copy: "Vois qui est déjà sur le terrain, le niveau annoncé et rejoins la run. Les runs récurrentes te notifient dès qu'une place se libère.",
    image: IMAGES.basket,
    accent: "hsl(var(--flame))",
    stat: "24",
    statLabel: "playgrounds actifs par grande ville",
  },
  {
    id: "urbain",
    label: "Urbain",
    formats: "Running · Cross · Vélo",
    headline: "Ne cours plus jamais seul",
    copy: "Sorties running, séances cross training, rides en groupe : rejoins des crews qui partent à ton allure, à côté de chez toi.",
    image: IMAGES.urbain,
    accent: "hsl(var(--amber))",
    stat: "3×",
    statLabel: "plus de régularité en groupe",
  },
];

export function Sports() {
  const [activeId, setActiveId] = useState<string>(SPORTS[0].id);
  const headingRef = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();

  const active: Sport = SPORTS.find((sport) => sport.id === activeId) ?? SPORTS[0];

  return (
    <section id="sports" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-[140px] transition-colors duration-700"
        style={{ background: `color-mix(in srgb, ${active.accent} 14%, transparent)` }}
      />

      <div className="container relative">
        <div ref={headingRef} className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono-tag text-[10px] text-lime">Multi-sport</span>
            <h2 className="mt-4 font-display text-[clamp(2.6rem,6vw,4.5rem)] text-chalk">
              Un terrain pour
              <br />
              chaque envie
            </h2>
          </div>
          <p className="max-w-sm text-chalk/55">
            Belzio couvre les sports qu&apos;on joue vraiment le soir et le week-end — avec le bon format, le bon
            niveau et le bon nombre de joueurs.
          </p>
        </div>

        {/* Selector */}
        <div className="mt-12 flex flex-wrap gap-2.5" role="tablist" aria-label="Sports disponibles">
          {SPORTS.map((sport) => {
            const isActive: boolean = sport.id === activeId;
            return (
              <button
                key={sport.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(sport.id)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border px-5 py-3 text-left transition-all duration-300",
                  isActive
                    ? "border-transparent text-ink"
                    : "border-chalk/10 bg-chalk/[0.03] text-chalk/70 hover:border-chalk/25 hover:text-chalk",
                )}
                style={isActive ? { background: sport.accent } : undefined}
              >
                <span className="block font-display text-xl leading-none">{sport.label}</span>
                <span
                  className={cn(
                    "mt-1 block text-[10px] uppercase tracking-[0.14em]",
                    isActive ? "text-ink/70" : "text-chalk/40",
                  )}
                >
                  {sport.formats}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          ref={cardRef}
          className="reveal mt-8 grid overflow-hidden rounded-4xl border border-chalk/10 bg-[#0A0E0B] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative h-72 lg:h-auto">
            {SPORTS.map((sport) => (
              <img
                key={sport.id}
                src={sport.image}
                alt={`${sport.label} — Belzio`}
                loading="lazy"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                  sport.id === activeId ? "scale-100 opacity-100" : "scale-105 opacity-0",
                )}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E0B] via-transparent to-transparent lg:bg-gradient-to-r" />
            <span
              className="absolute left-5 top-5 rounded-full px-3 py-1.5 font-mono-tag text-[10px] text-ink"
              style={{ background: active.accent }}
            >
              {active.label}
            </span>
          </div>

          <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
            <div>
              <h3 className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] text-chalk">{active.headline}</h3>
              <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-chalk/60">{active.copy}</p>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-6 border-t border-chalk/10 pt-7">
              <div>
                <p className="font-display text-5xl" style={{ color: active.accent }}>
                  {active.stat}
                </p>
                <p className="mt-2 max-w-[15rem] text-sm text-chalk/45">{active.statLabel}</p>
              </div>
              <a
                href="#telecharger"
                className="group inline-flex items-center gap-2 rounded-full border border-chalk/15 px-5 py-3 text-sm text-chalk transition-colors hover:border-lime hover:text-lime"
              >
                Voir les matchs
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
