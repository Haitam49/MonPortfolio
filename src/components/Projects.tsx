import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import vmImage from "@/assets/VisionMind.png";
import CharityImage from "@/assets/CharityApp.png";
import DlImage from "@/assets/DL.jpg";
import PowerbiImage from "@/assets/Pbi.png";


const Projects = () => {
  const projects = [
    {
      title: "Application de Questions-Réponses sur images – Vision Language Model (VLM)",
      description: "Réalisation d’un système capable d’analyser une image et de répondre à des questions textuelles grâce à un modèle Vision-Language. Le projet inclut le prétraitement des images, l’utilisation d’un modèle multimodal et la mise en place d’une interface permettant à l’utilisateur de charger une image et d’obtenir une réponse.",
      technologies: ["VLM","Python","Anaconda",""],
      image: vmImage,
    },
    {
      title: "Modèle de classification d’images de fruits – CNN avec TensorFlow/Keras intégré dans Flutter",
      description: "Création et entraînement d’un réseau de neurones convolutionnel pour classer des images de fruits, suivi de la conversion du modèle en TensorFlow Lite et son intégration dans une application mobile Flutter pour permettre la classification en temps réel sur mobile.",
      technologies: ["CNN", "Keras", "TensorFlow","Flutter"],
      image: DlImage,
    },
    {
      title: "CharityApp - Système de gestion de dons",
      description: "Conception d’une application web complète avec architecture en trois couches, sécurité Spring Security, gestion des organisations, actions et dons, et communication avec une base de données relationnelle.",
      technologies: ["Spring Boot","Spring Security", "H2 Database", "HTML","CSS"],
      image: CharityImage,
    },
    {
      title: "Tableaux de bord Power BI et Modélisation Machine Learning",
      description: "Développement d’un projet d’analyse de données visant à prévoir le délai de séjour des marchandises dans les ports. Le projet comprend la collecte et le nettoyage des données logistiques, l’exploration des tendances à l’aide de Power BI, et la création d’un modèle de Machine Learning pour estimer avec précision les délais. Cette solution permet d’optimiser la planification portuaire et de fournir des insights décisionnels pour la gestion des flux de marchandises.",
      technologies: ["Power BI", "Machine Learning", "Random Forest", "Pandas", "Numpy", "Scikit-Learn"],
      image: PowerbiImage,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Projets Académiques
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes projets réalisés durant ma formation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-medium group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-2 p-4">
                  <Button size="sm" variant="secondary">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-accent text-accent-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://example.com/projects", '_blank')}
            className="group"
          >
            Voir plus
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
