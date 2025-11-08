import { Tv } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-xl">
              <Tv className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">NexusTV</h3>
              <p className="text-sm text-muted-foreground">Seu app de canais ao vivo</p>
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
