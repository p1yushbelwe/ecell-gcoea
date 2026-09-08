import DotGrid from "../DotGrid";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaLinkedin,
  FaDotCircle,
  FaCommentDots,
  FaHandPointDown,
} from "react-icons/fa";
import Navbar from "../layout/Navbar";
import { FaCircleDot, FaHandPointer } from "react-icons/fa6";
import { AuroraText } from "../ui/aurora-text";

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
          <div className="text-center max-w-4xl mx-auto">
            {/* Tags */}
            <div className="flex justify-center">
              <ul className="list-disc flex gap-6 *:text-blue-400/80 mb-8 *:font-medium *:text-shadow-lg border text-sm border-blue-900 bg-blue-950/40 px-6 py-1  rounded-full">
                <li>Learn</li>
                <li>Build</li>
                <li>Innovate</li>
              </ul>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4 sm:mb-4">
              <span className="text-neutral-100">The</span>{" "}
              {/* <span className="text-blue-500/90">Entrepreneurship Cell</span> */}
              <AuroraText
              colors={['#1D4ED8','#3B82F6', '#7DD3FC']}
              speed={2.5}
              >Entrepreneurship Cell</AuroraText>
            </h1>

            {/* College Name */}
            <p className="text-lg/5 sm:text-xl/7 md:text-2xl/7 lg:text-3xl/7 font-medium text-neutral-100 tracking-normal">
              Government College Of Engineering
              <br />
              <span className="sm:ml-1">Amravati</span>
            </p>

            {/* Tagline */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl italic text-neutral-300/90">
              "Empowering the Next Generation of Founders"
            </p>

            {/* Social Icons */}
            <div className="mt-8 sm:mt-10">
              <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {[
                  { icon: <FaInstagram />, label: "Instagram" },
                  { icon: <FaFacebook />, label: "Facebook" },
                  { icon: <FaLinkedin />, label: "LinkedIn" },
                  { icon: <FaYoutube />, label: "YouTube" },
                  { icon: <FaEnvelope />, label: "Email" },
                ].map((item, i) => (
                  <li key={i}>
                    <button
                      aria-label={item.label}
                      className="p-2.5 sm:p-3 rounded-full bg-neutral-800 border border-neutral-600 text-white 
                                 shadow-sm shadow-neutral-200/10 
                                 hover:bg-neutral-700 hover:border-neutral-500 
                                 transition-all duration-200 active:scale-95"
                    >
                      <span className="text-lg sm:text-xl">{item.icon}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
