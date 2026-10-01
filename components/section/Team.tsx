// "use client"
import { FaTeamspeak } from "react-icons/fa";
import Link from "next/link";
import team from '@/app/team/team.json'
import {motion } from 'motion/react';


export default function Team() {
  return (
    <div  id="team" className="bg-neutral-950/98 font-inter min-h-dvh pt-10">
      <motion.div className="flex flex-col items-center" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1   }}
        transition={{ duration: 0.5,delay: 0.1, ease: "easeInOut" }}>
        <h1 className="text-neutral-100 tracking-tight text-center text-4xl"
        
        >
          Meet our team
        </h1>
        <p className="text-center w-full px-8 text-pretty sm:px-0 sm:w-3/6 text-neutral-400 mt-4">
          We’re more than just a team — we’re a group of passionate individuals
          united by shared values, mutual respect, and a genuine love for what
          we do. Each of us brings unique skills, experiences, and perspectives
          that come together to create something greater than the sum of its
          parts.
        </p>
      </motion.div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 px-8 sm:px-8 md:px-16 lg:px-32 xl:px-64 my-8">
          {" "}
          {team.slice(0,5).map((member, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-xl shadow-2xs aspect-4/5 md:col-span-2 ${
                i === 3 ? "md:col-start-2" : i === 4 ? "md:col-start-4" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                className="h-full w-full object-cover"
                src={member.Image}
                alt={"Image not found"}
                loading="eager"
              />

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-2 pt-12 text-neutral-200">
                <h2 className="text-lg font-semibold leading-4">{member.Name}</h2>
                <p className="text-sm text-neutral-200 leading-4 mt-1">{member.Label}</p>
              </div>
            </motion.div>
          ))}{" "}
        </div>
        <motion.div className="flex justify-center items-center"
        initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1,  }}
        transition={{ duration: 0.5, delay: 0.1 }}>
          <button className="my-8 text-center bg-blue-700 text-neutral-50 shadow-xs rounded-lg text-base sm:text-sm font-normal px-4 py-1 tracking-tight active:scale-98 hover:bg-blue-700/90 transition duration-150 cursor-pointer">
            <p><Link href="/team">View Team</Link></p>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
