import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      title: "Développeur Full Stack",
      company: "Tech Innovate",
      location: "Paris, France",
      period: "Juin 2024 - Présent",
      type: "Stage",
      description: "Développement d'applications web avec React et Node.js. Participation à la conception d'APIs RESTful et à l'optimisation des performances.",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
    },
    {
      title: "Développeur Frontend",
      company: "Digital Solutions",
      location: "Lyon, France",
      period: "Été 2023",
      type: "Stage",
      description: "Création d'interfaces utilisateur responsive et modernes. Intégration de designs UI/UX avec Figma et développement avec React.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    },
    {
      title: "Assistant Développeur",
      company: "StartUp Lab",
      location: "Remote",
      period: "2022 - 2023",
      type: "Freelance",
      description: "Développement de sites web pour petites entreprises. Maintenance et optimisation SEO de sites existants.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Expériences Professionnelles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon parcours professionnel et mes expériences en entreprise
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-medium group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow">
                          <Briefcase className="w-7 h-7 text-primary-foreground" />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-gradient-secondary text-white"
                          >
                            {exp.type}
                          </Badge>
                        </div>
                        <p className="text-primary font-semibold mb-1">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-primary/30 text-foreground hover:bg-accent hover:border-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
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

export default Experiences;
