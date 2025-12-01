import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1679621550970-32d6587b62c4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Noir Studio Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-neutral-900 border border-amber-500/30 p-8">
              <div className="text-center">
                <div className="text-4xl text-amber-500 mb-2">10+</div>
                <div className="text-neutral-400 text-sm tracking-wider">AÑOS DE EXPERIENCIA</div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 border border-amber-500/30 bg-amber-500/5 mb-4">
              <span className="text-amber-500 tracking-widest text-xs">SOBRE NOSOTROS</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6">Arte que Perdura</h2>

            <p className="text-neutral-400 mb-6 leading-relaxed">
              Noir Studio nace de la pasión por el arte corporal y el compromiso con la excelencia.
              Somos un equipo de artistas dedicados que transforman historias personales en obras maestras permanentes.
            </p>

            <p className="text-neutral-400 mb-8 leading-relaxed">
              Cada cliente es único, y cada tatuaje que creamos es una colaboración íntima entre
              artista y portador. Nos enorgullecemos de mantener los más altos estándares de
              profesionalismo, higiene y calidad artística.
            </p>

            {/* Values */}
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Award,
                  title: "Excelencia Artística",
                  description: "Cada trazo es ejecutado con precisión y cuidado meticuloso.",
                },
                {
                  icon: Users,
                  title: "Enfoque Personal",
                  description: "Tu visión es nuestra prioridad. Escuchamos y creamos juntos.",
                },
                {
                  icon: Heart,
                  title: "Pasión por el Arte",
                  description: "El tatuaje es más que un trabajo, es nuestra forma de vida.",
                },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                        <Icon className="text-amber-500" size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg mb-1">{value.title}</h4>
                      <p className="text-neutral-400 text-sm">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-4 border border-amber-500 text-amber-500 hover:bg-amber-500/10 transition-all duration-300 tracking-wider"
            >
              CONOCE AL EQUIPO
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
