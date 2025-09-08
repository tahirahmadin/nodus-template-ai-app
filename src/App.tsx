import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "./context/theme-provider";
import { Helmet } from "react-helmet-async";

// Import pages
import Home from "./page";
import About from "./about/page";
import Blog from "./blog/page";
import BlogPost from "./blog/[slug]/page";
import Careers from "./careers/page";
import Contact from "./contact/page";
import Playground from "./playground/page";
import Pricing from "./pricing/page";
import SignIn from "./sign-in/page";
import SignUp from "./sign-up/page";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="font-primary h-full bg-white [--pattern-fg:var(--color-charcoal-900)]/10 dark:bg-black dark:[--pattern-fg:var(--color-neutral-100)]/30">
        <Helmet>
          <title>Notus: Build and Manage AI-Driven Agentic Workflows</title>
          <meta
            name="description"
            content="Empower your technical teams to create, simulate and manage AI-driven workflows visually. Notus provides an intuitive platform for developing and testing agentic systems, helping you build the next generation of intelligent applications with confidence."
          />
        </Helmet>
        <main className="h-full bg-white antialiased dark:bg-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
