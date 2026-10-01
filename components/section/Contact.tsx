import { motion } from "motion/react";

import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Button } from "@base-ui/react";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaFaceAngry, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const LinkedinLink = "https://in.linkedin.com/company/e-cell-gcoea";
const YoutubeLink = "https://www.youtube.com/@e-cellgcoea";
const InstagramLink = "https://www.instagram.com/ecellgcoea/";
const FacebookLink = "https://www.facebook.com/ecellgcoea/";

const maps = "https://maps.app.goo.gl/1KhJ281hVddNUrLV9";
export default function Contact() {
  return (
    <div className="min-h-[80dvh] pb-16 bg-neutral-950/99 font-inter">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.15, ease: "easeOut" }}
      >
        <h1
          id="contact"
          className="tracking-tight text-center text-shadow-neutral-50 text-neutral-100 px-8 text-4xl font-medium pt-12"
        >
          Reach us
        </h1>
        <p className="text-center w-7/8 sm:w-1/2 mt-4 mx-auto font-normal text-neutral-400 text-pretty ">
          From impressions to impact — discover how to expand your visibility,
          engage the right audience, and grow faster with less effort. Stop
          settling for empty views and start building meaningful connections
          that actually move the needle. Learn proven strategies to cut through
          the noise, attract people who genuinely care about what you offer, and
          turn attention into loyal followers, customers, and lasting results —
          all while working smarter, not harder.
        </p>
      </motion.div>

      <div className="*:border *:bg-zinc-900/20 *:shadow-xs *:border-neutral-800 flex flex-col sm:flex-row sm:flex-nowrap gap-4  w-[90dvw] sm:w-[60dvw] mx-auto mt-8 *:rounded-lg">
        <motion.div
          className="flex-1 px-6 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="flex gap-2 items-center text-neutral-100 text-xl font-semibold tracking-tight">
            <div className="rounded-sm border border-blue-400/15 bg-blue-400/10 p-2 sm:p-1 text-blue-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <FaEnvelope />
            </div>
            <p>Email</p>
          </h1>
          <p className="text-neutral-400 text-base sm:text-sm mt-4 ">
            Have a question or want to work together? Drop us an email and we’ll
            get back to you.
          </p>
          <button className=" text-neutral-200 tracking-tight text-base sm:text-sm rounded-sm transition duration-100 my-2">
            ecell@gcoea.ac.in
          </button>
          <br />
          <button className="text-blue-500 tracking-normal text-base sm:text-sm active:text-neutral-300 active:scale-98 transition duration-100 my-2 hover:text-neutral-300">
            <Link
              href={"mailto:ecell@gcoea.ac.in"}
              className="flex items-center"
            >
              Send a mail <ChevronRight />
            </Link>
          </button>
        </motion.div>
        <motion.div
          className="flex-1 px-6 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="flex gap-2 items-center text-neutral-100 text-xl font-semibold tracking-tight">
            <div className="rounded-sm border border-blue-400/15 bg-blue-400/10 p-2 sm:p-1 text-blue-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <FaTwitter />
            </div>
            Social
          </h1>
          <p className="text-neutral-400 text-base sm:text-sm mt-4 ">
            Stay connected and see what we’re working on. Follow us across our
            social channels.
          </p>
          {/* <button className="bg-neutral-200 text-neutral-950 tracking-tight text-base sm:text-sm px-2 rounded-sm hover:bg-neutral-100/90 active:scale-98 transition duration-100 mt-6"> */}

          <div
            className={
              " border-neutral-700/80 text-neutral-950 mt-4 rounded-sm py-2"
            }
          >
            <ul className="flex gap-4 items-center justify-start text-2xl sm:text-lg ">
              <li className="rounded-md  text-3xl text-neutral-400 hover:text-neutral-300 transition active:scale-98 duration-150 cursor-pointer">
                <Link href={InstagramLink}>
                  <FaInstagram />
                </Link>
              </li>
              <li className="rounded-md  text-3xl text-neutral-400 hover:text-neutral-300 transition active:scale-98 duration-150 cursor-pointer">
                <Link href={YoutubeLink}>
                  <FaYoutube />
                </Link>
              </li>
              <li className="rounded-md  text-3xl text-neutral-400 hover:text-neutral-300 transition active:scale-98 duration-150 cursor-pointer">
                <Link href={LinkedinLink}>
                  <FaLinkedin />
                </Link>
              </li>
              <li className="rounded-md  text-3xl text-neutral-400 hover:text-neutral-300 transition active:scale-98 duration-150 cursor-pointer">
                <Link href={FacebookLink}>
                  <FaFacebook />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 px-6 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="flex gap-2 items-center text-neutral-100 text-xl font-semibold tracking-tight">
            <div className="rounded-sm border border-blue-400/15 bg-blue-400/10 p-2 sm:p-1 text-blue-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <FaLocationArrow />
            </div>
            Location
          </h1>
          <p className="text-neutral-400 text-base sm:text-sm mt-4">
            Come visit us or find us on the map. We’d love to have you stop by.
          </p>
          <button className="text-blue-500 tracking-normal text-base sm:text-sm hover:text-neutral-300 active:text-neutral-300 active:scale-98 transition duration-100 my-4">
            <Link href={maps} className="flex">
              Open maps <ChevronRight />{" "}
            </Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
