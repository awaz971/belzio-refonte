import { Compass, Hand, Flame } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";

type Step = {
  number: string;
  title: string;
  copy: string;
  icon: typeof Compass;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Choisis",
    copy: "Sélectionne ton sport et ta zone. Belzio affiche les matchs ouverts autour de toi, avec l'heure, le terrain et le niveau.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Rejoins",
    copy: "Un tap et ta place est réservée. Tu vois les participants, les places restantes et tu prépares le match dans le chat.",
    icon: Hand,
  },
  {
    number: "03",
    title: "Joue",
    copy: "Rendez-vous sur le terrain. Après le match, tu gagnes de l'XP, des badges et tu retrouves tes coéquipiers.",
    icon: Flame,
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className="reveal group relative rounded-4xl border border-chalk/8 bg-gradient-to-b from-chalk/[0.05] to-transparent p-7 transition-colors duration-500 hover:border-lime/40"
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-6xl text-chalk/10 transition-colors duration-500 group-hover:text-lime/70">
          {step.number}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-chalk/10 bg-chalk/5 text-lime transition-transform duration-500 group-hover:-rotate-12">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
      </div>
      <h3 className="mt-6 font-display text-3xl text-chalk">{step.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-chalk/55">{step.copy}</p>
      <span className="mt-6 block h-px w-full origin-left scale-x-0 bg-lime transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
}

export function Steps() {
  const headingRef = useReveal<HTMLDivElement>();

  return (
    <section id="comment" className="relative py-24 md:py-32">
      <div className="container">
        <div ref={headingRef} className="reveal max-w-3xl">
          <span className="font-mono-tag text-[10px] text-lime">La méthode Belzio</span>
          <h2 className="mt-4 font-display text-[clamp(2.6rem,6vw,4.5rem)] text-chalk">
            Choisis. Rejoins. <span className="text-lime">Joue.</span>
          </h2>
          <p className="mt-5 text-lg text-chalk/55">
            Trois écrans entre l&apos;envie de jouer et le coup d&apos;envoi. Pas de sondage de dispo, pas de
            relance de groupe.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
