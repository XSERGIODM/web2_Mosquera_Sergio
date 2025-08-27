import { Card } from "@/components/ui/card";

const About = () => {
  // Calcular edad automáticamente
  const calculateAge = () => {
    const birthDate = new Date(1999, 0, 1); // 1 enero 1999
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
            SOBRE <span className="text-primary">MÍ</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon rounded-full mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-primary/20 p-8 shadow-card hover:shadow-neon transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-neon">
                    <span className="font-orbitron font-bold text-primary-foreground text-lg">
                      {calculateAge()}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-foreground">Edad</h3>
                    <p className="text-muted-foreground">Años de experiencia en la vida</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-neon">
                    <span className="font-orbitron font-bold text-secondary-foreground">📍</span>
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-foreground">Ubicación</h3>
                    <p className="text-muted-foreground">Florencia, Caquetá, Colombia</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-neon">
                    <span className="font-orbitron font-bold text-accent-foreground">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-foreground">Educación</h3>
                    <p className="text-muted-foreground">Ingeniería de Sistemas</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Personal Description */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-orbitron text-2xl font-bold text-foreground">
                Desarrollador & <span className="text-primary">Innovador</span>
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Soy una persona <strong className="text-primary">alegre</strong> y <strong className="text-secondary">dedicada</strong>, 
                apasionado por las nuevas tecnologías y el aprendizaje constante. Mi curiosidad me impulsa 
                a explorar las últimas innovaciones en el desarrollo de software.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Me especializo en automatización con <strong className="text-accent">n8n</strong>, donde he desarrollado 
                experiencia desde 2024, convirtiéndome en el profesional más capacitado en esta tecnología 
                en mi ciudad.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cuando no estoy programando, disfruto de los deportes y explorando nuevas tecnologías 
                que puedan transformar la forma en que trabajamos y vivimos.
              </p>
            </div>
            
            {/* Interests Tags */}
            <div className="flex flex-wrap gap-3">
              {["Deportes", "Nuevas Tecnologías", "Aprendizaje", "Automatización", "Innovación"].map((interest, index) => (
                <span 
                  key={interest}
                  className="px-4 py-2 bg-gradient-card border border-primary/30 rounded-full text-sm font-inter font-medium text-foreground hover:border-primary/60 transition-all duration-300 hover:shadow-neon cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;