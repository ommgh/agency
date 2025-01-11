import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className=" bg-black text-white">
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
            className={`hover:text-gray-300 transition-colors text-lg font-bold tracking-widest`}
            style={{ fontFamily: "var(--font-cool-reg)" }}
          >
            Work
          </Link>
          <Link
            href="/insights"
            className={`hover:text-gray-300 transition-colors text-lg font-bold tracking-widest`}
            style={{ fontFamily: "var(--font-cool-reg)" }}
          >
            Insights
          </Link>
          <Link
            href="/about"
            className={`hover:text-gray-300 transition-colors text-lg font-bold tracking-widest`}
            style={{ fontFamily: "var(--font-cool-reg)" }}
          >
            About
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/consultation"
            className={`hidden md:inline-block rounded-lg bg-white text-black px-6 py-2 hover:bg-gray-100 transition-colors`}
            style={{ fontFamily: "var(--font-cool-reg)" }}
          >
            Got an idea ?
          </Link>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
}
