import Link from "next/link";
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

export default function Footer() {
  return (
    <footer
      className={`bg-black text-white py-16 tracking-wider ${coolVeticaRegular.className}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-3">
            <Link
              href="/"
              className={`text-4xl font-bold tracking-tighter mb-6 block ${brochilloRegular.className}`}
            >
              sync
            </Link>
            <p className="text-xl leading-relaxed text-gray-300 mr-5">
              Tech agency, based in India shiping for the world.
            </p>
          </div>

          {/* Won Agency Links */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-medium mb-6">Won Agency</h3>
            <nav className="space-y-4">
              <Link
                href="/home"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/work"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Work
              </Link>
              <Link
                href="/insights"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Insights
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Case Studies */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-6">Case Studies</h3>
            <nav className="space-y-4">
              <Link
                href="/case-studies/jefa"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                yardstoacres
              </Link>
              <Link
                href="/case-studies/peopl"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                nexabetx
              </Link>
              <Link
                href="/case-studies/panelista"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                project
              </Link>
            </nav>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-6">Address</h3>
            <address className="not-italic space-y-4">
              <p className="text-gray-300">Marquise Square</p>
              <p className="text-gray-300">Business Bay</p>
              <p className="text-gray-300">Dubai</p>
              <p className="text-gray-300">United Arab Emirates</p>
            </address>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-6">Follow us</h3>
            <nav className="space-y-4">
              <Link
                href="https://instagram.com"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="https://linkedin.com"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://awwwards.com"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Awwwards
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors mb-4 md:mb-0"
          >
            Privacy Policy
          </Link>
          <p className="text-gray-400">
            © Sync Agency 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
