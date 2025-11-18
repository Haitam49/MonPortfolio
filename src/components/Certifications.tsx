import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2024",
      badge: "AWS",
    },
    {
      name: "React Professional Certificate",
      issuer: "Meta",
      date: "2023",
      badge: "React",
    },
    {
      name: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      badge: "Full Stack",
    },
    {
      name: "JavaScript Algorithms",
      issuer: "FreeCodeCamp",
      date: "2022",
      badge: "JavaScript",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mes certifications professionnelles et formations validées
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-soft group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Award className="w-7 h-7" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {cert.badge}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
