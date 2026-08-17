import { Quote } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";

type Review = {
  quote: string;
  name: string;
  detail: string;
  initials: string;
  accent: string;
};

const REVIEWS: Review[] = [
  {
    quote:
      "J'ai déménagé à Lyon sans connaître personne. En deux semaines j'avais un 5v5 tous les mardis et une équipe de futsal.",
    name: "Yanis B.",
    detail: "Foot 5v5 · Lyon",
    initials: "YB",
    accent: "hsl(var(--lime))",
  },
  {
    quote:
      "On réserve le terrain de padel et il manque toujours un joueur. Belzio le trouve en 20 minutes, à notre niveau.",
    name: "Marion K.",
    detail: "Padel · Bordeaux",
    initials: "MK",
    accent: "hsl(var(--ice))",
  },
  {
    quote:
      "Le chat du match évite 40 messages de groupe. Tout le monde sait où et quand, et les no-show ont quasiment disparu.",
    name: "Thomas L.",
    detail: "Basket 3v3 · Paris",
    initials: "TL",
    accent: "hsl(var(--flame))",
  },
];

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <figure
      ref={ref}
      className="reveal group relative flex h-full flex-col justify-between rounded-4xl border border-chalk/8 bg-chalk/[0.03] p-7 transition-transform duration-500 hover:-translate-y-1.5"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote className="h-7 w-7 rotate-180 text-chalk/15" strokeWidth={2.5} />
      <blockquote className="mt-5 text-[17px] leading-relaxed text-chalk/80">« {review.quote} »</blockquote>
      <figcaption className="mt-7 flex items-center gap-3 border-t border-chalk/10 pt-5">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-ink"
          style={{ background: review.accent }}
        >
          {review.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-chalk">{review.name}</span>
          <span className="block text-xs text-chalk/45">{review.detail}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const headingRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div ref={headingRef} className="reveal flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-[clamp(2.4rem,5.5vw,4rem)] text-chalk">
            Ils ont arrêté de <span className="text-lime">chercher</span> des joueurs
          </h2>
          <p className="max-w-xs text-chalk/50">Plus de 12 000 joueurs organisent déjà leurs matchs sur Belzio.</p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
