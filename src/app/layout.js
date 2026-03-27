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
