import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/section/Footer";
import Social from "@/components/layout/Social";
import Link from "next/link";

export default function thePriceThatWasAlmost1000() {
  return (
    <div className="py-0.5 font-inter bg-neutral-950 min-h-screen selection:bg-gray-500/20 selection:text-blue-600/8">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-neutral-400/98">Friday, September 29th 2026</p>
        </div>
        <h1 className="text-4xl font-semibold mb-4 text-neutral-100 text-shadow-lg tracking-tight text-balance">
          Entrepreneurship's Best Kept Secret: The Price That Was Almost ₹1000
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
            "https://ik.imagekit.io/ecellgcoea/ecell-website/ecellgcoea/blogs/the-price-that-almost-1000.jpeg"
          }
          className="w-full h-auto mb-6 scale-100"
        />

        <div className="text-pretty *:text-shadow-lg *:tracking-normal">
          <p className="sm:text-[20px]/7 text-[18px]/7 text-neutral-300/98 mb-6">
            Imagine walking into a store with ₹1000 in your pocket. You spot a
            shirt marked ₹999 and think: That is within my budget. However, if
            the same shirt was marked ₹1000 you might feel like it has crossed
            your price boundary.
          </p>

          <p className="sm:text-[20px]/7 text-[18px]/7 text-neutral-300/98 mb-6">
            The difference being ₹1
          </p>
          <p className="sm:text-[20px]/7 text-[18px]/7 text-neutral-300/98 mb-6">
            This is known as the left digit effect. Our brain processes pricing
            left to right, hence why the first digit carries more weight. ₹999
            feels like part of the ₹900 bracket while ₹1000 strays out of it.
          </p>
          <p className="sm:text-[20px]/7 text-[18px]/7 text-neutral-300/98 mb-6">
            However, here is where the story takes an interesting turn.
          </p>
          <p className="sm:text-[20px]/7 text-[18px]/7 text-neutral-300/98 mb-6">
            A 1996 field experiment at a women's clothing retailer found that
            prices ending in 99 had higher sales than those with nearby whole
            dollar prices.
          </p>
          <p className="sm:text-[20px]/7 text-[18px]/7 text-neutral-300/98 mb-6">
            Decades later a meta analysis of pricing research revealed that
            merely placing a price just below another can affect how consumers
            perceive the value of a good depending on the context.
          </p>
          <p className="sm:text-[20px]/7 text-[18px]/7 text-neutral-300/98 mb-6">
            The product did not change, nor did its quality. Only one rupee was
            changed in the equation
          </p>
          <p className="sm:text-[20px]/7 text-[18px]/7 text-neutral-300/98 mb-6">
            So the next time you are standing in front of a counter with ₹1000
            in your pocket just to see a ₹999 price tag, remember the shirt from
            the begining. You did not become richer. The number did.
          </p>
        </div>

        <div className="mb-4">
          <h1 className="text-2xl font-semibold mb-2 text-neutral-200 tracking-tight text-balance">
            References:
          </h1>
          <ul className="mt-8 space-y-3 text-lg text-blue-500">
            <li>
              <a
                href="https://doi.org/10.1086/429600"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                Thomas, M. & Morwitz, V. (2005). Penny Wise and Pound Foolish:
                The Left Digit Effect in Price Cognition. Journal of Consumer
                Research, 32(1), 54–64.
              </a>
            </li>

            <li>
              <a
                href="https://doi.org/10.1016/S0022-4359(96)90013-5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                Schindler, R. M. & Kibarian, T. M. (1996). Increased Consumer
                Sales Response Through Use of 99 Ending Prices. Journal of
                Retailing, 72(2), 187–199.
              </a>
            </li>

            <li>
              <a
                href="https://doi.org/10.1002/jcpy.1353"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                Troll, E. S., Frankenbach, J., Friese, M. & Loschelder, D. D.
                (2024). A Meta Analysis on the Effects of Just Below Versus
                Round Prices. Journal of Consumer Psychology, 34(2), 299–325.
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
