import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-10 text-sm text-foreground/60">
      <div className="container-page flex flex-col gap-2 md:flex-row md:justify-between">
        <p>{site.conceptNote}</p>
        <p>
          Designed and built by{" "}
          <a href={site.designer.href} className="underline underline-offset-4">
            {site.designer.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
