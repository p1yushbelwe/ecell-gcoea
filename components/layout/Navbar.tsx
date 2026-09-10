"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong, FaLeftRight } from "react-icons/fa6";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

type l = {
  label: string;
  href: string;
};

const links = [
  { label: "About" },
  { label: "Events" },
  { label: "Teams", href: "/team" },
  { label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-3 font-inter border border-b-neutral-800">
      {/* Logo + Text (always visible) */}
      <div
        className="flex items-center gap-2 sm:gap-3 cursor-pointer "
        onClick={() => (window.location.href = "/")}
      >
        <Image
          src={`https://ik.imagekit.io/feid7f6mz/ecellLogo.webp`}
          alt="E-Cell GCOEA Logo"
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          priority
        />
        <p className="text-neutral-100 text-lg sm:text-xl font-semibold tracking-tight">
          E-CELL GCOEA
        </p>
      </div>

      {/* Navigation Links - Hidden on mobile */}
      <p id="c" className="flex  justify-center items-center gap-1 selection:none cursor:pointer sm:hidden text-base bg-blue-700 text-neutral-50 px-2 rounded-sm active:scale-98">
        <Link href={"/team"}>Team</Link> <FaArrowRight />
      </p>
      <ul className="hidden md:flex items-center gap-1 lg:gap-2">
        {links.map((item, i) => (
          <li key={i}>
            <button
              onClick={() => {
                scrollToSection(item.label.toLowerCase());
              }}
              className="px-3 py-1.5 text-sm lg:text-base text-neutral-200 
                         rounded-md hover:bg-neutral-800 hover:text-white 
                         transition-colors duration-200"
            >
              {item.href ? (
                <Link href={"" + item.href}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
