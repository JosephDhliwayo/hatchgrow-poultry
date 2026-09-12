import Image from "next/image";
import logoFull from "../../public/logo.png";
import { site, telLink } from "@/lib/site";

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
            <p className="mt-2">{site.address}</p>
            {site.phones.map((phone) => (
              <p key={phone}>
                <a href={telLink(phone)} className="hover:text-brand-green">
                  {phone}
                </a>
              </p>
            ))}
            <p className="mt-2">{site.hours}</p>
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
