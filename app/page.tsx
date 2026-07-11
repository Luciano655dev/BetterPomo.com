import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Why } from "@/components/landing/Why";
import { Pricing } from "@/components/landing/Pricing";
import { Vision } from "@/components/landing/Vision";
import { FinalCta } from "@/components/landing/FinalCta";
import { SiteFooter } from "@/components/landing/SiteFooter";

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Why />
        <Pricing />
        <Vision />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
