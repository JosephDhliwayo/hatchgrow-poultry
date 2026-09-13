"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import Reveal from "./Reveal";

const faqs = [
  {
    question: "How much does it cost to hatch my eggs?",
    answer:
      "Pricing depends on the number of eggs and your hatching schedule. Message us on WhatsApp or call us and we'll confirm a quote before you book.",
  },
  {
    question: "Will all of my eggs hatch?",
    answer:
      "Not every egg will necessarily hatch. Results depend on fertility, egg quality, storage conditions and breeder health before the eggs reach us. We manage the incubation carefully once your eggs are accepted, but a 100% hatch rate can't be guaranteed.",
  },
  {
    question: "Do I need to book before bringing my eggs?",
    answer:
      "Yes. Booking is required in advance so we can confirm your batch size, schedule and submission date, please don't arrive without a prior booking.",
  },
  {
    question: "How long does hatching take?",
    answer:
      "Chicken eggs normally take approximately 21 days to hatch, though the exact time can vary slightly depending on the eggs and incubation conditions.",
  },
  {
    question: "Can I buy chicks without hatching my own eggs?",
    answer:
      "Yes. If you don't have fertile eggs to hatch, we also sell quality day-old chicks directly from our hatchery.",
  },
  {
    question: "How do I collect my chicks?",
    answer:
      "Once your chicks have hatched and dried, we'll contact you to arrange collection at the agreed time.",
  },
];

function ChevronIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-cream-dark/60 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold-dark">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-green sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={Math.min(i, 5) * 60}>
                <div className="overflow-hidden rounded-2xl border border-brand-green/10 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-brand-green"
                  >
                    {faq.question}
                    <ChevronIcon
                      className={`h-5 w-5 shrink-0 text-brand-gold-dark transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-brand-green/70">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={420} className="mt-10 text-center">
          <p className="text-brand-green/70">Still have a question?</p>
          <a
            href={whatsappLink("Hi HatchGrow, I have a question before booking.")}
            className="mt-3 inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-green-dark"
          >
            Ask Us on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
