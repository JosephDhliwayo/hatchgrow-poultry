import { site, telLink, whatsappLink } from "@/lib/site";
import ChickSoundButton from "./ChickSoundButton";
import { ChickIcon, ClockIcon, EggIcon, PinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 100% at 50% -10%, #fdf3d8 0%, var(--brand-cream) 55%, var(--brand-cream) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
            <EggIcon className="h-4 w-4" /> Custom Egg Hatching Service
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-green sm:text-5xl lg:text-6xl">
            Your Eggs. Our Hatchery.{" "}
            <span className="text-brand-gold-dark">Your Chicks.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-green/80">
            Have fertile eggs but no incubator? HatchGrow Poultry hatches
            them for you. Submit your fertile chicken eggs and we take care
            of everything, from setting the eggs through to hatch day,
            in approximately 21 days.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink("Hi HatchGrow, I'd like to book an egg hatching slot.")}
              className="rounded-full bg-brand-green px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-brand-green/20 transition-transform hover:-translate-y-0.5 hover:bg-brand-green-dark"
            >
              Book on WhatsApp
            </a>
            <a
              href={telLink(site.phones[0])}
              className="rounded-full border-2 border-brand-green/30 px-6 py-3.5 text-base font-semibold text-brand-green transition-colors hover:border-brand-green"
            >
              Call {site.phones[0]}
            </a>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-green/60">
            <span className="inline-flex items-center gap-1.5">
              <PinIcon className="h-4 w-4" /> {site.address}
            </span>
            <span aria-hidden="true">&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" /> {site.hours}
            </span>
          </p>

          <div className="mt-5">
            <ChickSoundButton />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 -z-10 animate-glow rounded-[2.5rem] bg-brand-gold/15 blur-2xl" />
          <div className="rounded-[2rem] border border-brand-green/10 bg-white/70 p-8 shadow-xl shadow-brand-green/10 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-green/60">
                Incubation Timeline
              </p>
              <ChickIcon className="animate-float h-6 w-6 text-brand-gold-dark" />
            </div>

            <div className="mt-6 space-y-5">
              {[
                { day: "Day 0", label: "Eggs set in the incubator" },
                { day: "Day 18", label: "Final hatching stage begins" },
                { day: "Day 21", label: "Chicks hatch" },
              ].map((step, i) => (
                <div
                  key={step.day}
                  className="animate-count-pop flex items-center gap-4"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-gold-dark">
                      {step.day}
                    </p>
                    <p className="text-sm text-brand-green/80">{step.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-xl bg-brand-green/5 px-4 py-3 text-sm text-brand-green/70">
              Exact hatch time can vary slightly depending on the eggs and
              incubation conditions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
