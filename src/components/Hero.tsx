import { Button } from "@/components/ui/button";
import { Download, Tv, Zap } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const Hero = () => {
  const handleDownload = () => {
    window.open("https://github.com/orisee1/NexusTV-Android/releases/download/v1.0.0/NexusTV.apk", "_blank");
  };

  const handleViewChannels = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Animated decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Assista gratuitamente</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                NexusTV
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Seu app de canais AO VIVO
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Milhares de canais brasileiros e internacionais na palma da sua mão. Anime, cinema, esportes, documentários e muito mais!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={handleDownload}
                className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-[var(--shadow-glow)] hover:shadow-[0_0_60px_hsl(266_85%_73%/0.5)] transition-all duration-300 animate-glow-pulse"
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar Agora
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleViewChannels}
                className="border-2 border-primary/30 hover:bg-primary/10 text-foreground font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                <Tv className="w-5 h-5 mr-2" />
                Ver Canais
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>3284+ canais</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                <span>100% grátis</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl animate-pulse" />
              <img 
                src={heroPhone} 
                alt="NexusTV App Interface" 
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
