import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
              <a href="https://github.com/Haitam49" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                      <Github className="w-5 h-5" />
                  </Button>
              </a>
              <a href="https://www.linkedin.com/in/haitamboulhna" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                      <Linkedin className="w-5 h-5" />
                  </Button>
              </a>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center gap-2 justify-center">
              © 2025 Haitam Boulhna • كل الشكر والحمد لله
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
