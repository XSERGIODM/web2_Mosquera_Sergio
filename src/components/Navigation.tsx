import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-orbitron font-black text-xl text-foreground">
            <span className="text-primary">SERGIO</span>
            <span className="text-secondary">DEV</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors font-inter"
            >
              Sobre Mí
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-primary transition-colors font-inter"
            >
              Habilidades
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-colors font-inter"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-muted-foreground hover:text-primary transition-colors font-inter"
            >
              Certificados
            </button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="font-orbitron bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon hover:shadow-neon-strong transition-all duration-300"
            >
              Contacto
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            size="sm" 
            variant="outline"
            className="md:hidden border-primary text-primary"
          >
            ≡
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;