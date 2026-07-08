import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Project-Based Learning",
  "Industry Use Cases",
  "Hands-on Sessions",
  "Career Guidance",
  "Interview Preparation",
  "Live Coding",
  "AI-first Approach",
];

export function WhyMe() {
  return (
    <section id="why" className="bg-gradient-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent-purple">Why learn with me</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            An approach built for outcomes
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-card"
            >
              <div className="rounded-lg bg-gradient-brand p-1.5 text-brand-foreground">
                <Check className="h-4 w-4" />
              </div>
              <span className="font-medium">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
