import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../../src/components/site/Navbar";
import { Hero } from "../../src/components/site/Hero";
import { About } from "../../src/components/site/About";
import { Services } from "../../src/components/site/Services";
import { WhyUs } from "../../src/components/site/WhyUs";
import { Contact } from "../../src/components/site/Contact";
import { Footer } from "../../src/components/site/Footer";
import { FloatingCTA } from "../../src/components/site/FloatingCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Shiva Shankar Packers & Movers — Safe, Affordable Relocation Services",
      },
      {
        name: "description",
        content:
          "Professional packers and movers for home shifting, office relocation, furniture and appliance transport. Trusted, on-time and damage-free moves across India.",
      },
      {
        name: "keywords",
        content:
          "packers and movers, home shifting, office relocation, furniture moving, appliance transport, long distance movers, Shiva Shankar Packers",
      },
      {
        property: "og:title",
        content:
          "Shiva Shankar Packers & Movers — Safe, Hassle-Free Relocation",
      },
      {
        property: "og:description",
        content:
          "Expert packing, secure transport and on-time delivery. Get your free moving quote today.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          name: "Shiva Shankar Packers & Movers",
          telephone: "+91-99999-99999",
          email: "hello@shivashankarpackers.com",
          areaServed: "IN",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
