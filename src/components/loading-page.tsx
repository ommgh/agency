"use client";

import localFont from "next/font/local";
import { useEffect, useState } from "react";
const brochilloRegular = localFont({
  src: "./fonts/BrohilloRegular.ttf",
  display: "swap",
  variable: "--font-broch-reg",
});

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulating loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-black">
      <h1
        className={`absolute text-[120px] font-bold uppercase tracking-tighter text-transparent ${brochilloRegular.className}`}
        style={{
          WebkitTextStroke: "2px white",
        }}
      >
        sync
      </h1>

      <h1
        className="absolute text-[120px] font-bold uppercase tracking-tighter text-white"
        style={{
          clipPath: `inset(${100 - progress}% 0 0 0)`,
          transition: "clip-path 0.3s ease-in-out",
        }}
      >
        sync
      </h1>

      <div className="absolute bottom-10 text-sm text-white/50">
        Loading... {progress}%
      </div>
    </div>
  );
}
