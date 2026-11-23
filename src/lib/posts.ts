import fs from "node:fs";
import path from "node:path";

export type PostMeta = {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  cover?: string;
};

export type Post = PostMeta & { slug: string };

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPost(slug: string) {
  const mod = await import(`@/content/blog/${slug}.mdx`);
  return {
    slug,
    meta: mod.metadata as PostMeta,
    Content: mod.default as React.ComponentType,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => ({ slug, ...(await getPost(slug)).meta })),
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
