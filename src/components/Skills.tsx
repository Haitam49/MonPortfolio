import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Database, Layout, Server, Brain, Wrench, ExternalLink, ArrowRight,BarChart2,PieChart } from "lucide-react";

const Skills = () => {
  // ============================================
  // COMPÉTENCES TECHNIQUES - ÉDITION MANUELLE
  // ============================================
  // Pour ajouter/modifier des compétences :
  // 1. Ajoutez ou modifiez une catégorie dans le tableau ci-dessous
  // 2. Choisissez une icône parmi celles importées (Layout, Server, Database, etc.)
  // 3. Ajoutez vos compétences dans le tableau "skills"
  // 4. Les icônes disponibles : Layout, Server, Database, Smartphone, Code2, Wrench
  //    Vous pouvez aussi importer d'autres icônes depuis "lucide-react"
  // ============================================
  
  const skillCategories = [
      {
          title: "Langages",
          icon: Code2,
          skills: [
              "C",
              "Python ",
              "Java",
              "C++",
              "SQL"
          ],
      },
    {
      title: "Data Analysis & Data Wrangling",
      icon: BarChart2,
      skills: [

        "Exploration et nettoyage de données",
        "Analyse statistique et visualisation",
        "Manipulation de données volumineuses",

      ],
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        "Régression, classification, clustering, recommandation",
        "Deep Learning (CNN, RNN)",
        "Modélisation prédictive et évaluation de modèles",


      ],
    },
    {
      title: "Bases de données & Big Data",
      icon: Database,
      skills: [
        "SQL / NoSQL",
        "Gestion et extraction de données massives",

      ],
    },

    {
      title: "Outils & Environnements",
      icon: Wrench,
      skills: [
        "Jupyter Notebook, VS Code,IntelliJ",
        "Anaconda",
        "Spyder",

      ],
    },
    // Ajoutez vos propres catégories ici :
     {
       title: "Visualisation et reporting",
         icon: PieChart, // Remplacez par l'icône de votre choix
         skills: [
          "Tableau, Power BI",
          "Streamlit pour dashboards interactifs",

         ],
     },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
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

        {/* Barre de défilement automatique des bibliothèques */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Bibliothèques & Frameworks</h3>
            <p className="text-muted-foreground text-sm">
              Technologies avec lesquelles je travaille
            </p>
          </div>
          
          {/* ============================================
              BIBLIOTHÈQUES - ÉDITION MANUELLE
              ============================================
              Pour ajouter/modifier des logos :
              1. Ajoutez vos images dans le tableau "libraries" ci-dessous
              2. Utilisez le chemin vers vos images (dans /public ou URL)
                 Exemple: "/images/pandas-logo.png" ou "https://example.com/logo.png"
              3. Ajoutez un nom alternatif pour l'accessibilité
              4. Les images seront automatiquement dupliquées pour un défilement fluide
              ============================================ */}
          
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-scroll gap-8 whitespace-nowrap">
              {(() => {
                // Liste de vos bibliothèques - modifiez ici
                const libraries = [
                  { name: "Pandas", image: "https://k21academy.com/wp-content/uploads/2021/10/pandas-logo.png" },
                  { name: "NumPy", image: "https://media.licdn.com/dms/image/v2/D5612AQFAkpf455Herw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683658031333?e=2147483647&v=beta&t=VD3hHKluxnLXcPmqH_w4y_w573zr8npwnjPIsghSbIw" },
                  { name: "Scikit-learn", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" },
                  { name: "TensorFlow", image: "https://www.kalanda.net/wp-content/uploads/elementor/thumbs/TF_FullColor_Horizontal-q9w6t02gszrs0wrhgn19hxr17a1o0p0y8y3szk6kfo.png" },
                  { name: "PyTorch", image: "https://miro.medium.com/1*4br4WmxNo0jkcsY796jGDQ.jpeg" },
                  { name: "Matplotlib", image: "https://he-arc.github.io/livre-python/_images/matplotlib.png" },
                  { name: "Seaborn", image: "https://pypi-camo.freetls.fastly.net/189c5d99fbda79b2218f2d4a4fe29415d32c8d8a/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f6d7761736b6f6d2f736561626f726e2f6d61737465722f646f632f5f7374617469632f6c6f676f2d776964652d6c6967687462672e737667" },
                  { name: "Streamlit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_90yUni3jBuNFSiaJkwNs8SDbHX2t_3uAg&s" },
                ];
                
                // Dupliquer les images pour un défilement infini fluide
                return [...libraries, ...libraries].map((lib, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center h-20 w-32 bg-background rounded-lg border border-border/50 p-4 hover:border-primary/50 transition-colors"
                  >
                    <img
                      src={lib.image}
                      alt={lib.name}
                      className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Certifications</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mes certifications professionnelles et formations validées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AWS Certified Developer",
                description: "Certification professionnelle en développement cloud sur la plateforme Amazon Web Services",
                technologies: ["AWS", "Cloud", "DevOps"],
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
                url: "https://aws.amazon.com/certification/",
              },
              {
                title: "React Professional Certificate",
                description: "Certification Meta en développement React et applications web modernes",
                technologies: ["React", "JavaScript", "Frontend"],
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
                url: "https://www.meta.com/",
              },
              {
                title: "Full Stack Web Development",
                description: "Formation complète en développement web full stack avec projets pratiques",
                technologies: ["Full Stack", "Web Development", "MERN"],
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
                url: "https://www.coursera.org/",
              },
              {
                title: "JavaScript Algorithms",
                description: "Certification en algorithmes et structures de données en JavaScript",
                technologies: ["JavaScript", "Algorithms", "Data Structures"],
                image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=400&fit=crop",
                url: "https://www.freecodecamp.org/",
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-medium group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => window.open(cert.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir la certification
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.technologies.map((tech, techIndex) => (
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
              onClick={() => window.open("https://example.com/certifications", '_blank')}
              className="group"
            >
              Voir plus
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
