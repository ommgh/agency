import CTA from "./cta";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Pricing from "./pricing";
import Reviews from "./reviews";
import Services from "./services";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CTA />
      <Services />
      <Pricing />
      <Reviews />
      <Footer />
    </>
  );
}

export default LandingPage;
