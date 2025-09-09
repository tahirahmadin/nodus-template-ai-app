import { Helmet } from "react-helmet-async";

// Import all landing page components
import { Hero } from "../../components/hero";
import { HeroImage } from "../../components/hero-image";
import { LogoCloud } from "../../components/logo-cloud";
import { HowItWorks } from "../../components/how-it-works";
import { AgenticIntelligence } from "../../components/agentic-intelligence";
import { UseCases } from "../../components/use-cases";
import { Benefits } from "../../components/benefits";
import { Testimonials } from "../../components/testimonials";
import { Pricing } from "../../components/pricing";
import { Security } from "../../components/security";
import { FAQs } from "../../components/faqs";
import { CTA } from "../../components/cta";
import { DivideX } from "../../components/divide";

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
