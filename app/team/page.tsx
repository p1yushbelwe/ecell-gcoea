"use client";
import Navbar from "@/components/layout/Navbar";
import team from "@/app/team/team.json";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Footer from "@/components/section/Footer";
import { useState } from "react";
import { motion } from "motion/react";

export default function Teams() {
  return (
    <div className="bg-neutral-950 font-inter selection:bg-gray-500/20 selection:text-blue-600/80">
      <Navbar />
      <CardContainer />
      <Footer />
    </div>
  );
}

export function CardContainer() {
  const [search, setSearch] = useState("");

  const filterItem = team.filter((member) =>
    member.Name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="font-inter min-h-dvh">
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl tracking-tighter font-medium text-neutral-100 text-shadow-xs">
          Meet Our Team
        </h1>
        <p className="text-lg text-neutral-400 px-3 sm:w-3/4 mx-auto mt-4 leading-7 text-shadow-xs text-pretty">
          Our team is a diverse group of passionate individuals. We work
          together to turn ideas into meaningful initiatives. Each member brings
          unique skills, creativity, and perspective. Together, we foster
          innovation, entrepreneurship, and collaboration. Meet the people
          driving E-Cell GCOEA forward.
        </p>
      </motion.div>

      <div className="sm:flex sm:justify-center px-2 text-base sm:text-sm mt-16 sm:mt-8 mb-4 sm:mb-8">
        <input
          type="text"
          placeholder="Search your name"
          className="bg-neutral-800 text-neutral-100 px-2 py-1 rounded-sm outline outline-neutral-600 focus:outline-blue-800"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="sm:w-4/5 border mt-4 border-neutral-700/20 rounded-md mx-2 sm:mx-auto bg-neutral-900/50">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4">
          {filterItem.map((member, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={i}
              className="flex flex-col p-1 border border-neutral-700 rounded-md bg-neutral-900/60"
            >
              <div>
                <Image
                  src={member.Image}
                  width={500}
                  height={500}
                  className="object-contain aspect-square bg-neutral-950"
                  alt={member.Name}
                  loading="lazy"
                />
              </div>
              <div className="px-2 py-4">
                <h1 className="text-neutral-100 text-shadow-xs text-lg font-semibold tracking-tight leading-5">
                  {member.Name}
                </h1>
                <p className="text-neutral-300 text-shadow-lg text-sm leading-4 mt-1 text-balance">
                  {member.Label}
                </p>
              </div>
              <div className="px-2 py-2 mt-auto">
                <ul className="flex text-lg text-neutral-50 *:border *:border-neutral-700 *:bg-neutral-800/75 *:cursor-pointer *:rounded-md *:p-1 gap-1.5 *:hover:scale-105 *:transition *:duration-150 *:hover:bg-neutral-800">
                  <li>
                    <Link href={member.Linkedin}>
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link href={member.Twitter}>
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href={"mailto:" + member.Email}>
                      <FaEnvelope />
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
