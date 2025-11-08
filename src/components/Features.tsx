import { Card } from "@/components/ui/card";
import { Tv2, Grid3x3, Smartphone, Zap, Globe, Heart } from "lucide-react";

const features = [
  {
    icon: Tv2,
    title: "Milhares de Canais",
    description: "Acesso a mais de 3.284 canais ao vivo de diversas categorias"
  },
  {
    icon: Grid3x3,
    title: "Categorias Variadas",
    description: "Anime, cinema, esportes, documentários, notícias e muito mais"
  },
  {
    icon: Smartphone,
    title: "Interface Intuitiva",
    description: "Design moderno e fácil de usar, navegue pelos canais com facilidade"
  },
  {
    icon: Zap,
    title: "Transmissão Rápida",
    description: "Streaming em alta qualidade com carregamento instantâneo"
  },
  {
    icon: Globe,
    title: "Conteúdo Brasileiro",
    description: "Foco especial em canais brasileiros de todas as regiões"
  },
  {
    icon: Heart,
    title: "100% Gratuito",
    description: "Sem mensalidades, sem taxas escondidas. Totalmente grátis!"
  }
];

const Features = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que escolher o <span className="text-primary">NexusTV</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A melhor experiência de streaming ao vivo, completamente gratuita
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-[var(--gradient-card)] border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
