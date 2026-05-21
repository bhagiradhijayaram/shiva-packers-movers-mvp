import { useState, memo } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Reveal } from "./Reveal";

const contactItems = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 79010 82907",
    href: "tel:+917901082907",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: "https://wa.me/917901082907",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sivashankartadana@gmail.com",
    href: "mailto:sivashankartadana@gmail.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Ramatalkies Reddy hospital road, Visakhapatnam.",
    href: "#map",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !phone) return;
    const text = encodeURIComponent(
      `Hi, I'm ${name} (${phone}).\n\n${message || "I'd like a free moving quote."}`,
    );
    window.open(`https://wa.me/917901082907?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                — Contact
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Get your free
                <br />
                moving quote.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground max-w-md">
                Talk to a relocation expert today. We'll respond within 10
                minutes during business hours.
              </p>
            </Reveal>

            <div className="mt-10 space-y-3">
              {contactItems.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                >
                  <div className="h-11 w-11 rounded-xl bg-surface group-hover:bg-background/10 flex items-center justify-center">
                    <c.icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground group-hover:text-background/60">
                      {c.label}
                    </div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div>
              <form
                onSubmit={onSubmit}
                className="relative z-30 rounded-3xl border border-border bg-background p-6 md:p-10 shadow-soft"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Your name"
                    name="name"
                    placeholder="Full name"
                    required
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 ..."
                    required
                  />
                  <Field
                    label="From"
                    name="from"
                    placeholder="Pickup city / area"
                  />
                  <Field
                    label="To"
                    name="to"
                    placeholder="Destination city / area"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={1000}
                    placeholder="Tell us about your move — items, dates, floor..."
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm focus:outline-none focus:border-foreground focus:bg-background transition-colors resize-none"
                  />
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:bg-foreground/85 transition-all shadow-soft"
                  >
                    Send via WhatsApp
                    <Send className="h-4 w-4" />
                  </button>
                  <span className="text-xs text-muted-foreground">
                    {sent
                      ? "Opening WhatsApp..."
                      : "We typically reply in under 10 minutes."}
                  </span>
                </div>
              </form>
            </div>

            <Reveal delay={0.15}>
              <div
                id="map"
                className="mt-6 rounded-3xl overflow-hidden border border-border shadow-soft aspect-[16/9]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3800.3261011949085!2d83.30827027517284!3d17.72926738321746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQzJzQ1LjQiTiA4M8KwMTgnMzkuMCJF!5e0!3m2!1sen!2sin!4v1779331164396!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const Field = memo(function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
        {required && <span className="text-foreground"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={120}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm focus:outline-none focus:border-foreground focus:bg-background transition-colors"
      />
    </div>
  );
});
