import Link from "next/link";
import blogs from "@/app/blogs/blogs.json";
import { motion } from "motion/react";
import { ChevronRightIcon } from "lucide-react";
export default function Blog() {
  return (
    <div className="bg-neutral-950/98 font-inter">
      <div className="max-w-4xl mx-auto sm:px-4 px-4 py-8 bg-transparent">
        <motion.div
        initial={{ opacity: 0  }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-center text-4xl font-semibold text-neutral-200 tracking-tight text-balance mb-8">
            Recent Blogs
          </h1>
        </motion.div>

        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-neutral-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 my-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-neutral-400/98 mb-2">{blog.date}</p>
            <h1 className="text-2xl font-semibold mb-2 text-neutral-200 tracking-tight text-balance">
              {blog.title}
            </h1>
            <p className="text-neutral-300 leading-relaxed">
              {blog.description}
            </p>

            <button className="my-4 active:text-neutral-200 text-blue-500  rounded-sm hover:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <Link href={`${blog.link}`} className="flex items-center tracking-normal">
                Read more <ChevronRightIcon />
              </Link>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
