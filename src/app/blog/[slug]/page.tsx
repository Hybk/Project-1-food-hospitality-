import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPost, getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) return {};
  const { meta } = await getPost(slug);
  return { title: meta.title, description: meta.description };
}

export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) notFound();
  const { meta, Content } = await getPost(slug);
  const related = (await getAllPosts()).filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="container-page py-16 md:py-24">
      <header className="prose-width">
        <Link href="/blog" className="text-sm text-foreground/60 hover:text-accent">
          ← Journal
        </Link>
        <p className="mt-8 text-sm text-foreground/50">{formatDate(meta.date)}</p>
        <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{meta.title}</h1>
        <p className="mt-4 text-lg text-foreground/70">{meta.description}</p>
      </header>

      <div className="prose-width mt-10 text-lg">
        <Content />
      </div>

      {related.length > 0 && (
        <aside className="prose-width mt-20 border-t border-foreground/10 pt-10">
          <h2 className="font-display text-xl">Keep reading</h2>
          <ul className="mt-4 space-y-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="underline underline-offset-4 hover:text-accent">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  );
}
