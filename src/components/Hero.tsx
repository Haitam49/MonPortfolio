import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

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
      className="min-h-screen flex items-center justify-center pt-24 pb-16 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Hi,
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold">
                I'm <span className="text-primary">John</span>
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Étudiant Informatique
              </h2>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image with Blob */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Blob Shape */}
              <div className="absolute inset-0 bg-primary rounded-blob-shape animate-blob" />
              
              {/* Profile Image Container */}
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-muted">
                  <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-primary">
                    JD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
