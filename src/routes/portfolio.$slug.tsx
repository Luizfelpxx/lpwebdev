import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, MessageCircle, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTALink } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { projects, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Projeto não encontrado — LPweb.dev" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Projeto LPweb.dev`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/portfolio/${project.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${project.slug}` }],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-4">
        <div className="mx-auto max-w-4xl px-5">
          <Link
            to="/"
            hash="portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Voltar ao portfólio
          </Link>

          <Reveal className="mt-6">
            <p className="text-xs tracking-[0.2em] text-primary-glow uppercase">
              {project.category}
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{project.name}</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-8">
            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`Projeto ${project.name} desenvolvido pela LPweb.dev`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="grid aspect-[16/10] place-items-center bg-secondary/40 text-sm text-muted-foreground">
                  Imagem do projeto em breve
                </div>
              )}
            </div>
          </Reveal>

          {project.videoUrl && (
            <Reveal delay={140} className="mt-6">
              <div className="aspect-video overflow-hidden rounded-3xl border border-border">
                <iframe
                  src={project.videoUrl}
                  title={`Vídeo demonstrativo do projeto ${project.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </Reveal>
          )}

          {project.highlights.length > 0 && (
            <Reveal delay={160} className="mt-10">
              <h2 className="font-display text-xl font-semibold">O que foi desenvolvido</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="card-premium flex items-start gap-3 p-4 text-sm leading-relaxed"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary-glow" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={180} className="mt-10 flex flex-col gap-3 sm:flex-row">
            {project.liveUrl && (
              <CTALink
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Acessar o projeto
                <ExternalLink className="size-4" aria-hidden />
              </CTALink>
            )}
            <CTALink
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle className="size-5" aria-hidden />
              Quero um projeto assim
            </CTALink>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
