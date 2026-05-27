import { Music2 } from "lucide-react";
import { motion } from "motion/react";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Music2 className="size-6 text-red-500" />
          <span className="font-bold text-xl">Drummer</span>
        </div>
        
        <div className="hidden md:flex gap-6">
          <button 
            onClick={() => scrollToSection("home")}
            className="hover:text-red-500 transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="hover:text-red-500 transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection("gallery")}
            className="hover:text-red-500 transition-colors"
          >
            Galeria
          </button>
          <button 
            onClick={() => scrollToSection("videos")}
            className="hover:text-red-500 transition-colors"
          >
            Vídeos
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="hover:text-red-500 transition-colors"
          >
            Contato
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
