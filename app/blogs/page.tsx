import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/section/Footer";
import Link from "next/link";
  import blogs from "./blogs.json"; 
// import Social from "@/components/layout/Social"

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col font-inter selection:bg-gray-500/20 selection:text-blue-600/80">
      <Navbar />
      <div className="max-w-4xl mx-auto sm:px-4 px-3 py-8 bg-transparent">
        <h1 className="text-center text-4xl font-semibold text-neutral-100 tracking-tight text-balance mb-">
          Blogs by E-Cell GCOEA
        </h1>

        <div className="bg-neutral-950 px-1 py-4 rounded-lg shadow-lg">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-neutral-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 my-4"
            >
              <h2 className="text-2xl font-semibold mb-2 text-neutral-200 tracking-tight text-balance">
                {blog.title}
              </h2>
              <p className="text-neutral-400 text-sm mb-4">
                {blog.date}
              </p>
              <p className="text-neutral-300 leading-relaxed">{blog.description}</p>

              <button className="mt-4 px-2 py-0.5 bg-blue-700 text-white rounded-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <Link href={blog.link}>Read more</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
