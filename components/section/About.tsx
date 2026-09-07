import Image from "next/image";

export default function About() {
  return (
    <section className="bg-neutral-950 min-h-dvh font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* ===== Image (appears first on mobile) ===== */}
{/* ===== Image ===== */}
<div className="flex-1 w-full max-w-md lg:max-w-xl mx-auto order-1 lg:order-2">
  <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900/60 border border-neutral-800 shadow-xl">
    <Image
      src="/ecellLogo.webp"
      alt="E-Cell GCOEA Logo"
      fill
      className="object-contain p-8 sm:p-10 lg:p-12"
      priority
    />
  </div>
</div>

          {/* ===== Text Content ===== */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <p className="text-neutral-400 text-sm sm:text-base mb-2">
              About
            </p>
            
            <h1 className="text-neutral-100 text-3xl sm:text-4xl font-semibold tracking-tight">
              Who we are?
            </h1>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mt-4 text-pretty max-w-2xl">
              The Entrepreneurship Cell at Government College of Engineering,
              Amravati is a student-led initiative dedicated to fostering a
              culture of innovation and entrepreneurship on campus. Through
              workshops, events and collaborations with industry professionals,
              E-Cell, GCOEA provides students with opportunities to develop
              essential skills, network and gain real-world experience. Our aim is
              to empower students to explore their ideas and pursue
              entrepreneurship as a meaningful and impactful career path.
            </p>

            {/* Stats Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-neutral-700/80 bg-neutral-900/60 p-5 flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100">
                  4+ Years
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Building community and connections for over 7 years.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-700/80 bg-neutral-900/60 p-5 flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100">
                  10+ Events
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Hosting 10+ engaging events and counting.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-700/80 bg-neutral-900/60 p-5 flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100">
                  80+ Members
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  A growing community of 120+ dedicated members.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}