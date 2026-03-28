import "./globals.css";
import { Fraunces, Outfit } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/Phonecall";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "JJ Scrap Buyers",
  description:
    "JJ Scrap Buyers is a trusted scrap buyer in Chennai dealing in metal scrap, old batteries, AC units, and electrical scrap. Doorstep pickup, transparent weighing, and best prices guaranteed.",

  keywords: [
    // Core
    "scrap buyer Chennai",
    "scrap buyers in Chennai",
    "kabadiwala Chennai",
    "scrap dealer Chennai",

    // Metal scrap
    "iron scrap buyer Chennai",
    "steel scrap buyer Chennai",
    "copper scrap buyer Chennai",
    "aluminium scrap buyer Chennai",
    "brass scrap buyer Chennai",
    "metal scrap dealers Chennai",

    // Battery scrap 🔥
    "battery scrap buyer Chennai",
    "old battery buyer Chennai",
    "inverter battery scrap Chennai",
    "UPS battery scrap buyer",
    "lead acid battery scrap",

    // AC scrap 🔥
    "AC scrap buyer Chennai",
    "old AC buyer Chennai",
    "air conditioner scrap Chennai",
    "split AC scrap buyer",
    "window AC scrap buyer",

    // Electrical scrap 🔥
    "electrical scrap buyer Chennai",
    "e-waste buyer Chennai",
    "wire scrap buyer Chennai",
    "cable scrap buyer Chennai",
    "electronics scrap buyer",

    // Intent-based
    "scrap pickup Chennai",
    "doorstep scrap pickup",
    "sell scrap in Chennai",
    "bulk scrap buyer Chennai",

    // Local / search behavior
    "scrap buyers near me",
    "kabadiwala near me",
    "raddi wala Chennai",
  ],

  authors: [{ name: "JJ Scrap Buyers" }],
  creator: "JJ Scrap Buyers",

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://jjscrapbuyers.com"),

  alternates: {
    canonical: "https://jjscrapbuyers.com",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}
