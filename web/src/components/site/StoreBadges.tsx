import { cn } from "@/lib/utils";

type BadgeProps = {
  className?: string;
  variant?: "dark" | "light";
};

const APP_STORE_URL: string = "https://belzio.app/";
const PLAY_STORE_URL: string = "https://belzio.app/";

function BadgeShell({
  href,
  variant,
  className,
  icon,
  kicker,
  label,
}: {
  href: string;
  variant: "dark" | "light";
  className?: string;
  icon: React.ReactNode;
  kicker: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl px-5 py-3 transition-transform duration-300 will-change-transform hover:-translate-y-1 active:translate-y-0",
        variant === "dark"
          ? "border border-chalk/15 bg-chalk/[0.06] text-chalk backdrop-blur hover:border-lime/60"
          : "bg-ink text-chalk hover:bg-ink/90",
        className,
      )}
    >
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-lime/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        aria-hidden="true"
      />
      <span className="relative shrink-0">{icon}</span>
      <span className="relative flex flex-col leading-none">
        <span className="text-[10px] uppercase tracking-[0.16em] text-chalk/60">{kicker}</span>
        <span className="mt-1 font-display text-lg" style={{ fontStretch: "112%" }}>
          {label}
        </span>
      </span>
    </a>
  );
}

export function AppStoreBadge({ className, variant = "dark" }: BadgeProps) {
  return (
    <BadgeShell
      href={APP_STORE_URL}
      variant={variant}
      className={className}
      kicker="Télécharger sur"
      label="App Store"
      icon={
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 3-.79.92-2.06 1.63-3.13 1.55a3.3 3.3 0 0 1 1.12-2.94c.74-.83 2.01-1.45 3.13-1.61ZM20.5 17.02c-.55 1.27-.82 1.84-1.53 2.96-1 1.57-2.4 3.52-4.14 3.53-1.55.02-1.95-1.01-4.05-1-2.1.01-2.54 1.02-4.09 1-1.74-.01-3.07-1.77-4.06-3.34C-.2 16.4-.5 11.2 1.2 8.5c1.2-1.92 3.1-3.04 4.88-3.04 1.82 0 2.96 1.02 4.46 1.02 1.46 0 2.35-1.02 4.45-1.02 1.59 0 3.27.87 4.47 2.36-3.93 2.16-3.29 7.79.99 9.2Z" />
        </svg>
      }
    />
  );
}

export function PlayStoreBadge({ className, variant = "dark" }: BadgeProps) {
  return (
    <BadgeShell
      href={PLAY_STORE_URL}
      variant={variant}
      className={className}
      kicker="Disponible sur"
      label="Google Play"
      icon={
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
          <path d="M3.6 1.9c-.3.3-.5.8-.5 1.4v17.4c0 .6.2 1.1.5 1.4l.1.1 9.8-9.7v-.2L3.6 1.9Z" fill="#37D4FF" />
          <path d="m16.7 15.8-3.2-3.2v-.2l3.2-3.2.1.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2l-3.9 2.1Z" fill="#FFC53D" />
          <path d="m16.8 15.7-3.3-3.2-9.9 9.8c.4.4 1 .4 1.7.1l11.5-6.7" fill="#FF4A1C" />
          <path d="M16.8 9.3 5.3 2.7C4.6 2.3 4 2.4 3.6 2.8l9.9 9.7 3.3-3.2Z" fill="#C8FF2E" />
        </svg>
      }
    />
  );
}

export function StoreBadges({ className, variant = "dark" }: BadgeProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <AppStoreBadge variant={variant} />
      <PlayStoreBadge variant={variant} />
    </div>
  );
}
