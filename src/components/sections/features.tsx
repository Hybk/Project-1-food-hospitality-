// Figma frame: "Features"
const items = [
  { title: "Feature one", body: "Short supporting line." },
  { title: "Feature two", body: "Short supporting line." },
  { title: "Feature three", body: "Short supporting line." },
];

export function Features() {
  return (
    <section className="bg-muted py-20">
      <div className="container-page grid gap-10 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title}>
            <h2 className="font-display text-2xl">{item.title}</h2>
            <p className="mt-3 text-foreground/70">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
