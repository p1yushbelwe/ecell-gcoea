import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import LenisScrollProvider from "./provider/LenisScrollProvider";
import Lenis from "lenis";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "E-Cell GCOEA | Entrepreneurship Cell of Government College of Engineering, Amravati",
  description:
    "Official website of E-Cell GCOEA – The Entrepreneurship Cell of Government College of Engineering, Amravati. Established in 2022, we empower students to innovate, build startups, and become job creators through events, workshops, mentorship & community.",
  keywords: [
    "E-Cell GCOEA",
    "ECell GCOEA",
    "Entrepreneurship Cell GCOEA",
    "GCOEA E-Cell",
    "Government College of Engineering Amravati",
    "Startup",
    "Entrepreneurship",
    "E-Sammelan",
    "Pitch",
    "Innovation",
    "Amravati",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontInter.variable} ${geistMono.variable} h-full antialiased scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-950 scrollbar-gutter-stable scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <LenisScrollProvider> {children}</LenisScrollProvider>{" "}
      </body>
    </html>
  );
}
