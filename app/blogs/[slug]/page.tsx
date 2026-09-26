import theJarThatWasAlmostEmpty from "@/blogs/theJarThatWasAlmostEmpty";




const blogs = {
  "the-jar-that-was-almost-empty": theJarThatWasAlmostEmpty,
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
