import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { CTALink } from "@/components/CTAButton";
import { navItems, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo-lpweb.jpg.asset.json";


export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 md:h-18">
        <Link to="/" hash="inicio" className="flex min-w-0 items-center">
          <img
            src={logoAsset.url}
            alt="LPweb.dev"
            className="h-12 w-auto rounded-xl bg-surface-elevated/80 p-1 ring-2 ring-primary/30 shadow-glow md:h-14"
            width={160}
            height={160}
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <CTALink
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          size="sm"
          className="ml-auto hidden md:ml-3 md:inline-flex"
        >
          <MessageCircle className="size-4" aria-hidden />
          Falar no WhatsApp
        </CTALink>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="ml-auto grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface/60 text-foreground transition-colors hover:border-primary/50 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-up border-t border-border bg-background/95 px-5 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-base font-medium text-foreground/90 transition-colors hover:text-primary-glow"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <CTALink
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="md"
            className="mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="size-4" aria-hidden />
            Falar no WhatsApp
          </CTALink>
        </div>
      )}
    </header>
  );
}
