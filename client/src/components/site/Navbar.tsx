import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-xl bg-foreground text-background flex items-center justify-center font-display font-bold shadow-soft group-hover:rotate-3 transition-transform">
            S
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-[15px] md:text-base tracking-tight">
              Siva Shankar
            </div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Packers & Movers
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+917901082907"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 md:px-5 py-2.5 text-sm font-semibold hover:bg-foreground/85 transition-all shadow-soft hover:shadow-elevated"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 rounded-full border border-border flex items-center justify-center"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass border-t border-border/60"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-base font-medium border-b border-border/40 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+917901082907"
                className="sm:hidden mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
