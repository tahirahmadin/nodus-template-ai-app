import { AgenticIntelligence } from "@/components/agentic-intelligence";
import { DivideX } from "@/components/divide";
import { Hero } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import { HowItWorks } from "@/components/how-it-works";
import { LogoCloud } from "@/components/logo-cloud";
import { UseCases } from "@/components/use-cases";
import { Helmet } from "react-helmet-async";

export default function PlaygroundPage() {
  return (
    <>
      <Helmet>
        <title>Notus: Build and Manage AI-Driven Agentic Workflows</title>
        <meta
          name="description"
          content="Empower your technical teams to create, simulate and manage AI-driven workflows visually. Notus provides an intuitive platform for developing and testing agentic systems, helping you build the next generation of intelligent applications with confidence."
        />
      </Helmet>
      <div className="">
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
      </div>
    </>
  );
}
