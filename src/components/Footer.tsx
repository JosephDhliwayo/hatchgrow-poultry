import Image from "next/image";
import logoFull from "../../public/logo.png";
import { site, telLink } from "@/lib/site";
import { ClockIcon, PhoneIcon, PinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-brand-green/10 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div>
            <Image
              src={logoFull}
              alt={`${site.name}: ${site.tagline}`}
              className="w-56 rounded-xl sm:w-64"
            />
          </div>

          <div className="text-sm text-brand-green/70">
            <p className="font-semibold text-brand-green">Contact</p>
            <p className="mt-2 flex items-start gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-dark" />
              <span>{site.address}</span>
            </p>
            <p className="mt-2 flex items-start gap-2">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-dark" />
              <span>
                {site.phones.map((phone) => (
                  <a
                    key={phone}
                    href={telLink(phone)}
                    className="block hover:text-brand-green"
                  >
                    {phone}
                  </a>
                ))}
              </span>
            </p>
            <p className="mt-2 flex items-start gap-2">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-dark" />
              <span>{site.hours}</span>
            </p>
          </div>

          <div className="text-sm text-brand-green/70">
            <p className="font-semibold text-brand-green">Services</p>
            <p className="mt-2">Day-Old Chick Sales</p>
            <p>Custom Egg Hatching</p>
          </div>
        </div>

        <p className="mt-10 border-t border-brand-green/10 pt-6 text-xs text-brand-green/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
