import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import BookingSteps from "@/components/BookingSteps";
import ImportantInfo from "@/components/ImportantInfo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Reveal>
          <Services />
        </Reveal>
        <HowItWorks />
        <BookingSteps />
        <Reveal>
          <ImportantInfo />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
