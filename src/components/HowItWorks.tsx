import Reveal from "./Reveal";

const steps = [
  {
    title: "Egg Collection & Inspection",
    description:
      "When your eggs arrive, they are checked and recorded before being placed in the incubator. We look for eggs suitable for incubation and remove any that are cracked, badly damaged, excessively dirty, or otherwise unsuitable.",
  },
  {
    title: "Eggs Are Set in the Incubator",
    description:
      "Suitable eggs are carefully placed inside our incubator, which provides the controlled temperature, humidity and ventilation required for successful development.",
  },
  {
    title: "Regular Egg Turning",
    description:
      "During the first part of incubation, eggs are turned regularly. Turning helps the developing embryo stay properly positioned and supports healthy development.",
  },
  {
    title: "Monitoring & Candling",
    description:
      "We monitor the eggs throughout incubation and may candle them to check development and identify infertile eggs or those whose embryos have stopped developing.",
  },
  {
    title: "Final Hatching Stage (Around Day 18)",
    description:
      "Egg turning stops and the incubator is prepared for hatching. Humidity is adjusted as needed. Customers should avoid unnecessary opening or disturbance of the incubator at this stage.",
  },
  {
    title: "Hatch Day (Around Day 21)",
    description:
      "After approximately 21 days, healthy chicks begin to break through their shells. Chicks are given time to hatch and dry properly before being handled.",
  },
  {
    title: "Chick Collection",
    description:
      "Once chicks are sufficiently dry and ready, we contact you so your newly hatched chicks can be collected according to the agreed arrangements.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-cream-dark/60 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold-dark">
            🐣 The Process
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-green sm:text-4xl">
            How the Hatching Process Works
          </h2>
          <p className="mt-4 text-brand-green/70">
            Chicken eggs normally take approximately 21 days to hatch. Here&apos;s
            what happens at every stage.
          </p>
        </Reveal>

        <ol className="mt-14 space-y-8 border-l-2 border-brand-green/15 pl-8 sm:pl-10">
          {steps.map((step, i) => {
            const isHatchDay = step.title.startsWith("Hatch Day");
            return (
              <Reveal key={step.title} delay={Math.min(i, 4) * 90}>
                <li className="relative">
                  <span
                    className={`absolute -left-[2.85rem] flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white transition-transform duration-300 hover:scale-110 sm:-left-[3.35rem] ${
                      isHatchDay ? "animate-pulse-ring-gold bg-brand-gold-dark" : "bg-brand-green"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-brand-green">
                    {step.title} {isHatchDay && <span className="animate-float inline-block">🐣</span>}
                  </h3>
                  <p className="mt-1.5 text-brand-green/70">{step.description}</p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
