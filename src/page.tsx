import { AgenticIntelligence } from "@/components/agentic-intelligence";
import { Benefits } from "@/components/benefits";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { FAQs } from "@/components/faqs";
import { Hero } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import { HowItWorks } from "@/components/how-it-works";
import { LogoCloud } from "@/components/logo-cloud";
import { Pricing } from "@/components/pricing";
import { Security } from "@/components/security";
import { Testimonials } from "@/components/testimonials";
import { UseCases } from "@/components/use-cases";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Notus: Build and Manage AI-Driven Agentic Workflows</title>
        <meta
          name="description"
          content="Empower your technical teams to create, simulate and manage AI-driven workflows visually. Notus provides an intuitive platform for developing and testing agentic systems, helping you build the next generation of intelligent applications with confidence."
        />
      </Helmet>
      <main>
        <DivideX />
        <Hero />
        <DivideX />
        <HeroImage />
        <DivideX />
        <LogoCloud />
        <DivideX />
        <HowItWorks />
        <DivideX />
        <AgenticIntelligence />
        <DivideX />
        <UseCases />
        <DivideX />
        <Benefits />
        <DivideX />
        <Testimonials />
        <DivideX />
        <Pricing />
        <DivideX />
        <Security />
        <DivideX />
        <FAQs />
        <DivideX />
        <CTA />
        <DivideX />
      </main>
    </>
  );
}
