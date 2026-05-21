import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  Home,
  PackageOpen,
  Sofa,
  Truck,
  Warehouse,
} from "lucide-react";
import { itemVariants, Reveal, Stagger } from "./Reveal";

const services = [
  {
    icon: Home,
    title: "Home Shifting",
    desc: "Door-to-door household relocation with careful packing of every room.",
  },
  {
    icon: Sofa,
    title: "Furniture Moving",
    desc: "Disassembly, padded wrapping and reassembly of all furniture.",
  },
  {
    icon: Boxes,
    title: "Appliance Transport",
    desc: "Safe handling of fridges, ACs, washing machines and electronics.",
  },
  {
    icon: PackageOpen,
    title: "Packing & Unpacking",
    desc: "Professional-grade materials and trained packing crews.",
  },
  {
    icon: Truck,
    title: "Long Distance Relocation",
    desc: "Intercity & interstate moves with GPS-tracked transport.",
  },
  {
    icon: Warehouse,
    title: "Loading & Unloading",
    desc: "Trained labour for fast, damage-free loading at any location.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                — Services
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Everything you need to move.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground">
              From small apartments to full office relocations — one team, every
              detail covered.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s) => (
            <motion.a
              key={s.title}
              href="#contact"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background p-7 md:p-8 shadow-soft hover:shadow-elevated transition-shadow"
            >
              <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-foreground text-background flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-colors">
                    <s.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-background group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="mt-8 font-display font-semibold text-xl md:text-2xl text-foreground group-hover:text-background transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm md:text-[15px] text-muted-foreground group-hover:text-background/70 transition-colors leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
