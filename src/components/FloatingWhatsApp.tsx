import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a LPweb.dev"
      className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow transition-transform duration-300 hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}
