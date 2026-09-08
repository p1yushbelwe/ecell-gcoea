
import DotGrid from "../DotGrid";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

import Navbar from "../layout/Navbar";
import { AuroraText } from "../ui/aurora-text";

const LinkedinLink =
  "https://in.linkedin.com/company/e-cell-gcoea";

const YoutubeLink =
  "https://www.youtube.com/@e-cellgcoea";

const InstagramLink =
  "https://www.instagram.com/ecellgcoea/";

const FacebookLink =
  "https://www.facebook.com/ecellgcoea/";

const EmailLink =
  "mailto:ecell@gcoea.ac.in";

export default function Hero() {
  return (
    <div>
      <div className="relative overflow-hidden bg-neutral-950">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={3}
            gap={15}
            baseColor="#404040"
            activeColor="#73C6FB"
            proximity={110}
            shockRadius={1}
            shockStrength={0}
            resistance={1000}
            returnDuration={0}
          />
        </div>

        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[calc(75dvh)] sm:min-h-[calc(100dvh-80px)] items-center justify-center px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">

            {/* Tags */}
            <div className="flex justify-center">
              <ul className="mb-8 flex list-disc gap-6 rounded-full border border-blue-900 bg-blue-950/40 px-6 py-1 text-sm *:font-medium *:text-blue-400/80 *:text-shadow-lg">
                <li>Learn</li>
                <li>Build</li>
                <li>Innovate</li>
              </ul>
            </div>

            {/* Main Title */}
            <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-neutral-100">The</span>{" "}

              <AuroraText
                colors={["#1D4ED8", "#3B82F6", "#7DD3FC"]}
                speed={2.5}
              >
                Entrepreneurship Cell
              </AuroraText>
            </h1>

            {/* College Name */}
            <p className="text-lg/5 font-medium tracking-normal text-neutral-100 sm:text-xl/7 md:text-2xl/7 lg:text-3xl/7">
              Government College Of Engineering
              <br />
              <span className="sm:ml-1">Amravati</span>
            </p>

            {/* Tagline */}
            <p className="mt-4 text-base italic text-neutral-300/90 sm:mt-6 sm:text-lg md:text-xl">
              "Empowering the Next Generation of Founders"
            </p>

            {/* Social Icons */}
            <div className="mt-8 sm:mt-10">
              <ul className="flex flex-wrap justify-center gap-2">

                {/* Instagram */}
                <li>
                  <a
                    href={InstagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex rounded-xl border border-neutral-600 bg-neutral-800 p-2.5 text-white shadow-sm shadow-neutral-200/10 transition-all duration-200 hover:border-neutral-500 hover:bg-neutral-700 active:scale-95 sm:p-2"
                  >
                    <span className="text-lg sm:text-xl">
                      <FaInstagram />
                    </span>
                  </a>
                </li>

                {/* Facebook */}
                <li>
                  <a
                    href={FacebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex rounded-xl border border-neutral-600 bg-neutral-800 p-2.5 text-white shadow-sm shadow-neutral-200/10 transition-all duration-200 hover:border-neutral-500 hover:bg-neutral-700 active:scale-95 sm:p-2"
                  >
                    <span className="text-lg sm:text-xl">
                      <FaFacebook />
                    </span>
                  </a>
                </li>

                {/* LinkedIn */}
                <li>
                  <a
                    href={LinkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex rounded-xl border border-neutral-600 bg-neutral-800 p-2.5 text-white shadow-sm shadow-neutral-200/10 transition-all duration-200 hover:border-neutral-500 hover:bg-neutral-700 active:scale-95 sm:p-2"
                  >
                    <span className="text-lg sm:text-xl">
                      <FaLinkedin />
                    </span>
                  </a>
                </li>

                {/* YouTube */}
                <li>
                  <a
                    href={YoutubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="inline-flex rounded-xl border border-neutral-600 bg-neutral-800 p-2.5 text-white shadow-sm shadow-neutral-200/10 transition-all duration-200 hover:border-neutral-500 hover:bg-neutral-700 active:scale-95 sm:p-2"
                  >
                    <span className="text-lg sm:text-xl">
                      <FaYoutube />
                    </span>
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href={EmailLink}
                    aria-label="Email"
                    className="inline-flex rounded-xl border border-neutral-600 bg-neutral-800 p-2.5 text-white shadow-sm shadow-neutral-200/10 transition-all duration-200 hover:border-neutral-500 hover:bg-neutral-700 active:scale-95 sm:p-2"
                  >
                    <span className="text-lg sm:text-xl">
                      <FaEnvelope />
                    </span>
                  </a>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

