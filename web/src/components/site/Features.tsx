import { MapPin, MessagesSquare, ShieldCheck, Trophy, Lock, CalendarClock } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  copy: string;
  icon: typeof MapPin;
  span: string;
  accent: string;
};

const FEATURES: Feature[] = [
  {
    title: "Tout est visible avant de rejoindre",
    copy: "Terrain exact, horaire, niveau annoncé, places restantes et liste des participants. Tu sais où tu mets les pieds avant de dire oui.",
    icon: MapPin,
    span: "md:col-span-2",
    accent: "hsl(var(--lime))",
  },
  {
    title: "Chat de match intégré",
    copy: "Un fil par match pour le point de rendez-vous, les couleurs de maillot ou le covoiturage.",
    icon: MessagesSquare,
    span: "",
    accent: "hsl(var(--ice))",
  },
  {
    title: "Public ou privé",
    copy: "Ouvre ton match à tout le quartier ou garde-le pour ton cercle avec un lien d'invitation.",
    icon: Lock,
    span: "",
    accent: "hsl(var(--amber))",
  },
  {
    title: "XP, badges et récompenses",
    copy: "Chaque match te fait progresser. Débloque des badges, des cosmétiques et grimpe dans le classement de ta ville.",
    icon: Trophy,
    span: "md:col-span-2",
    accent: "hsl(var(--flame))",
  },
  {
    title: "Joueurs fiables",
    copy: "Profils vérifiés, historique de présence et notation post-match : les no-show se voient.",
    icon: ShieldCheck,
    span: "",
    accent: "hsl(var(--lime))",
  },
  {
    title: "Matchs récurrents",
    copy: "Ton foot du mardi se recrée tout seul chaque semaine et notifie ton groupe.",
    icon: CalendarClock,
    span: "",
    accent: "hsl(var(--ice))",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  const Icon = feature.icon;

  return (
    <article
      ref={ref}
      className={cn(
        "reveal group relative overflow-hidden rounded-4xl border border-chalk/8 bg-chalk/[0.025] p-7 transition-all duration-500 hover:border-chalk/20 hover:bg-chalk/[0.05]",
        feature.span,
      )}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: feature.accent }}
      />
      <span
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-chalk/10 bg-ink/60"
        style={{ color: feature.accent }}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <h3 className="relative mt-6 font-display text-2xl leading-tight text-chalk">{feature.title}</h3>
      <p className="relative mt-3 max-w-md text-[15px] leading-relaxed text-chalk/55">{feature.copy}</p>
    </article>
  );
}

export function Features() {
  const headingRef = useReveal<HTMLDivElement>();

  return (
    <section id="app" className="relative py-24 md:py-32">
      <div className="container">
        <div ref={headingRef} className="reveal max-w-3xl">
          <span className="font-mono-tag text-[10px] text-lime">Dans l&apos;app</span>
          <h2 className="mt-4 font-display text-[clamp(2.6rem,6vw,4.5rem)] text-chalk">
            Zéro friction,
            <br />
            <span className="text-stroke">que du jeu</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
