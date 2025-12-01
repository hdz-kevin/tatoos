import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1482328177731-274399da39f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3JraW5nfGVufDF8fHx8MTc2Mzk5NjQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tattoo Artist at Work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/70 to-neutral-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 border border-amber-500/30 bg-amber-500/5 mb-6">
            <span className="text-amber-500 tracking-widest text-xs">ARTE EN TU PIEL</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl mb-6 text-neutral-100">
            Noir Studio
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Transformamos tus ideas en obras de arte permanentes. Experiencia, profesionalismo y creatividad en cada trazo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#gallery"
              className="px-8 py-4 bg-amber-500 text-neutral-950 hover:bg-amber-400 transition-all duration-300 tracking-wider inline-block w-full sm:w-auto text-center"
            >
              VER GALERÍA
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-amber-500 text-amber-500 hover:bg-amber-500/10 transition-all duration-300 tracking-wider inline-block w-full sm:w-auto text-center"
            >
              AGENDAR CITA
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-amber-500/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
