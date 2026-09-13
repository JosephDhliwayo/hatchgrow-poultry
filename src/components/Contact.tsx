import { site, telLink, whatsappLink } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="overflow-hidden rounded-3xl bg-brand-green">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Get In Touch
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Ready to hatch your eggs?
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Contact us through WhatsApp, phone, or visit the hatchery
              directly and tell us how many eggs you&apos;d like us to hatch.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink("Hi HatchGrow, I'd like to book an egg hatching slot.")}
                className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-green-dark transition-colors hover:bg-brand-gold-dark"
              >
                Message on WhatsApp
              </a>
              <a
                href={telLink(site.phones[0])}
                className="rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                Call Now
              </a>
            </div>
          </div>

          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-base"
              >
                📍
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  Address
                </dt>
                <dd className="mt-1.5 text-white/85">{site.address}</dd>
              </div>
            </div>

            <div className="flex gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-base"
              >
                🕐
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  Working Hours
                </dt>
                <dd className="mt-1.5 text-white/85">{site.hours}</dd>
              </div>
            </div>

            <div className="flex gap-3 sm:col-span-2">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-base"
              >
                📞
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  Phone
                </dt>
                <dd className="mt-1.5 space-y-1">
                  {site.phones.map((phone) => (
                    <a
                      key={phone}
                      href={telLink(phone)}
                      className="block text-white/85 hover:text-white"
                    >
                      {phone}
                    </a>
                  ))}
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
