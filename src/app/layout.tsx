import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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

export const metadata: Metadata = {
  title: "Synapse",
  description: "Synapse: the best development agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ cursor: 'url("/icons/cursor.svg"), auto' }}>
      <body
        className={`${coolVeticaRegular.variable} ${brochilloRegular.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
