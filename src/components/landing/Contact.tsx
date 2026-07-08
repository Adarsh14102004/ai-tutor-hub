import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Youtube } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "hello@aipeacademy.com", href: "mailto:hello@aipeacademy.com" },
  { icon: Phone, label: "Phone", value: "+91 90000 00000", href: "tel:+919000000000" },
  { icon: Linkedin, label: "LinkedIn", value: "@gautam-ahuja", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "@gautam-ahuja", href: "https://github.com" },
  { icon: Youtube, label: "YouTube", value: "@aipeacademy", href: "https://youtube.com" },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent-purple">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Let's connect</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="rounded-xl bg-gradient-brand p-3 text-brand-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="font-semibold">{value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
