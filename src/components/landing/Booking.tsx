import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Booking() {
  return (
    <section id="booking" className="bg-gradient-soft py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center shadow-elegant md:p-14"
        >
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <div className="relative">
            <div className="mx-auto inline-flex rounded-2xl bg-gradient-brand p-3 text-brand-foreground shadow-glow">
              <CalendarClock className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">Book a 1-on-1 Session</h2>
            <p className="mt-3 text-muted-foreground">
              Personalized guidance on your AI product journey — booking opens soon.
            </p>
            <Button size="lg" variant="outline" disabled className="mt-6">
              Coming Soon
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
