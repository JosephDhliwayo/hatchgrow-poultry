import { whatsappLink } from "@/lib/site";
import Reveal from "./Reveal";

const steps = [
  {
    title: "Contact HatchGrow",
    description:
      "Reach us through WhatsApp, phone or this website and tell us how many eggs you'd like us to hatch.",
  },
  {
    title: "Confirm Your Booking",
    description:
      "We confirm the number of eggs, hatching schedule, service fee and submission date.",
  },
  {
    title: "Prepare Your Eggs",
    description:
      "Provide fertile chicken eggs suitable for incubation, handled and stored correctly (see guidelines below).",
  },
  {
    title: "Submit Your Eggs",
    description:
      "Bring your eggs to HatchGrow Poultry on the agreed date. We record your batch and inspect the eggs before incubation.",
  },
  {
    title: "We Do the Hatching",
    description:
      "Once accepted, we manage the incubation environment, egg turning, monitoring and preparation for hatch.",
  },
  {
    title: "Wait for Hatch Day",
    description:
      "Chicken eggs generally take 21 days to hatch. Exact hatch time can vary slightly depending on the eggs and incubation conditions.",
  },
  {
    title: "Collect Your Chicks",
    description:
      "Once your chicks have hatched, dried and are ready, we notify you. You collect them according to the agreed arrangements.",
  },
];

const eggGuidelines = [
  "Fresh and properly stored before submission",
  "Clean and free from cracks",
  "Not washed or scrubbed",
  "From healthy breeding birds",
  "Handled carefully to avoid damaging the embryo",
];

export default function BookingSteps() {
  return (
    <section id="booking" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold-dark">
          🥚 Get Started
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-brand-green sm:text-4xl">
          Want Us to Hatch Your Eggs?
        </h2>
        <p className="mt-4 text-brand-green/70">
          The process is simple — here&apos;s how a booking works from
          start to finish.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={Math.min(i, 5) * 80}>
            <div className="rounded-2xl border border-brand-green/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-green-dark transition-transform duration-300 hover:scale-110">
                {i + 1}
              </span>
              <h3 className="mt-3 font-bold text-brand-green">Step {i + 1} — {step.title}</h3>
              <p className="mt-2 text-sm text-brand-green/70">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}

        <Reveal delay={480}>
          <div className="rounded-2xl border-2 border-dashed border-brand-green/20 bg-brand-green/5 p-6">
            <h3 className="font-bold text-brand-green">Eggs should preferably be:</h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-green/75">
              {eggGuidelines.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand-gold-dark">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-10 rounded-2xl bg-brand-green px-6 py-6 text-center sm:px-10">
        <p className="text-white/90">
          Booking is required before drop-off — we&apos;ll agree your
          submission date and let you know the day for chick collection.
        </p>
        <p className="mt-2 text-sm italic text-white/60">
          &ldquo;Unoisa nyaya yekubooker, hakuna zvekungouya uchitowana
          machicks — unobooker, tokuudza day rekuzoita collection.&rdquo;
        </p>
        <a
          href={whatsappLink("Hi HatchGrow, I'd like to book an egg hatching slot.")}
          className="mt-5 inline-flex rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-green-dark transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-gold-dark"
        >
          Start Your Booking on WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
