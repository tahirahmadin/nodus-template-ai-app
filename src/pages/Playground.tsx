import React from "react";
import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";

const Playground = () => {
  return (
    <div className="pt-20">
      <Container className="border-divide border-x">
        <div className="py-20">
          <SectionHeading>Playground</SectionHeading>
          <div className="mt-8">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Experiment with our AI-driven workflow tools in a safe, 
              interactive environment.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Playground;
