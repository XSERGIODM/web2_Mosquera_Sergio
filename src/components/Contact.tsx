import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
            CONECTA <span className="text-primary">CONMIGO</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ¿Listo para automatizar tus procesos o colaborar en un proyecto? ¡Hablemos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-primary/20 p-8 shadow-card hover:shadow-neon transition-all duration-300">
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-6">
                Información de <span className="text-primary">Contacto</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-foreground">Email</h4>
                    <p className="text-muted-foreground">xsergiodm.empresarial@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 border border-secondary/30 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground">+57 310 234 00 24</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 border border-accent/30 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-foreground">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/xsergiodm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/xsergiodm</a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Services */}
            <Card className="bg-gradient-card border-accent/20 p-8 shadow-card">
              <h3 className="font-orbitron text-xl font-bold text-foreground mb-4">
                Servicios Especializados
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Automatización con n8n</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-muted-foreground">Desarrollo de APIs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Consultoría Técnica</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Integración de Sistemas</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-primary/20 p-8 shadow-neon relative overflow-hidden">
              {/* Background Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="font-orbitron text-2xl font-bold text-foreground mb-4">
                  ¿Necesitas Automatización?
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Como el experto en n8n más capacitado en Florencia, Caquetá, puedo ayudarte a:
                </p>
                
                <ul className="space-y-2 mb-8 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    Optimizar procesos empresariales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    Conectar diferentes plataformas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    Reducir tareas manuales repetitivas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    Crear flujos de trabajo inteligentes
                  </li>
                </ul>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full font-orbitron bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon hover:shadow-neon-strong transition-all duration-300"
                  >
                    Solicitar Consulta Gratuita
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full font-orbitron border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    Ver Portfolio Completo
                  </Button>
                </div>
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="bg-gradient-card border-accent/20 p-6 shadow-card text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="font-orbitron font-bold text-accent">Disponible para Proyectos</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Respondo dentro de 24 horas
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;