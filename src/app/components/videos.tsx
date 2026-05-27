import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Videos() {
  // Aqui você pode substituir pelos IDs reais dos seus vídeos do YouTube
  const videos = [
    {
      id: "", // Substitua pelo ID real do seu vídeo
      title: "Show ao Vivo - Rock Festival 2024",
      thumbnail: "https://images.unsplash.com/photo-1588032786045-59cefda005c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVtbWVyJTIwcGxheWluZyUyMGRydW1zJTIwY29uY2VydHxlbnwxfHx8fDE3Nzk4NzMyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "",
      title: "Drum Solo - Estúdio Session",
      thumbnail: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVtJTIwa2l0JTIwbXVzaWNpYW4lMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3Nzk4NzMyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "",
      title: "Performance - Jazz Club",
      thumbnail: "https://images.unsplash.com/photo-1600779547877-be592ef5aad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBkcnVtbWVyJTIwc3RhZ2V8ZW58MXx8fHwxNzc5ODczMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="videos" className="py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Vídeos
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Confira algumas das minhas performances e trabalhos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 border-white/10 overflow-hidden hover:border-red-500/50 transition-colors group">
                <CardContent className="p-0">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video overflow-hidden"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="size-8 fill-white text-white ml-1" />
                      </div>
                    </div>
                  </a>
                  <div className="p-4">
                    <h3 className="text-lg">{video.title}</h3>
                  </div>
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
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
}
