import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      level: 90,
      color: "primary",
      category: "Lenguajes"
    },
    {
      name: "Java",
      level: 85,
      color: "secondary",
      category: "Lenguajes"
    },
    {
      name: "SQL",
      level: 80,
      color: "accent",
      category: "Bases de Datos"
    },
    {
      name: "n8n Automation",
      level: 95,
      color: "primary",
      category: "Automatización"
    }
  ];

  const categories = ["Lenguajes", "Bases de Datos", "Automatización"];

  return (
    <section className="py-20 bg-gradient-dark relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
            HABILIDADES <span className="text-primary">TÉCNICAS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones innovadoras
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <Card 
              key={category}
              className="bg-gradient-card border-primary/20 p-8 shadow-card hover:shadow-neon transition-all duration-500 group"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="font-orbitron text-xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                {category}
              </h3>
              
              <div className="space-y-6">
                {skills.filter(skill => skill.category === category).map((skill, index) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-inter font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    {/* Custom Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${
                            skill.color === 'primary' ? 'from-primary to-primary-glow' :
                            skill.color === 'secondary' ? 'from-secondary to-secondary-glow' :
                            'from-accent to-accent-glow'
                          } rounded-full transition-all duration-1000 ease-out shadow-neon`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 0.2 + index * 0.1}s`
                          }}
                        ></div>
                      </div>
                      
                      {/* Glow effect */}
                      <div 
                        className={`absolute top-0 h-2 rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out ${
                          skill.color === 'primary' ? 'bg-primary' :
                          skill.color === 'secondary' ? 'bg-secondary' :
                          'bg-accent'
                        }`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Special Highlight for n8n */}
        <div className="mt-12">
          <Card className="bg-gradient-card border-accent/30 p-8 shadow-neon-strong relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-orbitron text-2xl font-bold text-accent mb-2">
                    🏆 Especialización en n8n
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    El profesional más capacitado en automatización con n8n en Florencia, Caquetá. 
                    Experiencia desde 2024 creando flujos de trabajo automatizados complejos.
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent font-medium">
                      Experto Local
                    </span>
                    <span className="px-4 py-2 bg-gradient-neon/20 border border-primary/30 rounded-full text-primary font-medium">
                      2024 - Presente
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-orbitron font-black text-accent animate-text-glow">95%</div>
                  <div className="text-muted-foreground">Competencia</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;