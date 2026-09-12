import { whatsappLink } from "@/lib/site";

const services = [
  {
    icon: "🥚",
    title: "Custom Egg Hatching",
    description:
      "Submit your fertile chicken eggs and we manage the full incubation process — setting, turning, monitoring and hatching — until your chicks are ready for collection.",
    cta: "Book egg hatching",
    message: "Hi HatchGrow, I'd like to book custom egg hatching.",
  },
  {
    icon: "🐥",
    title: "Day-Old Chick Sales",
    description:
      "Looking to start or restock your flock? Get quality day-old chicks straight from our hatchery.",
    cta: "Ask about chick sales",
    message: "Hi HatchGrow, I'd like to enquire about day-old chicks.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold-dark">
          What We Offer
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-brand-green sm:text-4xl">
          Day-Old Chick Sales &amp; Custom Egg Hatching
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="group flex flex-col rounded-2xl border border-brand-green/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          >
            <span className="inline-block w-fit text-4xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              {service.icon}
            </span>
            <h3 className="mt-4 text-xl font-bold text-brand-green">
              {service.title}
            </h3>
            <p className="mt-3 flex-1 text-brand-green/70">
              {service.description}
            </p>
            <a
              href={whatsappLink(service.message)}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-green-dark transition-colors hover:bg-brand-gold-dark"
            >
              {service.cta} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
