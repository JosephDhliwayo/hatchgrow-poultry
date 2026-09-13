import { site, whatsappLink } from "@/lib/site";
import { ChatIcon, ChickIcon, EggIcon, PinIcon } from "./icons";
import Reveal from "./Reveal";

const reasons = [
  {
    icon: EggIcon,
    title: "Professionally Managed Incubation",
    description:
      "Every batch is monitored for temperature, humidity and turning from the day it's set until hatch day.",
  },
  {
    icon: ChatIcon,
    title: "Easy WhatsApp Booking",
    description:
      "Book your slot, get updates, and arrange collection, all through a quick WhatsApp message.",
  },
  {
    icon: ChickIcon,
    title: "Two Ways to Get Chicks",
    description:
      "Hatch your own fertile eggs with us, or skip the wait and buy day-old chicks directly.",
  },
  {
    icon: PinIcon,
    title: "Based in Chiredzi",
    description: `Conveniently located on West Road, open ${site.hours} for drop-off and collection.`,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold-dark">
          Why HatchGrow
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-brand-green sm:text-4xl">
          Built for a Reliable Hatch, Every Time
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => (
          <Reveal key={reason.title} delay={i * 90}>
            <div className="h-full rounded-2xl border border-brand-green/10 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:text-left">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green sm:mx-0">
                <reason.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-bold text-brand-green">{reason.title}</h3>
              <p className="mt-2 text-sm text-brand-green/70">{reason.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={360} className="mt-12 flex justify-center">
        <a
          href={whatsappLink("Hi HatchGrow, I'd like to get a quote for hatching my eggs.")}
          className="rounded-full bg-brand-green px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-brand-green/20 transition-transform hover:-translate-y-0.5 hover:bg-brand-green-dark"
        >
          Get a Free Quote on WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
