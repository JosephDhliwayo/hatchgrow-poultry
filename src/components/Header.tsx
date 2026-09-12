"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header sticky top-0 z-50 border-b border-brand-green/10 bg-brand-cream/90 backdrop-blur ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-3 py-3 sm:gap-4 sm:px-6">
        <Link href="#top" aria-label={`${site.name} home`} className="min-w-0 shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-brand-green/80 transition-colors hover:text-brand-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={telLink(site.phones[0])}
            className="hidden rounded-full border border-brand-green/20 px-4 py-2 text-sm font-semibold text-brand-green transition-colors hover:border-brand-green/40 sm:inline-block"
          >
            Call Us
          </a>
          <a
            href={whatsappLink("Hi HatchGrow, I'd like to book an egg hatching slot.")}
            className="rounded-full bg-brand-green px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-green-dark sm:px-4 sm:py-2 sm:text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
