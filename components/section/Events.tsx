"use client";
import { FaArrowRight } from "react-icons/fa6";
import AccordionGallery from "../AccordionGallery";
import Image from "next/image";

export default function Events() {
  const items = [
    {
      image: "https://picsum.photos/id/1015/900/1200",
      label: "Canyon",
    },
    {
      image: "https://picsum.photos/id/1018/900/1200",
      label: "Ridgeline",
    },
    {
      image: "https://picsum.photos/id/1039/900/1200",
      label: "Falls",
    },
    {
      image: "https://picsum.photos/id/1043/900/1200",
      label: "Harbour",
    },
    {
      image: "https://picsum.photos/id/1044/900/1200",
      label: "Skyline",
    },
  ];

  return (
    <div className="font-inter min-h-dvh bg-neutral-950/98 p-4 sm:p-16">
      <h1 className="text-3xl sm:text-5xl text-neutral-100 tracking-tighter font-semibold underline">
        Events and Programs
      </h1>
      <br />
      <br />
      {/* Desktop */}
      <div className="hidden md:block">
        <AccordionGallery
          items={items}
          defaultIndex={2}
          expandRatio={0.52}
          trigger="hover"
          accentColor="#ffffff"
          overlayColor="#060010"
          textColor="#ffffff"
          grayscale
          showLabels
          duration={0.2}
          ease="power3.out"
          parallax={0.1}
          tilt={8}
          stagger={0.06}
          height={460}
          gap={10}
          radius={16}
          orientation="horizontal"
        />
      </div>

      <div className="block md:hidden ">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative aspect-video w-full my-4 overflow-hidden rounded-xl border-2 border-neutral-700/80 shadow-xs shadow-white/10"
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              sizes="100vw"
              className="object-cover"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 p-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {item.label}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* <br /> */}
      <div>
        <button className="text-center bg-blue-700 text-neutral-50 shadow-xs rounded-lg text-base sm:text-sm font-normal px-4 py-1 tracking-tight active:scale-98 hover:bg-blue-700/90 transition duration-150 cursor-pointer mt-2 sm:mt-4">
          <p className="flex justify-center items-center gap-1">
            Explore More <FaArrowRight />
          </p>
        </button>
      </div>
    </div>
  );
}
