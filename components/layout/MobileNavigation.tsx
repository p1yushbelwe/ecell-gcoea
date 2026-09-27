"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { navbarItemHref, type NavbarItem } from "./navigation";

type MobileNavigationProps = {
  items: NavbarItem[];
};

export default function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavbarItem,
  ) => {
    if (!("sectionId" in item) || !item.sectionId) return;

    const section = document.getElementById(item.sectionId);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  if (items.length === 0) return null;

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/8 text-neutral-100 shadow-sm transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute right-0 top-full z-40 mt-3 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-white/10 bg-neutral-950/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          <p className="px-3 pb-1 pt-2 text-[10px] font-semibold text-neutral-500">
            NAVIGATION
          </p>
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={`${item.label}-${navbarItemHref(item)}`}>
                <Link
                  href={navbarItemHref(item)}
                  className="flex min-h-11 items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-neutral-200 transition-colors hover:bg-sky-300/10 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300"
                  onClick={(event) => {
                    handleSectionClick(event, item);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                  <ChevronRight aria-hidden="true" className="h-4 w-4 text-neutral-500" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}