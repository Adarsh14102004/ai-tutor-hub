import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import teacherImg from "@/assets/teacher.jpg";
import { Button } from "@/components/ui/button";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent-purple" />
            AI Product Engineering Academy
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Build Products.
            <br />
            Automate Everything.
            <br />
            <span className="text-gradient-brand">Learn Future Skills.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
            Helping students and professionals build AI-powered products using modern
            technologies and practical projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-gradient-brand text-brand-foreground shadow-elegant hover:opacity-95"
              onClick={() => scrollTo("ask-ai")}
            >
              Ask a Doubt
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("services")}
            >
              Explore Courses
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
            <img
              src={teacherImg}
              alt="Gautam Ahuja, AI Product Engineer"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-background/90 px-4 py-3 shadow-card backdrop-blur">
            <div className="text-sm font-semibold">Gautam Ahuja</div>
            <div className="text-xs text-muted-foreground">AI Product Engineer · Python Trainer</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
