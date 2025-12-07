import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 border border-amber-500/30 bg-amber-500/5 mb-4">
            <span className="text-amber-500 tracking-widest text-xs">CONTÁCTANOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">Agenda Tu Cita</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-950 p-8 border border-neutral-800"
          >
            <h3 className="text-2xl mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-neutral-400 mb-2 tracking-wide">
                    NOMBRE
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-neutral-100 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-neutral-400 mb-2 tracking-wide">
                    APELLIDO
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-neutral-100 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-neutral-400 mb-2 tracking-wide">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-neutral-100 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-neutral-400 mb-2 tracking-wide">
                  TELÉFONO
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-neutral-100 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-neutral-400 mb-2 tracking-wide">
                  MENSAJE
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-neutral-100 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu idea de tatuaje..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-amber-500 text-neutral-950 hover:bg-amber-400 transition-all duration-300 tracking-wider"
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-neutral-950 p-6 border border-neutral-800">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <MapPin className="text-amber-500" size={20} />
                </div>
                <div>
                  <h4 className="mb-1">Ubicación</h4>
                  <p className="text-neutral-300 text-sm">
                    Avenida Miguel Hidalgo #503<br />
                    Teziutlán, Puebla
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-neutral-950 p-6 border border-neutral-800">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <Phone className="text-amber-500" size={20} />
                </div>
                <div>
                  <h4 className="mb-1">Teléfono</h4>
                  <p className="text-neutral-300 text-sm">+52 222 123 456</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-neutral-950 p-6 border border-neutral-800">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <Mail className="text-amber-500" size={20} />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-neutral-300 text-sm">noirstudio@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-neutral-950 p-6 border border-neutral-800">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <Clock className="text-amber-500" size={20} />
                </div>
                <div>
                  <h4 className="mb-1">Horario</h4>
                  <p className="text-neutral-300 text-sm">
                    Lunes - Viernes: 10:00 - 20:00<br />
                    Sábado: 11:00 - 19:00<br />
                    Domingo: 11:00 - 15:00
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-neutral-950 p-6 border border-neutral-800">
              <h4 className="mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-neutral-900 border border-neutral-800 hover:border-amber-500 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="text-neutral-400 hover:text-amber-500 transition-colors" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-neutral-900 border border-neutral-800 hover:border-amber-500 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="text-neutral-400 hover:text-amber-500 transition-colors" size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
