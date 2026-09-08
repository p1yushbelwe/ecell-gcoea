"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type GalleryItem = {
  image: string;
  label: string;
};

const items: GalleryItem[] = [
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
  {
    image: "https://picsum.photos/id/1044/900/1200",
    label: "Skyline",
  },
];

export default function Speaker() {
  return (
    <section className="bg-neutral-950/98 px-4 py-4 font-inter">
      <h1 className="text-center text-3xl font-medium tracking-tighter text-neutral-100  *:bg-blue-700 text-shadow-2xs sm:text-3xl">
        <span className="px-4 py-2">Past Speakers and Guests</span>
      </h1>

      <div className="mx-4 sm:mx-auto mt-10 max-w-6xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 1500,
              
            }),
          ]}
        >
          <CarouselContent className="">
            {items.map((item, i) => (
              <CarouselItem
                key={i}
                className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-xl">
                  <div className="relative aspect-4/5 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xl font-medium text-white">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 h-10 w-10 border-none bg-white text-neutral-900 shadow-lg hover:bg-neutral-100 sm:-left-5" />

          <CarouselNext className="right-2 h-10 w-10 border-none bg-white text-neutral-900 shadow-lg hover:bg-neutral-100 sm:-right-5" />
        </Carousel>
      </div>
    </section>
  );
}