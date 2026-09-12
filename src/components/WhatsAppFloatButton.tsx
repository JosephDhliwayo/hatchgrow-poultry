import { whatsappLink } from "@/lib/site";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappLink("Hi HatchGrow, I'd like to book an egg hatching slot.")}
      aria-label="Message HatchGrow Poultry on WhatsApp"
      className="animate-pulse-ring fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xl shadow-lg shadow-black/20 transition-transform hover:scale-110 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 sm:text-2xl"
    >
      <span aria-hidden="true">💬</span>
    </a>
  );
}
