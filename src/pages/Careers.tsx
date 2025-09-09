import React from "react";
import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";

const Careers = () => {
  return (
    <div className="pt-20">
      <Container className="border-divide border-x">
        <div className="py-20">
          <SectionHeading>Careers</SectionHeading>
          <div className="mt-8">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Join our team and help build the future of AI-driven workflows. 
              We're looking for passionate developers, designers, and innovators.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Careers;
