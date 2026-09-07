"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Link from "next/link";
import Events from "@/components/section/Events";
import Speaker from "@/components/section/Speaker";
import Team from "@/components/section/Team";
// import Reach from "@/components/section/Contact";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <div
      className="selection:bg-gray-500/20 selection:text-blue-600/80">
      <Hero />
      <About />
      <Events />
      <Speaker />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
