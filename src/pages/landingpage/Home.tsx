import { Helmet } from "react-helmet-async";

// Import all landing page components
import { Hero } from "../../../notusComponents/hero";
import { HeroImage } from "../../../notusComponents/hero-image";
import { LogoCloud } from "../../../notusComponents/logo-cloud";
import { HowItWorks } from "../../../notusComponents/how-it-works";
import { AgenticIntelligence } from "../../../notusComponents/agentic-intelligence";
import { UseCases } from "../../../notusComponents/use-cases";
import { Benefits } from "../../../notusComponents/benefits";
import { Testimonials } from "../../../notusComponents/testimonials";
import { Pricing } from "../../../notusComponents/pricing";
import { Security } from "../../../notusComponents/security";
import { FAQs } from "../../../notusComponents/faqs";
import { CTA } from "../../../notusComponents/cta";
import { DivideX } from "../../../notusComponents/divide";

export const Home = () => {
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
};

export default Home;
