import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-foreground/10">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl">
          {site.name}
        </Link>
        <nav className="flex gap-6 text-sm">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
