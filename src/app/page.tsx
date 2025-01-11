"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import Curtain from "@/components/curtain/curtain";
import LandingPage from "@/components/landingPage/LandingPage";

export default function Component() {
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".curtain", { opacity: 1 }, { opacity: 0, duration: 1 });
    tl.fromTo(
      ".content",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power1.out" }
    );
  }, []);

  return (
    <div>
      {showCurtain ? (
        <Curtain onComplete={() => setShowCurtain(false)} />
      ) : (
        <div className="min-h-screen relative flex flex-col overflow-y-hidden">
          <LandingPage />
        </div>
      )}
    </div>
  );
}
