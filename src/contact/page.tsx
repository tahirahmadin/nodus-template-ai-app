import { Contact } from "@/components/contact";
import { DivideX } from "@/components/divide";
import { SignUp } from "@/components/sign-up";

import { Helmet } from "react-helmet-async";

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Sign Up | Nodus</title>
        <meta
          name="description"
          content="Sign up for Nodus and start building your own autonomous agents today."
        />
      </Helmet>
      <main>
        <DivideX />
        <Contact />
        <DivideX />
      </main>
    </>
  );
}
