"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";

function Curtain({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading((prev) => {
        if (prev < 100) {
          return prev + Math.min(100 - prev, Math.ceil(prev / 10) + 1);
        } else {
          clearInterval(interval);
          setIsCompleted(true);
          return 100;
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isCompleted) {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.to(".curtain1", {
        y: "-120%",
        duration: 1.5,
        ease: "power1.out",
      }).to(".curtain2", {
        y: "-120%",
        duration: 0.75,
        ease: "power1.out",
      });
    }
  }, [isCompleted, onComplete]);

  return (
    <main className="h-screen w-screen relative flex justify-center items-center bg-black p-5">
      <div className="curtain1 absolute h-screen w-screen bg-black flex justify-end items-end z-20">
        <p
          className="text-[150px] font-bold text-white"
          style={{ fontFamily: "var(--font-cool-reg)" }}
        >
          {isLoading}%
        </p>
      </div>
      <div className="curtain2 absolute h-screen w-screen bg-orange-600 z-10"></div>
    </main>
  );
}

export default Curtain;
