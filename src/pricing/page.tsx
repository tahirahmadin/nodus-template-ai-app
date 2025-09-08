import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { FAQs } from "@/components/faqs";
import { Pricing } from "@/components/pricing";
import { PricingTable } from "@/components/pricing-table";

import { Helmet } from "react-helmet-async";

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing - Notus | Aceternity UI Pro Template</title>
        <meta
          name="description"
          content="Notus is a platform for building agentic workflows. It allows you to design, simulate, and launch autonomous agents visually and intuitively."
        />
      </Helmet>
      <main>
        <DivideX />
        <Pricing />
        <DivideX />
        <PricingTable />
        {/* <DivideX /> */}
        <FAQs />
        <DivideX />
        <CTA />
        <DivideX />
      </main>
    </>
  );
}
