import {
  Bot,
  Cog,
  Globe,
  LayoutTemplate,
  MessageCircle,
  MonitorSmartphone,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  Scissors,
  BriefcaseBusiness,
  Code2,
  Rocket,
  ShieldCheck,
  Eye,
  Sparkles,
  Presentation,
  Clock,
  TrendingUp,
} from "lucide-react";
import creativeHairImage from "@/assets/project-creative-hair.jpg";

/**
 * Central place for contact links. Replace the placeholders below with the
 * real numbers/handles — every button on the site reads from here.
 */
export const contact = {
  whatsappNumber: "5500000000000", // TODO: número real com DDI+DDD
  whatsappMessage: "Olá! Vim pelo site da LPweb.dev e quero falar sobre um projeto.",
  instagram: "https://instagram.com/lpweb.dev",
  instagramHandle: "@lpweb.dev",
  email: "contato@lpweb.dev",
};

export const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

export const navItems = [
  { label: "Início", hash: "inicio" },
  { label: "Serviços", hash: "servicos" },
  { label: "Portfólio", hash: "portfolio" },
  { label: "Sobre", hash: "sobre" },
  { label: "Contato", hash: "contato" },
];

export const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description:
      "Sites modernos, profissionais e responsivos para apresentar seu negócio, seus serviços e fortalecer sua presença digital.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description:
      "Páginas estratégicas desenvolvidas para apresentar serviços, produtos e transformar visitantes em clientes.",
  },
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description:
      "Soluções utilizando Inteligência Artificial para facilitar processos e criar novas possibilidades para o seu negócio.",
  },
  {
    icon: Cog,
    title: "Automação",
    description:
      "Automatize tarefas repetitivas e processos para ganhar mais tempo e eficiência.",
  },
  {
    icon: MessageCircle,
    title: "Soluções para WhatsApp",
    description:
      "Melhore a comunicação e o atendimento do seu negócio utilizando soluções inteligentes para WhatsApp.",
  },
  {
    icon: MonitorSmartphone,
    title: "Soluções em TI",
    description: "Soluções tecnológicas personalizadas para ajudar você e sua empresa.",
  },
];

export const audience = [
  { icon: Store, label: "Pequenas Empresas" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: ShoppingBag, label: "Lojas" },
  { icon: Scissors, label: "Salões de Beleza" },
  { icon: BriefcaseBusiness, label: "Profissionais Autônomos" },
  { icon: Code2, label: "Freelancers" },
  { icon: Rocket, label: "Empreendedores" },
];

export const process = [
  { step: "01", title: "Conversamos", text: "Entendemos seu negócio e suas necessidades." },
  { step: "02", title: "Planejamos", text: "Definimos a melhor solução para o seu projeto." },
  {
    step: "03",
    title: "Desenvolvemos",
    text: "Transformamos sua ideia em uma experiência digital.",
  },
  { step: "04", title: "Entregamos", text: "Seu projeto pronto para ajudar seu negócio." },
];

export const benefits = [
  { icon: ShieldCheck, title: "Mais credibilidade" },
  { icon: Eye, title: "Mais visibilidade" },
  { icon: Sparkles, title: "Presença profissional" },
  { icon: Presentation, title: "Melhor apresentação dos seus serviços" },
  { icon: Clock, title: "Seu negócio disponível online" },
  { icon: TrendingUp, title: "Mais oportunidades para conquistar clientes" },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image?: string | undefined;
  videoUrl?: string | undefined;
  liveUrl?: string | undefined;
  highlights: string[];
  featured?: boolean;
};

/** Adicione novos projetos aqui — as páginas se atualizam automaticamente. */
export const projects: Project[] = [
  {
    slug: "creative-hair",
    name: "Creative Hair",
    category: "Website · Beleza",
    description:
      "Website desenvolvido para apresentar produtos, serviços e fortalecer a presença digital da marca.",
    image: creativeHairImage,
    videoUrl: undefined, // adicione o link do vídeo demonstrativo
    liveUrl: undefined, // adicione o link do projeto no ar
    highlights: [
      "Apresentação de produtos e serviços",
      "Design responsivo, pensado para o celular",
      "Contato direto pelo WhatsApp",
    ],
    featured: true,
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote?: string | undefined;
};

/** Somente depoimentos reais. Cards sem texto ficam como "em breve". */
export const testimonials: Testimonial[] = [
  { name: "Creative Hair", role: "Cliente · Website", quote: undefined },
];
