import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/posts";

// Figma frame: "Journal"
export async function LatestPosts() {
  const posts = (await getAllPosts()).slice(0, 2);
  return (
    <section className="container-page py-20">
      <div className="flex items-end justify-between">
        <h2 className="font-display text-3xl md:text-4xl">From the journal</h2>
        <Link href="/blog" className="text-sm underline underline-offset-4">
          All articles
        </Link>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <p className="text-sm text-foreground/50">{formatDate(post.date)}</p>
            <h3 className="mt-2 font-display text-2xl group-hover:text-accent">{post.title}</h3>
            <p className="mt-2 text-foreground/70">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
