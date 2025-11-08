import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "Anime e Tokusatsu", count: 31, color: "bg-primary/20 border-primary/30 text-primary" },
  { name: "Cinema", count: 48, color: "bg-accent/20 border-accent/30 text-accent" },
  { name: "Esportes e E-sports", count: 29, color: "bg-primary/20 border-primary/30 text-primary" },
  { name: "Documentários", count: 30, color: "bg-accent/20 border-accent/30 text-accent" },
  { name: "Humor e Séries", count: 38, color: "bg-primary/20 border-primary/30 text-primary" },
  { name: "Infantil e Juvenis", count: 66, color: "bg-accent/20 border-accent/30 text-accent" },
  { name: "Lifestyle e Realities", count: 75, color: "bg-primary/20 border-primary/30 text-primary" },
  { name: "Notícias", count: 15, color: "bg-accent/20 border-accent/30 text-accent" }
];

const Categories = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Nossas <span className="text-primary">Categorias</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo diversificado para todos os gostos e idades
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 p-6 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <Badge className={`${category.color} self-start border`}>
                  {category.count} canais
                </Badge>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            E muito mais categorias disponíveis no app!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
