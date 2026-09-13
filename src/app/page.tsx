import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import BookingSteps from "@/components/BookingSteps";
import FAQ from "@/components/FAQ";
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
        <WhyChooseUs />
        <Reveal>
          <Services />
        </Reveal>
        <HowItWorks />
        <BookingSteps />
        <FAQ />
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
