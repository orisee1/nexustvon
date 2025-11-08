import { Tv, Instagram } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-xl">
              <Tv className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">NexusTV</h3>
              <p className="text-sm text-muted-foreground">Seu app de canais ao vivo</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-muted-foreground font-medium">Minhas Redes</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/rafaelhenriquelp?igsh=MXE1Zmxka250MHJqYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-xl hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://wa.me/5567992344530"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] overflow-hidden"
                aria-label="WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-1">
              Criado por <span className="text-primary font-semibold">Rafael Henrique</span>
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 NexusTV. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
