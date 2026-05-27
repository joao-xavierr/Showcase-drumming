import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Videos } from "./components/videos";
import { Contact } from "./components/contact";
import { Navigation } from "./components/navigation";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Videos />
      <Contact />
      <Toaster />
    </div>
  );
}