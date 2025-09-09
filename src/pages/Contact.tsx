import React from "react";
import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";
import { Contact as ContactComponent } from "../../components/contact";

const Contact = () => {
  return (
    <div className="pt-20">
      <Container className="border-divide border-x">
        <div className="py-20">
          <SectionHeading>Contact Us</SectionHeading>
          <div className="mt-8">
            <ContactComponent />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
