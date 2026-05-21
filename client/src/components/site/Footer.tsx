import { LuInstagram, LuFacebook, LuTwitter, LuLinkedin } from "react-icons/lu";

const cols = [
  {
    title: "Services",
    links: [
      "Home Shifting",
      "Office Relocation",
      "Furniture Moving",
      "Long Distance",
    ],
  },
  {
    title: "Company",
    links: ["About", "Why Us", "Contact", "Get a Quote"],
  },
  {
    title: "Contact",
    links: [
      "+91 79010 82907",
      "sivashankartadana@gmail.com",
      "Ramatalkies Reddy hospital road, Visakhapatnam",
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background pt-20 pb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-background/15">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-background text-foreground flex items-center justify-center font-display font-bold">
                S
              </div>
              <div className="font-display font-bold text-lg">
                Shiva Shankar Packers
              </div>
            </div>
            <p className="mt-5 text-background/60 max-w-sm leading-relaxed">
              Professional packers & movers committed to safe, on-time and
              affordable relocation — across the city and across the country.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[LuInstagram, LuFacebook, LuTwitter, LuLinkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="h-10 w-10 rounded-full border border-background/15 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.2em] text-background/50">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-background/80 hover:text-background transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-background/50">
          <div>
            © {new Date().getFullYear()} Shiva Shankar Packers. All rights
            reserved.
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-background">
              Privacy
            </a>
            <a href="#" className="hover:text-background">
              Terms
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 font-display font-bold text-background/[0.04] text-[28vw] leading-none select-none whitespace-nowrap"
      >
        SHIVA
      </div>
    </footer>
  );
}
