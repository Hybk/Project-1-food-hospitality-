import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { LatestPosts } from "@/components/sections/latest-posts";

// Home: one component per Figma frame, in page order.
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <LatestPosts />
    </>
  );
}
