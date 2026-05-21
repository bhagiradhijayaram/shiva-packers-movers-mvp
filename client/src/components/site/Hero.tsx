import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, Star, Truck } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero noise pt-28 md:pt-36 pb-20 md:pb-28"
    >
      {/* Floating bg shapes */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-foreground/[0.04] blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-foreground/[0.05] blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-foreground" />
            Trusted by 10,000+ families & businesses
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 font-display font-bold text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[72px] tracking-tight"
          >
            Professional Packers
            <br />& Movers for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic font-medium">safe</span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-foreground/10 origin-left -z-0"
              />
            </span>{" "}
            relocation.
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            We safely move your furniture, appliances, household items and
            office belongings anywhere — with expert packing, secure transport
            and on-time delivery.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold shadow-soft hover:shadow-elevated transition-all"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="tel:+917901082907"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/50 backdrop-blur px-6 py-3.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-all"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href="https://wa.me/917901082907"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/50 backdrop-blur px-6 py-3.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-all"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.32)}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-foreground text-foreground"
                />
              ))}
              <span className="ml-2 font-medium text-foreground">4.9/5</span>
              <span>· 2,400+ reviews</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div>
              <span className="font-semibold text-foreground">12+ years</span>{" "}
              in logistics
            </div>
          </motion.div>
        </div>

        {/* Truck illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square rounded-[2rem] bg-foreground text-background p-8 md:p-10 shadow-glow overflow-hidden">
            <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="relative flex flex-col h-full justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-background/60">
                  Live tracking
                </span>
                <span className="flex items-center gap-2 text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-background/70 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-background" />
                  </span>
                  En route
                </span>
              </div>

              {/* Animated truck */}
              <div className="relative h-32">
                <motion.div
                  className="absolute left-0 right-0 bottom-6 h-px bg-background/20"
                  aria-hidden
                />
                <motion.div
                  aria-hidden
                  className="absolute bottom-6"
                  initial={{ x: "-30%" }}
                  animate={{ x: "110%" }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="relative">
                    <Truck className="h-16 w-16" strokeWidth={1.4} />
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "10K+", v: "Moves" },
                  { k: "500+", v: "Cities" },
                  { k: "24/7", v: "Support" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-2xl bg-background/5 border border-background/10 px-2 py-3"
                  >
                    <div className="font-display text-xl font-bold">{s.k}</div>
                    <div className="text-[11px] uppercase tracking-wider text-background/60 mt-0.5">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating quote chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-2xl px-4 py-3 shadow-elevated"
            >
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Free quote
              </div>
              <div className="font-display font-semibold text-sm">
                Reply in under 10 min
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
