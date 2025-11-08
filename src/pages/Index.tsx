import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Categories />
      <DownloadCTA />
      <Footer />
    </div>
  );
};

export default Index;
