import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import ShinyButton from "../ui/shiny-button";

export default function Navbar() {
  return (
    <div className="">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link
          href="/"
          className={`text-4xl`}
          style={{ fontFamily: "var(--font-broch-reg)" }}
        >
          synapse
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/work"
            className={`hover:text-orange-500 transition-colors text-lg font-bold tracking-widest`}
            style={{ fontFamily: "var(--font-cool-reg)" }}
          >
            Work
          </Link>
          <Link
            href="/insights"
            className={`hover:text-orange-500 transition-colors text-lg font-bold tracking-widest`}
            style={{ fontFamily: "var(--font-cool-reg)" }}
          >
            Insights
          </Link>
          <Link
            href="/about"
            className={`hover:text-orange-500 transition-colors text-lg font-bold tracking-widest`}
            style={{ fontFamily: "var(--font-cool-reg)" }}
          >
            About
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/consultation">
            <ShinyButton
              style={{ fontFamily: "var(--font-cool-reg)" }}
              className="hidden md:inline-block font-bold tracking-widest rounded-lg bg-white text-xl text-black px-6 py-2"
            >
              Got an idea ?
            </ShinyButton>
          </Link>
          <button className="md:hidden text-black">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
}
