import { motion } from "motion/react";
import { Sparkles, Palette, Shield, Clock } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Diseño Personalizado",
    description: "Trabajamos contigo para crear un diseño único que refleje tu personalidad y visión.",
  },
  {
    icon: Sparkles,
    title: "Estilos Diversos",
    description: "Realismo, geométrico, tradicional, blackwork y más. Dominamos múltiples técnicas.",
  },
  {
    icon: Shield,
    title: "Higiene Profesional",
    description: "Equipo esterilizado, productos de primera calidad y protocolos de seguridad estrictos.",
  },
  {
    icon: Clock,
    title: "Consultas Gratuitas",
    description: "Agenda una consulta sin compromiso para discutir tu proyecto y resolver dudas.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-amber-500/30 bg-amber-500/5 mb-4">
            <span className="text-amber-500 tracking-widest text-xs">LO QUE OFRECEMOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">Nuestros Servicios</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Ofrecemos una experiencia completa desde la consulta inicial hasta el cuidado posterior.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-950 p-8 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <Icon className="text-amber-500" size={28} />
                  </div>
                </div>
                <h3 className="text-xl mb-3 text-neutral-100">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20 border-t border-neutral-800 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl mb-4">Nuestro Proceso</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "01", title: "Consulta", desc: "Discutimos tu idea y visión" },
              { number: "02", title: "Diseño", desc: "Creamos el boceto perfecto" },
              { number: "03", title: "Tatuaje", desc: "Realizamos tu arte con precisión" },
              { number: "04", title: "Cuidado", desc: "Te guiamos en el proceso de curación" },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl text-amber-500 mb-4">{step.number}</div>
                <h4 className="text-xl mb-2">{step.title}</h4>
                <p className="text-neutral-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
