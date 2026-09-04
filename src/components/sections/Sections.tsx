import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Instagram, Mail, MessageCircle, Quote } from "lucide-react";
import { CTALink } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import {
  audience,
  benefits,
  contact,
  process,
  projects,
  services,
  testimonials,
  trustPoints,
  whatsappUrl,

} from "@/lib/site";

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] text-primary-glow uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-[1.75rem] leading-tight font-bold sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="section-y">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary-glow uppercase">
              Sobre a LPweb.dev
            </p>
            <h2 className="mt-3 font-display text-[1.75rem] leading-tight font-bold sm:text-4xl">
              Soluções digitais para negócios reais.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              A LPweb.dev ajuda empresas, empreendedores e profissionais a utilizarem a
              tecnologia de forma simples e estratégica.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Cada projeto é desenvolvido pensando nas necessidades do negócio, criando
              soluções digitais modernas, funcionais e personalizadas.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="servicos" className="section-y bg-surface/25">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Serviços" title="Como podemos ajudar seu negócio?" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="card-premium h-full p-6">
                <div className="grid size-12 place-items-center rounded-2xl border border-border bg-secondary/60 text-primary-glow">
                  <service.icon className="size-6" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Audience() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Público"
            title="Para quem são nossas soluções?"
            text="Se você precisa melhorar sua presença digital ou utilizar a tecnologia para facilitar o seu negócio, podemos ajudar."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {audience.map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <div className="card-premium flex h-full items-center gap-3 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary/60 text-primary-glow">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <p className="min-w-0 text-sm font-medium">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCase({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="card-premium overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary/40 sm:aspect-[16/9]">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            poster={project.image}
            controls
            playsInline
            className="h-full w-full object-cover"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={`Projeto ${project.name} desenvolvido pela LPweb.dev`}
            loading="lazy"
            width={1280}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full place-items-center text-sm text-muted-foreground">
            Imagem do projeto em breve
          </div>
        )}
        <span className="absolute top-4 left-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="font-display text-2xl font-bold sm:text-3xl">{project.name}</h3>
        <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.highlights.length > 0 && (
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary-glow">
                  <Check className="size-3" aria-hidden />
                </span>
                <span className="min-w-0 text-muted-foreground">{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-7 grid gap-3">
          {(project.previewDesktop || project.previewMobile) && (
            <div className="grid gap-3 sm:grid-cols-[1.6fr_1fr]">
              <figure className="overflow-hidden rounded-2xl border border-border bg-secondary/30">
                <div className="border-b border-border px-4 py-2 text-xs text-muted-foreground">
                  Preview desktop
                </div>
                {project.previewDesktop ? (
                  <img
                    src={project.previewDesktop}
                    alt={`Versão desktop do site ${project.name}`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                ) : (
                  <div className="grid aspect-[16/10] place-items-center text-xs text-muted-foreground">
                    Em breve
                  </div>
                )}
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-border bg-secondary/30">
                <div className="border-b border-border px-4 py-2 text-xs text-muted-foreground">
                  Preview mobile
                </div>
                {project.previewMobile ? (
                  <img
                    src={project.previewMobile}
                    alt={`Versão mobile do site ${project.name}`}
                    loading="lazy"
                    className="aspect-[9/14] w-full object-cover"
                  />
                ) : (
                  <div className="grid aspect-[9/14] place-items-center text-xs text-muted-foreground">
                    Em breve
                  </div>
                )}
              </figure>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {project.liveUrl && (
            <CTALink
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Visitar projeto
              <ArrowRight className="size-4" aria-hidden />
            </CTALink>
          )}
          <Link
            to="/portfolio/$slug"
            params={{ slug: project.slug }}
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-8 text-base font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/60 sm:w-auto"
          >
            Ver detalhes do projeto
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Portfolio() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="section-y bg-surface/25">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Portfólio"
            title="Projetos que ganham vida."
            text="Conheça alguns dos projetos desenvolvidos pela LPweb.dev."
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 90}>
              <ProjectCase project={project} />
            </Reveal>
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <article className="card-premium h-full overflow-hidden">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-secondary/40">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`Projeto ${project.name} desenvolvido pela LPweb.dev`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="grid h-full place-items-center text-sm text-muted-foreground">
                        Imagem do projeto em breve
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs tracking-wide text-primary-glow uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold">{project.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: project.slug }}
                      className="mt-5 inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface/40 px-6 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/60"
                    >
                      Ver detalhes do projeto
                      <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


export function Process() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Processo" title="Como funciona?" />
        </Reveal>
        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:top-6 md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto md:bg-gradient-to-r"
          />
          <div className="grid gap-8 md:grid-cols-4 md:gap-6">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div className="relative flex gap-5 pl-0 md:block">
                  <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-primary/40 bg-background font-display text-sm font-bold text-primary-glow">
                    {item.step}
                  </span>
                  <div className="md:mt-5">
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="section-y bg-surface/25">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Benefícios" title="Por que investir na presença digital?" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="card-premium flex h-full items-start gap-4 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary/60 text-primary-glow">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <p className="min-w-0 text-sm font-medium leading-relaxed">{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Feedback"
            title="Resultados que geram confiança."
            text="Depoimentos reais de quem já trabalhou com a LPweb.dev."
          />
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <figure className="card-premium flex h-full flex-col overflow-hidden">
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-border bg-secondary/30">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`Feedback de ${item.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="grid h-full place-items-center">
                      <Quote className="size-8 text-primary-glow/60" aria-hidden />
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  {item.quote && (
                    <blockquote className="text-[0.95rem] leading-relaxed text-muted-foreground">
                      “{item.quote}”
                    </blockquote>
                  )}
                  <figcaption className="mt-auto pt-5">
                    <p className="font-display text-base font-semibold">{item.name}</p>
                    <p className="mt-0.5 text-xs tracking-wide text-primary-glow uppercase">
                      {item.role}
                    </p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  return (
    <section className="pb-4">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="grid gap-4 rounded-3xl border border-border bg-surface/30 p-6 sm:grid-cols-3 sm:p-8">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary-glow">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <p className="min-w-0 text-[0.95rem] leading-relaxed font-medium">{point}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-surface px-6 py-14 text-center md:px-14 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[110px]"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-[1.75rem] leading-tight font-bold sm:text-4xl">
                Seu próximo projeto pode começar hoje.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Se você precisa de um site profissional ou de uma solução tecnológica para o seu
                negócio, vamos conversar.
              </p>
              <CTALink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                className="mt-8 w-full sm:w-auto"
              >
                <MessageCircle className="size-5" aria-hidden />
                Falar no WhatsApp
              </CTALink>
              <p className="mt-4 text-sm text-muted-foreground">Orçamento sem compromisso.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}



export function Contact() {
  return (
    <section id="contato" className="section-y bg-surface/25">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos conversar?"
            text="Conte um pouco sobre sua ideia e vamos encontrar uma solução."
          />
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "Atendimento direto",
              href: whatsappUrl,
              external: true,
            },
            {
              icon: Instagram,
              label: "Instagram",
              value: contact.instagramHandle,
              href: contact.instagram,
              external: true,
            },
            {
              icon: Mail,
              label: "E-mail",
              value: contact.email,
              href: `mailto:${contact.email}`,
              external: false,
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <a
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="card-premium flex h-full flex-col items-center gap-2 p-6 text-center"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-secondary/60 text-primary-glow">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <p className="mt-1 font-display text-base font-semibold">{item.label}</p>
                <p className="text-sm break-words text-muted-foreground">{item.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Resposta rápida", "Orçamento sem compromisso", "Atendimento personalizado"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-primary-glow" aria-hidden />
                  {item}
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
