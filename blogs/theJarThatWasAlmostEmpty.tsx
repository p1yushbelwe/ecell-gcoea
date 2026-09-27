import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/section/Footer";
import Social from "@/components/layout/Social";
import Link from "next/link";

export default function theJarThatWasAlmostEmpty() {
  return (
    <div className="py-0.5 font-inter bg-neutral-950 min-h-screen selection:bg-gray-500/20 selection:text-blue-600/8">
      
      <Navbar />
      <div className="max-w-3xl mx-auto sm:px-4 px-3 py-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-neutral-400/98">Friday, September 26th 2026</p>
        </div>
        <h1 className="text-4xl font-semibold mb-4 text-neutral-100 text-shadow-lg tracking-tight text-balance">
          Entrepreneurship's best kept secret : The Jar That Was Almost Empty
        </h1>
        <div className="flex justify-between items-center mb-2">
          <p className="text-[18px]/7 text-neutral-300/98">
            by{" "}
            <span className="text-blue-500">
              <Link href="https://ecell.gcoea.ac.in">E-Cell GCOEA</Link>
            </span>
          </p>

          <div className="mb-4">
            <Social />
          </div>
        </div>

        <hr className="border-neutral-100 mb-8" />

        <img
          src={
            "https://ik.imagekit.io/ecellgcoea/ecell-website/ecellgcoea/blogs/the-jar-that-was-almost-empty.jpeg"
          }
          className="w-full h-auto mb-6 scale-100"
        />

        <div className="text-pretty *:text-shadow-lg *:tracking-normal">
          <p className="sm:text-[20px]/7 text-[18px]/7 text-neutral-300/98 mb-6">
            In 1975 psychologists placed biscuits in two jars. One was full
            while the other nearly empty. The biscuits were identical yet people
            rated the emptier jar's biscuits as far more desirable. Nothing had
            changed except availability. This is scarcity. The brain treats rare
            things as valuable things because for most of human history whatever
            was limited often meant survival. When something feels scarce the
            mind stops asking is this good and starts asking will I lose this
            chance. FOMO is scarcity's louder cousin. It is not just about
            missing an item. It is about missing what everyone else seems to be
            having. Watching others rush convinces the brain that rushing too is
            the only safe move. Kinder Joy and Britannia both proved this well.
            Around the same time Kinder Joy launched limited edition Harry
            Potter Funko toys and Britannia rolled out its own Harry Potter
            themed biscuits with Warner Bros Discovery. Two separate brands
            chasing the same nostalgia and scarcity combo and buyers could not
            resist either.
          </p>

          <p className="sm:text-[20px]/7 text-[18px]/7 text-neutral-300/98 mb-6">
            Here is where it builds to something remarkable. During a major
            online sale Flipkart sold half a million products within sixty
            minutes of opening. Traffic surged tenfold in the first five minutes
            alone. The moment demanded action because hesitation felt like loss.
            So next time a countdown clock ticks on your screen, remember the
            almost empty jar. Your mind may not be asking 'Is this valuable?' It
            may simply be asking, ‘Will I lose my chance?’
          </p>
        </div>

        <div className="mb-4">
          <h1 className="text-2xl font-semibold mb-2 text-neutral-200 tracking-tight text-balance">
            References:
          </h1>
          <ul className="mt-8 space-y-3 text-lg text-blue-500">
            <li>
              <a
                href="https://www.uni-muenster.de/imperia/md/content/psyifp/aeechterhoff/vorlesungkommunikation/worchelleeeta_suppdemanobjval_jpsp1975.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                Worchel, Lee & Achewole — 1975 Scarcity Study
              </a>
            </li>

            <li>
              <a
                href="https://gohighbrow.com/scarcity-technique-1-limited-number/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                Highbrow — Scarcity Technique: Limited Number
              </a>
            </li>

            <li>
              <a
                href="https://inc42.com/flash-feed/flipkart-big-billion-day-1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                Inc42 — Flipkart Big Billion Day
              </a>
            </li>

            <li>
              <a
                href="https://www.afaqs.com/news/advertising/kinder-joy-new-tvc-highlights-harry-potter-funko-pop-toy-collection-7600376"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                afaqs! — Kinder Joy Harry Potter Funko Pop Collection
              </a>
            </li>

            <li>
              <a
                href="https://www.britannia.co.in/article/britannia-partners-with-warner-bros-discovery-global-consumer-products-to-launch-limited-edition-harry-potter-themed-biscuits"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                Britannia — Limited Edition Harry Potter Biscuits
              </a>
            </li>

            <li>
              <a
                href="https://marketech-apac.com/britannia-warner-bros-discovery-bring-hogwarts-to-snack-time-with-new-harry-potter-biscuits/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                MARKETECH APAC — Britannia x Warner Bros. Discovery
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
