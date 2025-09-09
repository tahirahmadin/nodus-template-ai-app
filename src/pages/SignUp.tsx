import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";
import { SignUp as SignUpComponent } from "../../components/sign-up";

const SignUp = () => {
  return (
    <div className="pt-20">
      <Container className="border-divide border-x">
        <div className="py-20">
          <SectionHeading>Sign Up</SectionHeading>
          <div className="mt-8">
            <SignUpComponent />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
