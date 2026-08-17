import { useEffect, useState } from "react";

import { useInView } from "@/hooks/use-reveal";

type Stat = {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
};

const STATS: Stat[] = [
  { value: 12400, suffix: "+", label: "joueurs sur Belzio" },
  { value: 3200, suffix: "", label: "matchs organisés par mois" },
  { value: 18, suffix: "", label: "villes couvertes en France" },
  { value: 4.8, suffix: "/5", decimals: 1, label: "note moyenne des joueurs" },
];

function formatValue(value: number, decimals: number): string {
  if (decimals > 0) return value.toFixed(decimals).replace(".", ",");
  return Math.round(value).toLocaleString("fr-FR").replace(/\u202f/g, " ");
}

function Counter({ stat, active }: { stat: Stat; active: boolean }) {
  const [display, setDisplay] = useState<number>(0);

  useEffect(() => {
    if (!active) return;
    const duration: number = 1600;
    const start: number = performance.now();
    let frame: number = 0;

    const tick = (now: number): void => {
      const progress: number = Math.min((now - start) / duration, 1);
      const eased: number = 1 - Math.pow(1 - progress, 3);
      setDisplay(stat.value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, stat.value]);

  return (
    <span className="font-display text-[clamp(2.6rem,5.5vw,4.2rem)] text-chalk">
      {formatValue(display, stat.decimals ?? 0)}
      <span className="text-lime">{stat.suffix}</span>
    </span>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section className="relative border-y border-chalk/8 bg-[#080B09] py-16 md:py-20">
      <div className="absolute inset-0 pitch-grid opacity-40" />
      <div ref={ref} className="container relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="border-l border-chalk/10 pl-5">
            <Counter stat={stat} active={inView} />
            <p className="mt-3 max-w-[13rem] text-sm leading-snug text-chalk/45">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
