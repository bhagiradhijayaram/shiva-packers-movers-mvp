import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const stats = [
  { k: "12+", v: "Years experience" },
  { k: "10K+", v: "Successful moves" },
  { k: "500+", v: "Cities covered" },
  { k: "98%", v: "Happy customers" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                — About us
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Reliable movers.
                <br />
                <span className="text-muted-foreground">Effortless moves.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <Reveal delay={0.1}>
              <p>
                Shiva Shankar Packers is a customer-focused relocation company
                built on trust, care and decades of hands-on logistics
                experience. From a single studio apartment to full corporate
                offices, we treat every move with the same precision and respect
                for your belongings.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Our trained packing teams, padded transport vehicles and
                end-to-end coordination mean you get one transparent quote, one
                accountable team and zero surprises on moving day.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-10 bg-border rounded-2xl overflow-hidden">
              {stats.map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-background p-5 md:p-6"
                >
                  <div className="font-display font-bold text-2xl md:text-3xl text-foreground">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-muted-foreground">
                    {s.v}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
