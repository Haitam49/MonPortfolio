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
                      className="max-h-16 max-w-full object-contain transition-all duration-300"
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
                title: "Introduction à Java et à la programmation orientée objet",
                description: "Une certification qui introduit les bases du langage Java et les principes fondamentaux de la programmation orientée objet pour développer des applications structurées et modulaires.",
                technologies: ["JAVA", "Software Testing", "Object Oriented Programming (OOP)"],
                image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Z6H8A2KJKQ1M/CERTIFICATE_LANDING_PAGE~Z6H8A2KJKQ1M.jpeg",
                url: "https://www.coursera.org/account/accomplishments/verify/Z6H8A2KJKQ1M?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
              },
              {
                title: "Programming for Everybody (Getting Started with Python)",
                description: "Une certification qui enseigne les bases essentielles de Python afin de permettre à toute personne débutante de comprendre la programmation et d’écrire ses premiers scripts.",
                technologies: ["Python Programming", "Computational Thinking", "Development Environment"],
                image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UD7PR8BMGJXG/CERTIFICATE_LANDING_PAGE~UD7PR8BMGJXG.jpeg",
                url: "https://www.coursera.org/account/accomplishments/verify/UD7PR8BMGJXG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
              },
              {
                title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
                description: "Une certification qui introduit les concepts des conteneurs et enseigne l’utilisation de Docker, Kubernetes et OpenShift pour déployer et gérer des applications modernes.",
                technologies: ["Command-Line Interface", "Containerization", "DevOps"],
                image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~E38TASCG6BEO/CERTIFICATE_LANDING_PAGE~E38TASCG6BEO.jpeg",
                url: "https://www.coursera.org/account/accomplishments/verify/E38TASCG6BEO?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
              },
              {
                title: "Introduction à la programmation orientée objet (en C++)",
                description: "Une certification qui présente les bases du C++ et les principes essentiels de la programmation orientée objet pour concevoir des applications structurées et réutilisables.",
                technologies: ["C++ (Programming Language)", "Object Oriented Programming (OOP)", "Computer Programming"],
                image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~R84E6BQ5EHHB/CERTIFICATE_LANDING_PAGE~R84E6BQ5EHHB.jpeg",
                url: "https://www.coursera.org/account/accomplishments/verify/R84E6BQ5EHHB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
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
              onClick={() => window.open("https://docs.google.com/document/d/1MzOEaMKfeccx8-J26cq3LrwVJe7L_uulKePCC0eYWi8/edit?tab=t.0", '_blank')}
              className="group"
            >
              Voir plus
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Expériences Professionnelles Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Expériences Professionnelles</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mon parcours professionnel et mes réalisations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Stage en data science",
                date: "Juin 2025 - Août 2025",
                description: "Analyse du métier à travers des tableaux de bord interactifs réalisés avec Power BI, accompagnée d’une exploration et préparation des données à l’aide de Python (Pandas, NumPy, Scikit-learn). Conception puis déploiement d’un modèle de Machine Learning visant à prédire le délai de séjour des marchandises au port, avec présentation claire des résultats pour soutenir la prise de décision et optimiser les processus logistiques.",
                image: "https://bghit-nekhdem.com/wp-content/uploads/2021/07/portnet.png",
              },
              {
                title: "Stage en développement web",
                date: "Juin 2024 - Août 2024",
                description: "Conception et développement d’une application web avec Django (Python), intégrant des graphiques dynamiques et interactifs pour la visualisation des données. Ce projet a permis d’améliorer la prise de décision grâce à une interface intuitive, visuelle et orientée utilisateur.",
                image: "https://bghit-nekhdem.com/wp-content/uploads/2021/07/portnet.png",
              },
            ].map((experience, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-medium group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    {experience.date}
                  </p>
                  <p className="text-foreground/70">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
