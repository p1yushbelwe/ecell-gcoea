import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-neutral-200 font-inter">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
          {/* Section 1 — Brand / Social */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
              E-CELL GCOEA
            </h2>

            <p className="max-w-sm text-sm leading-6 text-neutral-400 text-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
              Building ideas, creating experiences, and bringing people together
              through technology and innovation.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Section 2 — Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-100 text-shadow-[0_2px_6px_rgba(255,255,255,0.15)]">
              Explore
            </h3>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <Link
                href="/events"
                className="w-fit text-neutral-400 transition-all duration-300 hover:translate-x-1 hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              >
                Events
              </Link>

              <Link
                href="/about"
                className="w-fit text-neutral-400 transition-all duration-300 hover:translate-x-1 hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              >
                About
              </Link>

              <Link
                href="/team"
                className="w-fit text-neutral-400 transition-all duration-300 hover:translate-x-1 hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              >
                Team
              </Link>

              <Link
                href="/contact"
                className="w-fit text-neutral-400 transition-all duration-300 hover:translate-x-1 hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Section 3 — Address */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-100 text-shadow-[0_2px_6px_rgba(255,255,255,0.15)]">
              Find Us
            </h3>

            <div className="flex gap-4">
              <FaMapMarkerAlt
                className="mt-1 shrink-0 text-neutral-400"
                size={18}
              />

              <address className="not-italic text-sm leading-6 text-neutral-400 text-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
                <span className="text-neutral-200 tracking-tight font-semibold">E-CELL GCOEA</span>
                <br />
                Government College of Engineering
                <br />
                Amravati, Maharashtra
                <br />
                India
              </address>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-neutral-700 pt-6 text-center text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} E-CELL GCOEA | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
