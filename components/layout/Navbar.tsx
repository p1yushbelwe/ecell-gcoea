"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  defaultNavbarItems,
  navbarItemHref,
  type NavbarItem,
} from "./navigation";
import MobileNavigation from "./MobileNavigation";

type NavbarProps = {
  items?: NavbarItem[];
};

export default function Navbar({ items = defaultNavbarItems }: NavbarProps) {
  const router = useRouter();

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavbarItem,
  ) => {
    if (!("sectionId" in item) || !item.sectionId) return;

    const section = document.getElementById(item.sectionId);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-3 font-inter border border-b-neutral-800">
      {/* Logo + Text (always visible) */}
      <div
        className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src={`https://ik.imagekit.io/ecellgcoea/ecell-website/ecellLogo.webp`}
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

      <MobileNavigation items={items} />
      <ul className="hidden md:flex items-center gap-1 lg:gap-2">
        {items.map((item) => (
          <li key={`${item.label}-${navbarItemHref(item)}`}>
            <button
              className="px-3 py-1.5 text-sm lg:text-base text-neutral-200 
                         rounded-md hover:bg-neutral-800 hover:text-white 
                         transition-colors duration-200"
            >
              <Link
                href={navbarItemHref(item)}
                onClick={(event) => handleSectionClick(event, item)}
              >
                {item.label}
              </Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
