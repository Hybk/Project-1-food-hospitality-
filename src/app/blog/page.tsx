import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Journal" };

export default async function BlogIndex() {
  const posts = await getAllPosts();
  return (
    <div className="container-page py-16 md:py-24">
      <h1 className="font-display text-4xl md:text-6xl">Journal</h1>
      <ul className="mt-12 divide-y divide-foreground/10 border-y border-foreground/10">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group grid gap-2 py-8 md:grid-cols-[12rem_1fr]">
              <span className="text-sm text-foreground/50">{formatDate(post.date)}</span>
              <span>
                <span className="block font-display text-2xl group-hover:text-accent">{post.title}</span>
                <span className="mt-2 block text-foreground/70">{post.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
