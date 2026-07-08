import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Skills } from "@/components/landing/Skills";
import { Services } from "@/components/landing/Services";
import { WhyMe } from "@/components/landing/WhyMe";
import { AskAI } from "@/components/landing/AskAI";
import { Booking } from "@/components/landing/Booking";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { StickyAskButton } from "@/components/landing/StickyAskButton";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <WhyMe />
        <AskAI />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <StickyAskButton />
    </div>
  );
}
