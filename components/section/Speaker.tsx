"use client";

import { useRef } from "react";

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
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const startScroll = useRef<number>(0);
  const lastX = useRef<number>(0);
  const velocity = useRef<number>(0);
  const animation = useRef<number | null>(null);
  const lastTime = useRef<number>(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;

    if (!slider) return;

    if (animation.current !== null) {
      cancelAnimationFrame(animation.current);
    }

    isDragging.current = true;

    startX.current = e.clientX;
    startScroll.current = slider.scrollLeft;

    lastX.current = e.clientX;
    lastTime.current = performance.now();

    velocity.current = 0;

    slider.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const slider = sliderRef.current;

    if (!slider) return;

    const now = performance.now();

    const deltaX = e.clientX - lastX.current;
    const deltaTime = now - lastTime.current;

    const distance = e.clientX - startX.current;

    slider.scrollLeft = startScroll.current - distance;

    if (deltaTime > 0) {
      velocity.current = deltaX / deltaTime;
    }

    lastX.current = e.clientX;
    lastTime.current = now;
  };

  const startMomentum = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const friction = 0.94;

    const animate = () => {
      if (Math.abs(velocity.current) < 0.01) {
        animation.current = null;
        return;
      }

      slider.scrollLeft -= velocity.current * 16;

      velocity.current *= friction;

      animation.current = requestAnimationFrame(animate);
    };

    animation.current = requestAnimationFrame(animate);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;

    startMomentum();
  };

  return (
    <div className="font-inter min-h-[70dvh] bg-neutral-950/98">
      <h1 className="text-center text-neutral-100 text-4xl font-bold tracking-tight">
        Past Speakers
      </h1>

      <div
        ref={sliderRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="
          flex
          gap-4
          px-4 sm:px-8
          mt-2
          overflow-x-auto
          scrollbar-none
          cursor-grab
          active:cursor-grabbing
          select-none
          touch-pan-x
        "
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="
              relative
              mt-8
              shrink-0
              w-[75vw] sm:w-64 lg:w-72
              h-[50dvh] sm:h-72
              overflow-hidden
              rounded-xl
            "
          >
            <img
              src={item.image}
              alt={item.label}
              draggable={false}
              className="
                w-full
                h-full
                object-cover
                pointer-events-none
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-linear-to-t
                from-black/80
                via-black/10
                to-transparent
                pointer-events-none
              "
            />

            {/* Label */}
            <div
              className="
                absolute
                bottom-0
                left-0
                w-full
                p-5
                pointer-events-none
              "
            >
              <h2 className="text-white text-2xl font-bold">{item.label}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
