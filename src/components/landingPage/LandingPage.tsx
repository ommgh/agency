import CTA from "./cta";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Pricing from "./pricing";
import Projects from "./projects";
import Reviews from "./reviews";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Pricing />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}

export default LandingPage;
