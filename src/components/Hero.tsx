import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

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

              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-primary">BOULHNA Haitam</span>
              </h1>
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Étudiant en Informatique
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-medium">
                  Développement, Data, Machine Learning & AI
                </p>
              </div>
                <p className="text-xl md:text-2xl text-muted-foreground mt-2">
                    Passionné par la data science, l'IA et le machine learning,
                    je m'intéresse à transformer les données en insights concrets
                    et innovants aidant à la prise de décision.
                </p>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg px-8"
                onClick={() => window.open("https://drive.google.com/file/d/1iIPqwCqmQNfMGqzdIsWebxfWmz_lRWLy/view?usp=sharing", "_blank", "noopener,noreferrer")}
              >
                <FileText className="w-5 h-5 mr-2" />
                Consulter mon CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/haitamboulhna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Haitam49"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
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
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
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
