import Link from "next/link";
import { Menu } from "lucide-react";
import localFont from "next/font/local";

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

export default function Component() {
  return (
    <div className={`min-h-screen bg-black text-white`}>
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className={`text-5xl ${brochilloRegular.className}`}>
          won
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/work" className="hover:text-gray-300 transition-colors">
            Work
          </Link>
          <Link
            href="/insights"
            className="hover:text-gray-300 transition-colors"
          >
            Insights
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/consultation"
            className="hidden md:inline-block rounded-full bg-white text-black px-6 py-2 font-medium hover:bg-gray-100 transition-colors"
          >
            Free consultation
          </Link>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-12 md:pt-24 pb-16 text-center">
        <div
          className={`inline-block px-4 md:px-6 py-2 mb-8  md:mb-16 rounded-full border border-gray-800 text-xs md:text-sm lg:text-xl tracking-wide ${coolVeticaRegular.className}`}
        >
          YOUR EXTERNAL IN-HOUSE TECH TEAM
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-6 md:mb-8 lg:max-w-[18ch] mx-auto ${coolVeticaRegular.className}`}
        >
          Tech that scales with your business
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white mx-auto mb-8 md:mb-16">
          We create brands and websites backed by data to drive revenue growth.
        </p>

        <div className="relative inline-block">
          <Link
            href="/trial"
            className="inline-block rounded-full bg-white text-black px-6 md:px-8 py-2 md:py-3 font-medium text-base md:text-lg hover:bg-gray-100 transition-colors relative z-10"
          >
            Try a 7 day trial
          </Link>
          <div className="absolute -inset-4 bg-white/20 blur-xl rounded-full -z-10" />
        </div>
      </main>
    </div>
  );
}
