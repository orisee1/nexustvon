import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";

const DownloadCTA = () => {
  const handleDownload = () => {
    window.open("https://github.com/orisee1/NexusTV-Android/releases/download/v1.0.0/NexusTV.apk", "_blank");
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto max-w-4xl">
        <div className="bg-[var(--gradient-card)] border border-primary/30 rounded-3xl p-12 md:p-16 text-center shadow-[var(--shadow-card)] animate-scale-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Comece a assistir <span className="text-primary">agora</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Baixe o NexusTV gratuitamente e tenha acesso imediato a milhares de canais ao vivo. 
            Entretenimento sem limites na palma da sua mão!
          </p>
          
          <Button 
            size="lg" 
            onClick={handleDownload}
            className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-7 rounded-full shadow-[var(--shadow-glow)] hover:shadow-[0_0_60px_hsl(266_85%_73%/0.6)] transition-all duration-300 hover:scale-105"
          >
            <Download className="w-6 h-6 mr-3" />
            Baixar NexusTV
          </Button>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Download direto • Sem cadastro • 100% gratuito
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
