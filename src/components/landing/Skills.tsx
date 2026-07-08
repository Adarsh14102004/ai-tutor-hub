import { motion } from "framer-motion";

const skills = [
  "Python", "Product Building", "Generative AI", "AI Agents",
  "n8n Automation", "Claude Code", "Prompt Engineering", "API Integration",
  "AI Workflows", "MCP", "RAG", "LLM Applications",
];

export function Skills() {
  return (
    <section id="skills" className="bg-gradient-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent-purple">Skills</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Tools & technologies I teach</h2>
          <p className="mt-4 text-muted-foreground">
            A curated stack for building modern AI-first products.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="text-sm font-semibold">{skill}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
