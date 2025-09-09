import { Container } from "../../../notusComponents/container";
import { SectionHeading } from "../../../notusComponents/section-heading";
import { SignUp as SignUpComponent } from "../../../notusComponents/sign-up";

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
