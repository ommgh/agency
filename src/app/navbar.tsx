import { Menu } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import React from "react";
const coolVeticaRegular = localFont({
  src: "./fonts/Coolvetica-Regular.ttf",
  display: "swap",
  variable: "--font-cool-reg",
});

const brochilloRegular = localFont({
  src: "./fonts/BrohilloRegular.ttf",
  display: "swap",
  variable: "--font-broch-reg",
});

export default function Navbar() {
  return (
    <div className=" bg-black text-white">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className={`text-5xl ${brochilloRegular.className}`}>
          sync
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/work"
            className={`hover:text-gray-300 transition-colors text-lg ${coolVeticaRegular.className}`}
          >
            Work
          </Link>
          <Link
            href="/insights"
            className={`hover:text-gray-300 transition-colors text-lg ${coolVeticaRegular.className}`}
          >
            Insights
          </Link>
          <Link
            href="/about"
            className={`hover:text-gray-300 transition-colors text-lg ${coolVeticaRegular.className}`}
          >
            About
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/consultation"
            className={`hidden md:inline-block rounded-full bg-white text-black px-6 py-2 hover:bg-gray-100 transition-colors ${coolVeticaRegular.className}`}
          >
            Free consultation
          </Link>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
}
