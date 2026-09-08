"use client";
import Image from "next/image";
import Link from "next/link";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-3 font-inter">
      {/* Logo + Text (always visible) */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Image
          src={`/ecellLogo.webp?v=1`}
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
      <ul className="hidden md:flex items-center gap-1 lg:gap-2">
        {["About", "Events", "Team", "Contact"].map((item) => (
          <li key={item}>
            <button
              onClick={() => {
                scrollToSection(item.toLowerCase());
              }}
              className="px-3 py-1.5 text-sm lg:text-base text-neutral-200 
                         rounded-md hover:bg-neutral-800 hover:text-white 
                         transition-colors duration-200"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
