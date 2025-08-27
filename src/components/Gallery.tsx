import { Card } from "@/components/ui/card";

const Gallery = () => {
  const certificates = [
    {
      title: "Certificación JavaScript",
      institution: "Plataforma Educativa",
      year: "2023",
      type: "certificate"
    },
    {
      title: "Especialización en n8n",
      institution: "Autodidacta",
      year: "2024",
      type: "achievement"
    },
    {
      title: "Proyecto de Automatización",
      institution: "Universidad",
      year: "2024",
      type: "project"
    },
    {
      title: "SQL Avanzado",
      institution: "Curso Online",
      year: "2023",
      type: "certificate"
    },
    {
      title: "Java Programming",
      institution: "Instituto Técnico",
      year: "2022",
      type: "certificate"
    },
    {
      title: "Liderazgo en Automatización",
      institution: "Reconocimiento Local",
      year: "2024",
      type: "achievement"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'certificate': return 'primary';
      case 'achievement': return 'accent';
      case 'project': return 'secondary';
      default: return 'primary';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'certificate': return '📜';
      case 'achievement': return '🏆';
      case 'project': return '💡';
      default: return '📜';
    }
  };

  return (
    <section className="py-20 bg-gradient-dark relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/6 w-32 h-32 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-28 h-28 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
            CERTIFICADOS & <span className="text-primary">LOGROS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reconocimientos y certificaciones que avalan mi experiencia y conocimientos
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.title}
              className="bg-gradient-card border-primary/20 p-6 shadow-card hover:shadow-neon transition-all duration-500 group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                getTypeColor(cert.type) === 'primary' ? 'bg-primary' :
                getTypeColor(cert.type) === 'secondary' ? 'bg-secondary' :
                'bg-accent'
              }`}></div>
              
              <div className="relative z-10">
                {/* Certificate Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    getTypeColor(cert.type) === 'primary' ? 'bg-primary/20 border border-primary/30' :
                    getTypeColor(cert.type) === 'secondary' ? 'bg-secondary/20 border border-secondary/30' :
                    'bg-accent/20 border border-accent/30'
                  }`}>
                    <span className="text-xl">{getTypeIcon(cert.type)}</span>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    getTypeColor(cert.type) === 'primary' ? 'bg-primary/20 text-primary' :
                    getTypeColor(cert.type) === 'secondary' ? 'bg-secondary/20 text-secondary' :
                    'bg-accent/20 text-accent'
                  }`}>
                    {cert.year}
                  </span>
                </div>

                {/* Certificate Info */}
                <h3 className="font-orbitron text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {cert.institution}
                </p>

                {/* Hover Effect */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 rounded-full ${
                    getTypeColor(cert.type) === 'primary' ? 'bg-gradient-to-r from-primary to-primary-glow' :
                    getTypeColor(cert.type) === 'secondary' ? 'bg-gradient-to-r from-secondary to-secondary-glow' :
                    'bg-gradient-to-r from-accent to-accent-glow'
                  } shadow-neon`}></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card border-primary/20 p-6 text-center shadow-card hover:shadow-neon transition-all duration-300">
            <div className="text-3xl font-orbitron font-black text-primary mb-2 animate-text-glow">6+</div>
            <div className="text-muted-foreground">Certificaciones</div>
          </Card>
          
          <Card className="bg-gradient-card border-secondary/20 p-6 text-center shadow-card hover:shadow-neon transition-all duration-300">
            <div className="text-3xl font-orbitron font-black text-secondary mb-2 animate-text-glow">2+</div>
            <div className="text-muted-foreground">Años de Experiencia</div>
          </Card>
          
          <Card className="bg-gradient-card border-accent/20 p-6 text-center shadow-card hover:shadow-neon transition-all duration-300">
            <div className="text-3xl font-orbitron font-black text-accent mb-2 animate-text-glow">#1</div>
            <div className="text-muted-foreground">Experto n8n Local</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;