import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-brand shadow-glow" />
          <span className="text-sm font-semibold tracking-tight">AI Product Engineering</span>
        </button>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <Button
          size="sm"
          onClick={() => scrollTo("ask-ai")}
          className="bg-gradient-brand text-brand-foreground shadow-elegant hover:opacity-95"
        >
          Ask AI
        </Button>
      </div>
    </header>
  );
}
