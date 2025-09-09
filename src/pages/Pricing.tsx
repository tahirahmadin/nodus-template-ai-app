import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";
import { Pricing as PricingComponent } from "../../components/pricing";

const Pricing = () => {
  return (
    <div className="pt-20">
      <Container className="border-divide border-x">
        <div className="py-20">
          <SectionHeading>Pricing</SectionHeading>
          <div className="mt-8">
            <PricingComponent />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
