import Services from "@/app/services";
import Reviews from "./reviews";
import Hero from "./hero";
import Pricing from "./pricing";
import CTA from "./cta";

export default function Component() {
  return (
    <div className={`min-h-screen bg-black text-white`}>
      <Hero />
      <Services />
      <Reviews />
      <Pricing />
      <CTA />
    </div>
  );
}
