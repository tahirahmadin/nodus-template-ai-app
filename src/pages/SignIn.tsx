import React from "react";
import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";
import { SignIn as SignInComponent } from "../../components/sign-in";

const SignIn = () => {
  return (
    <div className="pt-20">
      <Container className="border-divide border-x">
        <div className="py-20">
          <SectionHeading>Sign In</SectionHeading>
          <div className="mt-8">
            <SignInComponent />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
