import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { contact, whatsappUrl } from "@/lib/site";
import logoAsset from "@/assets/logo-lpweb.jpg.asset.json";


const footerLinks = [
  { label: "Início", hash: "inicio" },
  { label: "Serviços", hash: "servicos" },
  { label: "Portfólio", hash: "portfolio" },
  { label: "Contato", hash: "contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <img
              src={logoAsset.url}
              alt="LPweb.dev"
              className="h-11 w-auto rounded-xl shadow-glow md:h-14"
              width={160}
              height={160}
            />
            <p className="mt-2 text-sm text-muted-foreground">
              Tecnologia que simplifica negócios.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((item) => (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-11 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-all hover:border-primary/60 hover:text-foreground"
            >
              <MessageCircle className="size-5" />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-11 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-all hover:border-primary/60 hover:text-foreground"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="E-mail"
              className="grid size-11 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-all hover:border-primary/60 hover:text-foreground"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 LPweb.dev. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
