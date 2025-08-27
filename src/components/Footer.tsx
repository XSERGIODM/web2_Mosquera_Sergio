const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark border-t border-primary/20 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-orbitron font-black text-2xl text-foreground mb-2">
              <span className="text-primary">SERGIO</span>
              <span className="text-secondary">DEV</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Innovación a través de la automatización
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/xsergiodm" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                GitHub
              </a>
              <a href="https://www.instagram.com/xsergio_dm" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Instagram
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sergio Danilo Mosquera
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Desarrollado con ❤️ y tecnología
            </p>
          </div>
        </div>
        
        {/* Neon Line */}
        <div className="mt-8 pt-8 border-t border-muted/20">
          <div className="w-full h-px bg-gradient-neon opacity-50"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;