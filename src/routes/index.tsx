import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import {
  About,
  Audience,
  Benefits,
  Contact,
  FinalCta,
  Portfolio,
  Process,
  Services,
  Testimonials,
} from "@/components/sections/Sections";

const title = "LPweb.dev — Sites profissionais, IA e automação para seu negócio";
const description =
  "Criação de sites, landing pages, inteligência artificial, automação e soluções para WhatsApp. Tecnologia para levar o seu negócio para o próximo nível.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "LPweb.dev",
          description,
          slogan: "Tecnologia que simplifica negócios.",
          areaServed: "BR",
          serviceType: [
            "Criação de sites",
            "Landing pages",
            "Inteligência Artificial",
            "Automação",
            "Soluções para WhatsApp",
            "Soluções em TI",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Audience />
        <Portfolio />
        <Process />
        <Benefits />
        <Testimonials />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
