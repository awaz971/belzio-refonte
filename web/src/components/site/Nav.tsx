import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const LINKS: { href: string; label: string }[] = [
  { href: "#comment", label: "Comment ça marche" },
  { href: "#sports", label: "Sports" },
  { href: "#app", label: "L'app" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 md:px-5",
          scrolled
            ? "border-chalk/10 bg-[#0A0E0B]/85 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-lime">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M12 2c-3.6 0-6.5 2.9-6.5 6.5C5.5 13.4 12 22 12 22s6.5-8.6 6.5-13.5C18.5 4.9 15.6 2 12 2Z"
                fill="hsl(var(--ink))"
              />
              <circle cx="12" cy="8.4" r="2.6" fill="hsl(var(--lime))" />
            </svg>
          </span>
          <span className="font-display text-2xl tracking-tight text-chalk transition-colors group-hover:text-lime">
            Belzio
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-chalk/65 transition-colors hover:bg-chalk/5 hover:text-chalk"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#telecharger"
            className="hidden rounded-full bg-lime px-5 py-2.5 font-display text-sm text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_hsl(var(--lime)/0.7)] sm:block"
            style={{ fontStretch: "112%" }}
          >
            Télécharger
          </a>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-chalk/12 text-chalk md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="fixed inset-0 top-0 z-40 flex flex-col gap-2 bg-[#070A08]/97 px-6 pb-10 pt-28 backdrop-blur-xl md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-chalk/8 py-4 font-display text-3xl text-chalk"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#telecharger"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-2xl bg-lime py-4 text-center font-display text-xl text-ink"
          >
            Télécharger l'app
          </a>
        </div>
      ) : null}
    </header>
  );
}
