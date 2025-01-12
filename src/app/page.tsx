"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import Curtain from "@/components/curtain/curtain";
import LandingPage from "@/components/landingPage/LandingPage";

export default function Component() {
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    document.body.style.overflow = "hidden";

    tl.fromTo(".curtain", { opacity: 1 }, { opacity: 0, duration: 1 }).fromTo(
      ".content",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power1.out",
        onComplete: () => {
          document.body.style.overflow = "unset";
        },
      }
    );
  }, []);

  return (
    <div>
      {showCurtain ? (
        <Curtain onComplete={() => setShowCurtain(false)} />
      ) : (
        <div className="min-h-screen relative flex flex-col">
          <LandingPage />
        </div>
      )}
    </div>
  );
}
