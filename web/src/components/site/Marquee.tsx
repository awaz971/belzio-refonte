const WORDS: string[] = [
  "Foot 5v5",
  "Padel",
  "Basket 3v3",
  "Running urbain",
  "Foot 7v7",
  "Beach volley",
  "Futsal",
  "Cross training",
];

export function Marquee() {
  const items: string[] = [...WORDS, ...WORDS];

  return (
    <section className="relative overflow-hidden border-y border-chalk/8 bg-[#090C0A] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#090C0A] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#090C0A] to-transparent" />
      <div className="flex w-max marquee-track items-center gap-10">
        {items.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center gap-10">
            <span className="font-display text-2xl text-chalk/35 md:text-3xl">{word}</span>
            <span className="h-2 w-2 rotate-45 bg-lime/70" />
          </span>
        ))}
      </div>
    </section>
  );
}
