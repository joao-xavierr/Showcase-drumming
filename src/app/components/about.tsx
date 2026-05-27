import { motion } from "motion/react";
import { Award, Music4, Users, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const stats = [
    {
      icon: Music4,
      number: "10+",
      label: "Anos de Experiência",
    },
    {
      icon: Users,
      number: "30+",
      label: "Shows Realizados",
    },
    {
      icon: Award,
      number: "10+",
      label: "Gravações em Estúdio",
    },
    {
      icon: Zap,
      number: "∞",
      label: "Energia no Palco",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Baterista amador com experiência em diversos estilos musicais.
            Do rock ao pagode, do pop ao metal.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 border-white/10 text-center p-6 hover:border-red-500/50 transition-colors">
                <CardContent className="p-0">
                  <stat.icon className="size-10 text-red-500 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-zinc-900/50 border-white/10">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl mb-4">Minha Trajetória</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Comecei a tocar bateria aos 8 anos e desde então a música se tornou uma paixão.
                  Ao longo da minha vida, tive a oportunidade de tocar em diversos palcos e projetos musicais.
                </p>
                <p>
                  Estou sempre disponível para novas oportunidades: shows, sessões de gravação,
                  eventos corporativos e muito mais.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
