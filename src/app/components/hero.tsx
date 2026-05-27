import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Instagram, Music, Mail } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1588032786045-59cefda005c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVtbWVyJTIwcGxheWluZyUyMGRydW1zJTIwY29uY2VydHxlbnwxfHx8fDE3Nzk4NzMyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music className="size-8 text-red-500" />
            <span className="text-red-500 uppercase tracking-wider">Baterista Amador</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 max-w-4xl mx-auto">
            Transformando ritmos em <span className="text-red-500">experiências</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Disponível para shows, gravações em estúdio e eventos especiais.
            Experiência em diversos estilos musicais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white px-8"
              onClick={scrollToContact}
            >
              <Mail className="size-5" />
              Entrar em Contato
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white px-8"
            >
              <Instagram className="size-5" />
              Instagram
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
