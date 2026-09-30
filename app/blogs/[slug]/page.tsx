import theJarThatWasAlmostEmpty from "@/blogs/theJarThatWasAlmostEmpty";
import thePriceThatWasAlmost1000 from "@/blogs/thePriceThatWasAlmost1000";




const blogs = {
  "the-jar-that-was-almost-empty": theJarThatWasAlmostEmpty,
  "the-price-that-was-almost-1000": thePriceThatWasAlmost1000,
};

export function generateStaticParams() {
  return Object.keys(blogs).map((slug) => ({
    slug,
  }));
}


export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const Blog = blogs[slug as keyof typeof blogs];

  if (!Blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <main>
      <Blog />
    </main>
  );
}
