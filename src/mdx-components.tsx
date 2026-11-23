import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Article typography. Kept here so every post shares one reading layout.
const components: MDXComponents = {
  h2: (props) => <h2 className="mt-12 mb-4 font-display text-2xl md:text-3xl" {...props} />,
  h3: (props) => <h3 className="mt-8 mb-3 font-display text-xl" {...props} />,
  p: (props) => <p className="my-5 leading-relaxed text-foreground/85" {...props} />,
  ul: (props) => <ul className="my-5 list-disc space-y-2 pl-6" {...props} />,
  ol: (props) => <ol className="my-5 list-decimal space-y-2 pl-6" {...props} />,
  blockquote: (props) => (
    <blockquote className="my-8 border-l-2 border-accent pl-5 font-display text-xl italic" {...props} />
  ),
  a: ({ href = "", ...props }) => (
    <Link href={href} className="underline decoration-accent underline-offset-4" {...props} />
  ),
  hr: () => <hr className="my-12 border-foreground/10" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
