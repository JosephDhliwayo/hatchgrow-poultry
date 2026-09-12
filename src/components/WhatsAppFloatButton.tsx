import { whatsappLink } from "@/lib/site";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappLink("Hi HatchGrow, I'd like to book an egg hatching slot.")}
      aria-label="Message HatchGrow Poultry on WhatsApp"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-lg shadow-black/20 transition-transform hover:scale-110"
    >
      <span aria-hidden="true">💬</span>
    </a>
  );
}
