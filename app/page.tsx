import { PillNav } from "@/components/landing/PillNav";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { DemoSessions } from "@/components/landing/DemoSessions";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCta } from "@/components/landing/FinalCta";
import { Contact } from "@/components/landing/Contact";
import { SiteFooter } from "@/components/landing/SiteFooter";

export default function LandingPage() {
  return (
    <>
      <PillNav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <DemoSessions />
        <Pricing />
        <FinalCta />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
