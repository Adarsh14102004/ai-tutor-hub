import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, RefreshCw, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL as string | undefined;

function extractAnswer(data: unknown): string {
  if (typeof data === "string") return data;
  if (data && typeof data === "object") {
    const obj = data as Record<string, unknown>;
    for (const key of ["answer", "response", "output", "message", "text", "reply"]) {
      const v = obj[key];
      if (typeof v === "string") return v;
    }
    if (Array.isArray(obj) && obj.length && typeof (obj[0] as any)?.output === "string") {
      return (obj[0] as any).output as string;
    }
    return "```json\n" + JSON.stringify(data, null, 2) + "\n```";
  }
  return "No response received.";
}

export function AskAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastQuery, setLastQuery] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (question: string) => {
    if (!question.trim()) return;
    setError(null);
    setLastQuery(question);
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: question };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      if (!WEBHOOK_URL) {
        throw new Error(
          "VITE_N8N_WEBHOOK_URL is not configured. Add it to your environment to enable AI responses.",
        );
      }
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: question, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      const contentType = res.headers.get("content-type") || "";
      const data = contentType.includes("application/json") ? await res.json() : await res.text();
      const answer = extractAnswer(data);
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", content: answer },
      ]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <section id="ask-ai" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent-purple">AI Doubt Solving</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Ask Your Technical Doubt</h2>
          <p className="mt-4 text-muted-foreground">
            Ask anything related to Python, Product Building, AI, LLMs, Agentic AI, n8n, Claude Code
            or Prompt Engineering.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-elegant"
        >
          <div
            ref={scrollRef}
            className="max-h-[440px] min-h-[280px] space-y-4 overflow-y-auto p-6"
            aria-live="polite"
          >
            {messages.length === 0 && !loading && (
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center text-center text-muted-foreground">
                <div className="mb-3 inline-flex rounded-2xl bg-gradient-brand p-3 text-brand-foreground shadow-glow">
                  <Bot className="h-6 w-6" />
                </div>
                <p className="text-sm">Your conversation will appear here.</p>
              </div>
            )}

            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "assistant" && (
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-brand px-4 py-2.5 text-sm text-brand-foreground shadow-card"
                        : "max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-3 text-sm text-secondary-foreground"
                    }
                  >
                    {m.role === "assistant" ? (
                      <div className="prose prose-sm max-w-none prose-p:my-2 prose-pre:my-2 prose-pre:rounded-lg prose-pre:bg-primary prose-pre:text-primary-foreground prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:text-xs prose-code:before:content-none prose-code:after:content-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap">{m.content}</p>
                    )}
                  </div>
                  {m.role === "user" && (
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm text-muted-foreground">
                  <span>AI is thinking</span>
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-purple [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-purple [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-purple" />
                  </span>
                </div>
              </motion.div>
            )}

            {error && (
              <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-sm">
                <p className="font-medium text-destructive">Something went wrong.</p>
                <p className="mt-1 text-muted-foreground">{error}</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-3"
                  onClick={() => send(lastQuery)}
                  disabled={!lastQuery || loading}
                >
                  <RefreshCw className="mr-1 h-3.5 w-3.5" /> Retry
                </Button>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border bg-background/60 p-4">
            <label htmlFor="ask-ai-input" className="sr-only">Ask your question</label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
              <Textarea
                id="ask-ai-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e as unknown as React.FormEvent);
                  }
                }}
                placeholder="Ask your question..."
                rows={2}
                className="flex-1 resize-none rounded-xl"
                disabled={loading}
                aria-label="Your question"
              />
              <Button
                type="submit"
                size="lg"
                disabled={loading || !input.trim()}
                className="bg-gradient-brand text-brand-foreground shadow-elegant hover:opacity-95 sm:w-auto"
              >
                <Send className="mr-2 h-4 w-4" />
                Ask AI
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
