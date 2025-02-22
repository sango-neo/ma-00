import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar9 } from "@/components/Navbar9";
import { Footer8 } from "@/sections/Footer8";
import { Toaster } from "@/components/ui/toaster";
import { DevelopmentBanner } from "@/components/DevelopmentBanner";
import  TermlyCMP from "@/components/TermlyCMP";

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
        <TermlyCMP websiteUUID="e647e4cf-c73a-4a22-bf34-81eeacca8663" autoBlock masterConsentsOrigin />
        <Toaster />
        <DevelopmentBanner />
      </body>
    </html>
  );
}
