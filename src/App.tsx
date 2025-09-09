import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "../landingSettings/context/theme-provider";
import { Navbar } from "../notusComponents/navbar";
import { Footer } from "../notusComponents/footer";

// Import all page components
import Home from "./pages/landingpage/Home";
import About from "./pages/landingpage/About";
import Blog from "./pages/landingpage/Blog";
import BlogPost from "./pages/landingpage/BlogPost";
import Careers from "./pages/landingpage/Careers";
import Contact from "./pages/landingpage/Contact";
import Playground from "./pages/landingpage/Playground";
import Pricing from "./pages/landingpage/Pricing";
import SignIn from "./pages/landingpage/SignIn";
import SignUp from "./pages/landingpage/SignUp";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-black">
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
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;