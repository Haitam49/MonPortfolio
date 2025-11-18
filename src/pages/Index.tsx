import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Studies from "@/components/Studies";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Studies />
      <Certifications />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Index;
