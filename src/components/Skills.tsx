import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layout, Server, Smartphone, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "Python", "Django", "REST API", "GraphQL"],
    },
    {
      title: "Base de données",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      title: "Langages",
      icon: Code2,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
    },
    {
      title: "Outils",
      icon: Wrench,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Webpack", "Jest"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que je maîtrise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-soft group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Progress Bars for Main Skills */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Niveaux de maîtrise</h3>
          <div className="space-y-6">
            {[
              { name: "React / TypeScript", level: 90 },
              { name: "Node.js / Express", level: 85 },
              { name: "Python / Django", level: 80 },
              { name: "Bases de données", level: 85 },
              { name: "DevOps / Cloud", level: 75 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
