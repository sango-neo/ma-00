import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar9 } from "@/components/Navbar9";
import { Footer8 } from "@/sections/Footer8";
import CookieBanner from "@/components/CookieBanner";

const interVF = localFont({
  src: "./fonts/InterVF.woff2",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Moago Home Page",
  description: "Moago Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interVF.variable} antialiased font-sans bg-white text-[#222]`}
      >
        <Navbar9 />
        {children}
        <Footer8 />
        <CookieBanner />
      </body>
    </html>
  );
}
