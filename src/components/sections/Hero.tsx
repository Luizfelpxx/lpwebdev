import { ArrowRight, MessageCircle } from "lucide-react";
import { CTALink } from "@/components/CTAButton";
import { whatsappUrl } from "@/lib/site";
import heroVisual from "@/assets/hero-visual.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-28 md:pb-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-10">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            Sites • IA • Automação • WhatsApp
          </span>

          <h1 className="mt-6 font-display text-[2.1rem] leading-[1.08] font-bold sm:text-5xl lg:text-[3.4rem]">
            <span className="text-gradient">
              Tecnologia para levar o seu negócio para o próximo nível.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Criamos sites profissionais e soluções digitais para ajudar empresas e
            profissionais a crescerem no mundo digital.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTALink
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle className="size-5" aria-hidden />
              Falar no WhatsApp
            </CTALink>
            <CTALink href="#servicos" variant="outline" size="lg">
              Conhecer nossos serviços
              <ArrowRight className="size-4" aria-hidden />
            </CTALink>
          </div>
        </div>

        <div className="relative">
          <div className="animate-float overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={heroVisual}
              alt="Composição visual de uma interface de site moderna criada pela LPweb.dev"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
