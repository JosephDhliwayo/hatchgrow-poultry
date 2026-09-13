import { WarningIcon } from "./icons";

const notes = [
  "Only fertile eggs should be submitted for hatching.",
  "The 21-day period is an approximate incubation period for chicken eggs.",
  "Not every egg will necessarily hatch. Hatch results can be affected by fertility, egg quality, storage conditions, breeder health and other factors before the eggs reach our hatchery.",
  "We recommend submitting eggs that are suitable for incubation and have been handled and stored correctly.",
  "Customers should provide the eggs in good condition. HatchGrow manages the incubation process after the eggs have been accepted.",
  "Customers will be informed when their chicks are ready for collection.",
];

export default function ImportantInfo() {
  return (
    <section className="bg-brand-cream-dark/60 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-brand-gold/30 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-brand-green sm:text-2xl">
            <WarningIcon className="h-5 w-5 text-brand-gold-dark" /> Important Information for Customers
          </h2>
          <ul className="mt-6 space-y-3">
            {notes.map((note) => (
              <li key={note} className="flex gap-3 text-brand-green/80">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold-dark" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
