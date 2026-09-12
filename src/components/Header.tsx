import Link from "next/link";
import Logo from "./Logo";
import { site, telLink, whatsappLink } from "@/lib/site";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#booking", label: "Booking" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-green/10 bg-brand-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="#top" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-green/80 transition-colors hover:text-brand-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telLink(site.phones[0])}
            className="hidden rounded-full border border-brand-green/20 px-4 py-2 text-sm font-semibold text-brand-green transition-colors hover:border-brand-green/40 sm:inline-block"
          >
            Call Us
          </a>
          <a
            href={whatsappLink("Hi HatchGrow, I'd like to book an egg hatching slot.")}
            className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green-dark"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
