import Link from "next/link";
import blogs from "@/app/blogs/blogs.json";

export default function Blog() {
  return (
    <div className="bg-neutral-950/98 font-inter">
      <div className="max-w-4xl mx-auto sm:px-4 px-3 py-8 bg-transparent">
        <h1 className="text-center text-4xl font-semibold text-neutral-200 tracking-tight text-balance mb-8">
          Recent Blogs
        </h1>

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-neutral-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 my-8"
          >
            <p className="text-neutral-400/98 mb-2">{blog.date}</p>
            <h1 className="text-2xl font-semibold mb-2 text-neutral-200 tracking-tight text-balance">
              {blog.title}
            </h1>
            <p className="text-neutral-300 leading-relaxed">
              {blog.description}
            </p>

            <button className="mt-4 px-2 py-0.5 bg-blue-700 text-white rounded-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <Link href={`${blog.link}`}>Read more</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
