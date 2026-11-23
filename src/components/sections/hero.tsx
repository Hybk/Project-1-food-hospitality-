import Link from "next/link";
import { site } from "@/lib/site";

// Figma frame: "Hero"
export function Hero() {
  return (
    <section className="container-page py-20 md:py-32">
      <h1 className="max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">{site.tagline}</h1>
      <p className="mt-6 max-w-xl text-lg text-foreground/70">{site.description}</p>
      <Link
        href="/blog"
        className="mt-10 inline-flex rounded-full bg-accent px-6 py-3 text-accent-foreground"
      >
        Primary action
      </Link>
    </section>
  );
}
