import { MapPin, Users, Clock, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

type MatchCard = {
  sport: string;
  title: string;
  distance: string;
  time: string;
  level: string;
  spots: number;
  total: number;
  accent: string;
};

const MATCHES: MatchCard[] = [
  {
    sport: "Foot 5v5",
    title: "City Stade — Bellevue",
    distance: "800 m",
    time: "Ce soir · 19:30",
    level: "Intermédiaire",
    spots: 3,
    total: 10,
    accent: "hsl(var(--lime))",
  },
  {
    sport: "Padel",
    title: "Padel Club Central",
    distance: "1,4 km",
    time: "Demain · 12:00",
    level: "Débutant",
    spots: 1,
    total: 4,
    accent: "hsl(var(--ice))",
  },
  {
    sport: "Basket 3v3",
    title: "Playground Rivière",
    distance: "2,1 km",
    time: "Sam. · 16:00",
    level: "Confirmé",
    spots: 2,
    total: 6,
    accent: "hsl(var(--flame))",
  },
];

function AvatarStack({ count, accent }: { count: number; accent: string }) {
  const initials: string[] = ["YB", "MK", "TL", "AD", "SR"];
  return (
    <div className="flex -space-x-2">
      {initials.slice(0, count).map((label, index) => (
        <span
          key={label}
          className="flex h-6 w-6 items-center justify-center rounded-full border border-ink text-[8px] font-semibold text-ink"
          style={{
            background: index === 0 ? accent : `hsl(var(--chalk) / ${0.85 - index * 0.14})`,
          }}
        >
          {label}
        </span>
      ))}
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ink bg-chalk/10 text-[8px] font-semibold text-chalk/70">
        +4
      </span>
    </div>
  );
}

export function PhoneMock({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {/* Device */}
      <div className="relative h-[620px] w-[300px] rounded-[46px] border border-chalk/15 bg-[#0B0F0C] p-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
        <div className="pointer-events-none absolute inset-0 rounded-[46px] ring-1 ring-inset ring-chalk/10" />
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#080B09]">
          {/* Map layer */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 pitch-grid opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,hsl(var(--lime)/0.22),transparent_58%)]" />
            <svg viewBox="0 0 300 620" className="absolute inset-0 h-full w-full opacity-40">
              <path d="M-20 180 L120 140 L200 210 L320 175" stroke="hsl(var(--chalk)/0.14)" strokeWidth="14" fill="none" />
              <path d="M40 -20 L70 160 L30 320 L90 620" stroke="hsl(var(--chalk)/0.1)" strokeWidth="10" fill="none" />
              <path d="M230 -20 L215 200 L260 380 L230 620" stroke="hsl(var(--chalk)/0.1)" strokeWidth="10" fill="none" />
            </svg>
          </div>

          {/* Status bar */}
          <div className="relative flex items-center justify-between px-6 pt-4 text-[10px] font-medium text-chalk/70">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              LTE
            </span>
          </div>
          <div className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* Header */}
          <div className="relative mt-5 px-5">
            <p className="font-mono-tag text-[9px] text-lime">Autour de toi · Lyon 7e</p>
            <p className="mt-1 font-display text-2xl text-chalk" style={{ fontStretch: "115%" }}>
              12 matchs ouverts
            </p>
          </div>

          {/* Sport chips */}
          <div className="relative mt-4 flex gap-2 px-5">
            {["Foot", "Padel", "Basket", "Urbain"].map((sport, index) => (
              <span
                key={sport}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[10px] font-semibold",
                  index === 0 ? "bg-lime text-ink" : "border border-chalk/12 bg-chalk/5 text-chalk/70",
                )}
              >
                {sport}
              </span>
            ))}
          </div>

          {/* Live pin */}
          <div className="relative mx-auto mt-6 h-24 w-full">
            <div className="absolute left-1/2 top-3 -translate-x-1/2">
              <span className="absolute inset-0 m-auto h-10 w-10 rounded-full bg-lime/40 animate-pulse-ring" />
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-lime text-ink shadow-[0_0_30px_hsl(var(--lime)/0.7)]">
                <MapPin className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </div>
            <span className="absolute left-6 top-0 rounded-full border border-chalk/12 bg-[#0D110E]/90 px-2.5 py-1 text-[9px] text-chalk/80 backdrop-blur">
              3 places
            </span>
            <span className="absolute right-5 top-12 rounded-full border border-chalk/12 bg-[#0D110E]/90 px-2.5 py-1 text-[9px] text-chalk/80 backdrop-blur">
              à 800 m
            </span>
          </div>

          {/* Bottom sheet */}
          <div className="absolute inset-x-0 bottom-0 rounded-t-[28px] border-t border-chalk/10 bg-[#0C100D]/95 px-4 pb-5 pt-3 backdrop-blur-xl">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-chalk/20" />
            <div className="space-y-2.5">
              {MATCHES.map((match, index) => (
                <div
                  key={match.title}
                  className={cn(
                    "rounded-2xl border p-3 transition-colors",
                    index === 0 ? "border-lime/40 bg-lime/[0.07]" : "border-chalk/8 bg-chalk/[0.03]",
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span
                        className="font-mono-tag text-[8px]"
                        style={{ color: match.accent }}
                      >
                        {match.sport} · {match.level}
                      </span>
                      <p className="mt-1 text-[13px] font-semibold leading-tight text-chalk">{match.title}</p>
                      <div className="mt-1.5 flex items-center gap-3 text-[10px] text-chalk/55">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {match.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {match.distance}
                        </span>
                      </div>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold"
                      style={{ background: match.accent, color: "hsl(var(--ink))" }}
                    >
                      {match.spots} pl.
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <AvatarStack count={index === 0 ? 4 : 3} accent={match.accent} />
                    <span className="flex items-center gap-1 text-[10px] text-chalk/50">
                      <Users className="h-3 w-3" />
                      {match.total - match.spots}/{match.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-lime py-3 font-display text-sm text-ink"
              style={{ fontStretch: "112%" }}
            >
              <Zap className="h-4 w-4" strokeWidth={2.5} />
              Rejoindre le match
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
