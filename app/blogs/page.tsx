import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/section/Footer";
import Link from "next/link";
// import Social from "@/components/layout/Social"

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col font-inter selection:bg-gray-500/20 selection:text-blue-600/80">
      <Navbar />
      <div className="max-w-4xl mx-auto sm:px-4 px-3 py-8 bg-transparent">
        <h1 className="text-center text-4xl font-semibold text-neutral-100 tracking-tight text-balance mb-">
          Blogs by E-Cell GCOEA
        </h1>

        <div className="bg-neutral-950 px-1  py-4 rounded-lg shadow-lg">
          <div className="bg-neutral-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p className="text-neutral-400/98 mb-2">Friday, September 26th 2026</p>
            <h1 className="text-2xl font-semibold mb-2 text-neutral-200 tracking-tight text-balance">
              Entrepreneurship's best kept secret : The Jar That Was Almost
              Empty
            </h1>
            <p className="text-neutral-300 leading-relaxed">
              In 1975 psychologists placed biscuits in two jars. One was full
              while the other nearly empty. The biscuits were identical yet
              people rated the emptier jar's biscuits as far more desirable.
              Nothing had changed except availability.
            </p>

            <button className="mt-4 px-2 py-0.5 bg-blue-700 text-white rounded-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <Link href="/blogs/the-jar-that-was-almost-empty">Read more</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
