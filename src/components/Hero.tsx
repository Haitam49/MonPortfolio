import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="profile"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 shadow-medium">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary">
                JD
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            John Doe
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-3">
            Étudiant en Informatique
          </p>
          
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Passionné par le développement web et les nouvelles technologies
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium"
              onClick={() => scrollToSection("projects")}
            >
              Voir mes projets
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("skills")}
            >
              Mes compétences
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
