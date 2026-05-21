import { motion } from "framer-motion";
import {
  BadgeIndianRupee,
  Clock,
  Headphones,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { itemVariants, Reveal, Stagger } from "./Reveal";

const features = [
  {
    icon: Users,
    title: "Experienced packing team",
    desc: "Trained crews with hundreds of moves under their belt.",
  },
  {
    icon: ShieldCheck,
    title: "Safe handling",
    desc: "Multi-layer packing, padded vehicles, careful loading.",
  },
  {
    icon: Sparkles,
    title: "Damage-free transport",
    desc: "Premium materials and proven processes — every time.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable pricing",
    desc: "Transparent quotes with zero hidden charges.",
  },
  {
    icon: Clock,
    title: "On-time delivery",
    desc: "We commit to a timeline and we keep it.",
  },
  {
    icon: Headphones,
    title: "24/7 customer support",
    desc: "Real people on call before, during and after your move.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why"
      className="relative py-24 md:py-32 bg-foreground text-background overflow-hidden noise"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-background/60">
              — Why choose us
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Built for trust.
              <br />
              <span className="text-background/50">Engineered for care.</span>
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-3xl overflow-hidden">
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="bg-foreground p-7 md:p-9 group cursor-default"
            >
              <div className="h-12 w-12 rounded-2xl border border-background/15 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-colors">
                <f.icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-8 font-display font-semibold text-xl md:text-2xl">
                {f.title}
              </h3>
              <p className="mt-2 text-sm md:text-[15px] text-background/60 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
