import { ArrowDown, Star } from "lucide-react";

import { IMAGES } from "@/lib/assets";

import { PhoneMock } from "./PhoneMock";
import { StoreBadges } from "./StoreBadges";

export function Hero() {
  return (
    <section id="top" className="noise relative isolate overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.heroPitch}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.38]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,transparent,hsl(var(--ink))_78%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 pitch-grid opacity-30" />
        {/* Floodlight sweep */}
        <div className="absolute -top-1/3 left-1/2 h-[80vh] w-[60vw] -translate-x-1/2 animate-sweep bg-[conic-gradient(from_180deg_at_50%_0%,transparent,hsl(var(--lime)/0.16),transparent)] blur-3xl" />
      </div>

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              <span className="font-mono-tag text-[10px] text-lime">Foot · Padel · Basket · Urbain</span>
            </div>

            <h1 className="mt-7 font-display text-[clamp(3.2rem,9vw,6.5rem)] text-chalk">
              Le sport,
              <br />
              <span className="text-stroke-lime">autour</span> de toi.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-chalk/65">
              Fini les groupes WhatsApp interminables. Trouve un match près de chez toi, vois qui joue, le niveau
              et les places restantes — puis rejoins en un tap.
            </p>

            <div className="mt-9 flex flex-col gap-5">
              <StoreBadges />
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-chalk/50">
                <span className="flex items-center gap-1.5">
                  <span className="flex">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-lime text-lime" />
                    ))}
                  </span>
                  4,8 sur l&apos;App Store
                </span>
                <span className="h-4 w-px bg-chalk/15" />
                <span>+12 000 joueurs actifs</span>
                <span className="h-4 w-px bg-chalk/15" />
                <span>Gratuit, sans abonnement</span>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 -z-10 m-auto h-[420px] w-[420px] rounded-full bg-lime/12 blur-[110px]" />
            <div className="animate-float-slow">
              <PhoneMock />
            </div>

            <div className="absolute -left-2 top-16 hidden animate-float-slower rounded-2xl border border-chalk/10 bg-[#0C100D]/90 px-4 py-3 backdrop-blur-xl sm:block lg:-left-8">
              <p className="font-mono-tag text-[9px] text-flame">Match confirmé</p>
              <p className="mt-1 font-display text-lg text-chalk">10/10 joueurs</p>
            </div>

            <div className="absolute -right-2 bottom-24 hidden animate-float-slow rounded-2xl border border-chalk/10 bg-[#0C100D]/90 px-4 py-3 backdrop-blur-xl sm:block lg:-right-6">
              <p className="font-mono-tag text-[9px] text-lime">+120 XP</p>
              <p className="mt-1 font-display text-lg text-chalk">Niveau 7</p>
            </div>
          </div>
        </div>

        <a
          href="#comment"
          className="mt-20 inline-flex items-center gap-2 text-sm text-chalk/40 transition-colors hover:text-lime"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Comment ça marche
        </a>
      </div>
    </section>
  );
}
