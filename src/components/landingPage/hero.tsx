import Link from "next/link";
import React from "react";
import PushableButton from "../PushableButton";

export default function Hero() {
  return (
    <main className="container mx-auto px-4 pt-12 md:pt-24 pb-16 text-center">
      <div
        style={{ fontFamily: "var(--font-cool-reg)" }}
        className={`inline-block px-4 md:px-6 py-2 mb-8  md:mb-16 rounded-full border border-gray-800 text-xs md:text-sm lg:text-xl tracking-wide`}
      >
        YOUR EXTERNAL IN-HOUSE TECH TEAM
      </div>

      <h1
        style={{ fontFamily: "var(--font-cool-reg)" }}
        className={`text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-6 md:mb-8 lg:max-w-[18ch] mx-auto tracking-wide`}
      >
        Tech that scales with your business
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white mx-auto mb-8 md:mb-16">
        We create brands and websites backed by data to drive revenue growth.
      </p>

      <div className="relative inline-block">
        <Link href="https://cal.com/ommishra/15min">
          <PushableButton text="Book a 15-Min Call" />
        </Link>
      </div>
    </main>
  );
}
