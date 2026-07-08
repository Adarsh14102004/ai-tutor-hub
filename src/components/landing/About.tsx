import { motion } from "framer-motion";
import { GraduationCap, Rocket, Users } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Years Training", value: "7+" },
  { icon: Users, label: "Students Mentored", value: "3,000+" },
  { icon: Rocket, label: "Projects Shipped", value: "120+" },
];

export function About() {
  return (
    <section id="about" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-accent-purple">About</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Practical learning through real projects.
            </h2>
            <p className="mt-6 text-muted-foreground">
              I have 7+ years of experience training students and professionals in AI, Python,
              Product Building, Automation and Emerging Technologies.
            </p>
            <p className="mt-4 text-muted-foreground">
              I focus on practical learning through projects rather than theory — every session
              ships something you can put in your portfolio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <div className="rounded-xl bg-gradient-brand p-3 text-brand-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
