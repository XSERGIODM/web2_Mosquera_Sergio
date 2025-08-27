import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import automationWorkspace from "@/assets/automation-workspace.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Automatización de Workflows",
      description: "Sistema completo de automatización empresarial utilizando n8n para optimizar procesos y reducir tareas manuales.",
      tech: ["n8n", "JavaScript", "APIs", "Webhooks"],
      status: "Completado",
      color: "primary",
      image: automationWorkspace
    },
    {
      title: "Dashboard de Gestión",
      description: "Interfaz web moderna para monitoreo y control de procesos automatizados con métricas en tiempo real.",
      tech: ["JavaScript", "SQL", "Chart.js", "REST APIs"],
      status: "En Desarrollo",
      color: "secondary"
    },
    {
      title: "Sistema de Integración",
      description: "Conectores personalizados para integrar diferentes plataformas y servicios de manera fluida.",
      tech: ["Java", "SQL", "n8n", "API Integration"],
      status: "Planificado",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
            MIS <span className="text-primary">PROYECTOS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones innovadoras que he desarrollado aplicando mis conocimientos técnicos
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <Card className="bg-gradient-card border-primary/20 overflow-hidden shadow-neon-strong relative">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={automationWorkspace} 
                  alt="Automatización con n8n workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 lg:to-background/80"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="px-3 py-1 bg-accent/20 border border-accent/30 text-accent rounded-full text-xs font-medium w-fit mb-4">
                  Proyecto Destacado
                </span>
                <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Sistema de Automatización Avanzado
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Plataforma completa de automatización desarrollada con n8n que revoluciona 
                  los procesos empresariales, reduciendo el trabajo manual en un 80% y 
                  aumentando la eficiencia operacional.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["n8n", "JavaScript", "REST APIs", "Webhooks", "Database Integration"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/20 border border-primary/30 rounded text-xs font-inter text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  size="lg"
                  className="w-fit font-orbitron bg-gradient-neon text-primary-foreground hover:shadow-neon-strong transition-all duration-300"
                >
                  Ver Detalles del Proyecto
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <Card 
              key={project.title}
              className="bg-gradient-card border-primary/20 p-6 shadow-card hover:shadow-neon transition-all duration-500 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 ${
                project.color === 'primary' ? 'bg-primary' :
                project.color === 'secondary' ? 'bg-secondary' :
                'bg-accent'
              }`}></div>
              
              <div className="relative z-10">
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    project.status === 'Completado' 
                      ? 'bg-accent/20 border-accent/30 text-accent'
                      : project.status === 'En Desarrollo'
                      ? 'bg-primary/20 border-primary/30 text-primary'
                      : 'bg-secondary/20 border-secondary/30 text-secondary'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Info */}
                <h3 className="font-orbitron text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted/50 border border-muted rounded text-xs font-inter text-muted-foreground hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  size="sm" 
                  variant="outline"
                  className={`w-full font-inter ${
                    project.color === 'primary' ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' :
                    project.color === 'secondary' ? 'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground' :
                    'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                  } transition-all duration-300 hover:shadow-neon`}
                >
                  {project.status === 'Completado' ? 'Ver Detalles' : 
                   project.status === 'En Desarrollo' ? 'Seguir Progreso' : 
                   'Próximamente'}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-primary/20 p-8 shadow-neon inline-block">
            <h3 className="font-orbitron text-2xl font-bold text-foreground mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-muted-foreground mb-6">
              Colaboremos para crear algo increíble juntos
            </p>
            <Button 
              size="lg"
              className="font-orbitron bg-gradient-neon text-primary-foreground hover:shadow-neon-strong transition-all duration-300"
            >
              Iniciar Conversación
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
