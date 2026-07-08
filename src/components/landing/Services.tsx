import { motion } from "framer-motion";
import { Bot, Code2, Compass, GraduationCap, Sparkles, Workflow } from "lucide-react";

const services = [
  { icon: Sparkles, title: "AI Product Building Bootcamp", desc: "Learn to build real AI products from scratch." },
  { icon: Code2, title: "Python Programming", desc: "Beginner to Advanced Python." },
  { icon: Workflow, title: "AI Automation using n8n", desc: "Build intelligent workflows without coding." },
  { icon: Bot, title: "Claude Code Masterclass", desc: "Learn AI-assisted software development." },
  { icon: Compass, title: "Emerging AI Technologies", desc: "Latest AI tools and frameworks." },
  { icon: GraduationCap, title: "1-on-1 Mentorship", desc: "Personalized career guidance." },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent-purple">Services</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Programs designed to ship</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-brand p-3 text-brand-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
