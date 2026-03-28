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
  title: {
    default:
      "Scrap Buyers in Chennai | JJ Scrapbuyers – Copper, Iron, AC, Battery Scrap",
    template: "%s | JJ Scrapbuyers",
  },

  description:
    "JJ Scrapbuyers is a trusted scrap buyer in Chennai dealing in iron, steel, copper, aluminium, AC, battery and electrical scrap. Free doorstep pickup with instant payment.",

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
  metadataBase: new URL("https://jjscrapbuyers.com"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "JJ Scrapbuyers – Best Scrap Buyers in Chennai with Doorstep Pickup",
    description:
      "Sell your scrap at best price in Chennai. We buy iron, copper, aluminium, AC, batteries and more with instant payment.",
    url: "https://jjscrapbuyers.com",
    siteName: "JJ Scrapbuyers",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JJ Scrapbuyers Chennai",
    description:
      "Trusted scrap buyers in Chennai offering best prices and doorstep pickup.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        {/* 🔥 SCHEMA MARKUP (VERY IMPORTANT) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "JJ Scrapbuyers",
              image: "https://jjscrapbuyers.com/logo.png",
              url: "https://jjscrapbuyers.com",
              telephone: "+919789075963",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              areaServed: "Chennai",
              serviceType: [
                "Metal Scrap Buying",
                "Battery Scrap Buying",
                "AC Scrap Buying",
                "Electrical Scrap Buying",
              ],
              description:
                "JJ Scrapbuyers is a leading scrap buyer in Chennai offering doorstep pickup and best prices for all types of scrap including iron, copper, aluminium, AC, batteries and electrical scrap.",
            }),
          }}
        />

        {children}
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}