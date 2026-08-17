import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";

type FaqItem = {
  question: string;
  answer: string;
};

const ITEMS: FaqItem[] = [
  {
    question: "Belzio est-il gratuit ?",
    answer:
      "Oui. Créer un compte, publier un match et rejoindre une partie est gratuit. Si le terrain est payant, le coût est partagé entre les joueurs et affiché sur la fiche du match avant que tu rejoignes.",
  },
  {
    question: "Je débute, est-ce que je vais être largué ?",
    answer:
      "Chaque match affiche un niveau annoncé (débutant, intermédiaire, confirmé) et le format. Tu peux filtrer pour ne voir que les matchs adaptés, et les organisateurs précisent l'ambiance : loisir ou compétitif.",
  },
  {
    question: "Puis-je venir avec mes amis ?",
    answer:
      "Bien sûr. Tu peux réserver plusieurs places d'un coup, ou créer un match privé accessible uniquement via un lien d'invitation pour ton groupe.",
  },
  {
    question: "Que se passe-t-il si quelqu'un ne vient pas ?",
    answer:
      "Les profils affichent un historique de présence et une note post-match. Une place libérée est immédiatement remise en ligne et les joueurs en attente sont notifiés.",
  },
  {
    question: "Quels sports sont disponibles ?",
    answer:
      "Foot (5v5, 7v7, futsal), padel, basket (3v3 et 5v5) et les formats urbains comme le running, le cross training ou les sorties vélo. De nouveaux sports sont ajoutés selon les demandes des joueurs.",
  },
  {
    question: "Dans quelles villes puis-je jouer ?",
    answer:
      "Belzio est actif dans 18 villes en France, avec une communauté dense à Paris, Lyon, Bordeaux, Lille, Marseille et Toulouse. L'app te montre automatiquement les matchs dans un rayon que tu choisis.",
  },
];

export function Faq() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container">
        <div ref={ref} className="reveal grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="font-mono-tag text-[10px] text-lime">Questions</span>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.6rem)] text-chalk">
              Tout ce qu&apos;il faut savoir
            </h2>
            <p className="mt-5 max-w-sm text-chalk/50">
              Une autre question ? Écris-nous à{" "}
              <a href="mailto:hello@belzio.app" className="text-lime underline underline-offset-4">
                hello@belzio.app
              </a>
              , on répond vite.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {ITEMS.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-b border-chalk/10 first:border-t first:border-chalk/10"
              >
                <AccordionTrigger className="py-6 text-left font-display text-xl text-chalk hover:text-lime hover:no-underline [&[data-state=open]]:text-lime">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-chalk/55">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
