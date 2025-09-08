import { DivideX } from "@/components/divide";
import { SignIn } from "@/components/sign-in";

import { Helmet } from "react-helmet-async";

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Sign In | Nodus</title>
        <meta
          name="description"
          content="Sign in to Nodus and start building your own autonomous agents today."
        />
      </Helmet>
      <main>
        <DivideX />
        <SignIn />
        <DivideX />
      </main>
    </>
  );
}
