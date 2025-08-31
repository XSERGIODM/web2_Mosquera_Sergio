import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, Menu } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };
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
              onClick={() => handleNavClick('about')}
              className="text-muted-foreground hover:text-primary transition-colors font-inter"
            >
              Sobre Mí
            </button>
            <button 
              onClick={() => handleNavClick('skills')}
              className="text-muted-foreground hover:text-primary transition-colors font-inter"
            >
              Habilidades
            </button>
            <button 
              onClick={() => handleNavClick('projects')}
              className="text-muted-foreground hover:text-primary transition-colors font-inter"
            >
              Proyectos
            </button>
            <button 
              onClick={() => handleNavClick('gallery')}
              className="text-muted-foreground hover:text-primary transition-colors font-inter"
            >
              Certificados
            </button>
            <Button 
              size="sm"
              onClick={() => handleNavClick('contact')}
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
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-primary/20 py-4 px-6 shadow-lg">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => handleNavClick('about')}
                  className="text-muted-foreground hover:text-primary transition-colors font-inter text-left py-2"
                >
                  Sobre Mí
                </button>
                <button 
                  onClick={() => handleNavClick('skills')}
                  className="text-muted-foreground hover:text-primary transition-colors font-inter text-left py-2"
                >
                  Habilidades
                </button>
                <button 
                  onClick={() => handleNavClick('projects')}
                  className="text-muted-foreground hover:text-primary transition-colors font-inter text-left py-2"
                >
                  Proyectos
                </button>
                <button 
                  onClick={() => handleNavClick('gallery')}
                  className="text-muted-foreground hover:text-primary transition-colors font-inter text-left py-2"
                >
                  Certificados
                </button>
                <Button 
                  size="sm"
                  onClick={() => handleNavClick('contact')}
                  className="font-orbitron bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
                >
                  Contacto
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;