import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PillNav } from "@/components/landing/PillNav";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { DemoSessions } from "@/components/landing/DemoSessions";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCta } from "@/components/landing/FinalCta";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";
import { SiteFooter } from "@/components/landing/SiteFooter";
import {
  APP_URL,
  CREATOR_NAME,
  OFFICIAL_LINKS,
  PRODUCT_FEATURES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#creator` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#creator`,
      name: CREATOR_NAME,
      url: OFFICIAL_LINKS.creatorGithub,
      sameAs: [OFFICIAL_LINKS.creatorGithub],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: SITE_NAME,
      url: APP_URL,
      description: SITE_DESCRIPTION,
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Web browser",
      isAccessibleForFree: true,
      sameAs: [OFFICIAL_LINKS.github, OFFICIAL_LINKS.instagram],
      featureList: [...PRODUCT_FEATURES],
      author: { "@id": `${SITE_URL}/#creator` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free during the BetterPomo open beta",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function LandingPage() {
  return (
    <>
      <JsonLd data={homeStructuredData} />
      <PillNav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <DemoSessions />
        <Pricing />
        <FinalCta />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
