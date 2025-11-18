import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Studies = () => {
  const education = [
    {
      degree: "Master en Informatique",
      school: "Université de Technologie",
      period: "2023 - 2025",
      description: "Spécialisation en développement web et intelligence artificielle",
    },
    {
      degree: "Licence en Informatique",
      school: "Université des Sciences",
      period: "2020 - 2023",
      description: "Formation générale en informatique et programmation",
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Lycée Technique",
      period: "2019 - 2020",
      description: "Option mathématiques et sciences de l'ingénieur",
    },
  ];

  return (
    <section id="studies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Mon Parcours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ma formation académique et mon développement professionnel
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-soft"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-accent-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2">{item.school}</p>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{item.period}</span>
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

export default Studies;
