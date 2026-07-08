import { MessageSquare } from "lucide-react";

export function StickyAskButton() {
  return (
    <button
      onClick={() => document.getElementById("ask-ai")?.scrollIntoView({ behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-elegant transition-transform hover:scale-105 md:hidden"
      aria-label="Ask AI"
    >
      <MessageSquare className="h-4 w-4" />
      Ask AI
    </button>
  );
}
