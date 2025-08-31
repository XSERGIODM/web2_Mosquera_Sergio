import { Button } from "@/components/ui/button";
import heroAvatar from "@/assets/hero-avatar.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden py-16 lg:py-0">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Floating Neon Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary rounded-full blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-accent rounded-full blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 z-10 pt-20 lg:pt-0">
        {/* Avatar Section */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-1">
          <div className="relative">
            <div className="w-96 h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-neon-strong">
              <img 
                src={heroAvatar} 
                alt="Sergio Danilo Mosquera - Software Developer"
                className="w-full h-full object-cover object-center scale-150"
                style={{ objectPosition: 'center -25%' }}
              />
            </div>
            {/* Floating elements around avatar */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-float blur-sm opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-float blur-sm opacity-60" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
          {/* Main Title with Neon Effect */}
          <div className="space-y-4">
            <h1 className="font-orbitron text-5xl md:text-7xl font-black text-foreground animate-text-glow">
              SERGIO DANILO
            </h1>
            <h2 className="font-orbitron text-xl md:text-3xl font-bold text-primary animate-slide-up">
              MOSQUERA QUIGUA
            </h2>
          </div>
          
          {/* Subtitle */}
          <p className="font-inter text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Estudiante de Ingeniería de Sistemas
          </p>
          
          {/* Neon Divider */}
          <div className="flex justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-32 h-1 bg-gradient-neon rounded-full shadow-neon"></div>
          </div>
          
          {/* Description */}
          <p className="font-inter text-base text-muted-foreground max-w-xl animate-slide-up" style={{ animationDelay: '1s' }}>
            Desarrollador apasionado por las nuevas tecnologías, experto en automatización con n8n, 
            y siempre en busca de desafíos que me permitan crecer profesionalmente.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg" 
              className="font-orbitron bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon hover:shadow-neon-strong transition-all duration-300 border border-primary/50"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver Proyectos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-orbitron border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-neon hover:shadow-neon-strong transition-all duration-300"
              onClick={() => window.open('https://wa.me/573102340024?text=¡Hola%20Sergio!%20Vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.', '_blank')}
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;