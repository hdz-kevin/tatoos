import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Galería", href: "#gallery" },
    { label: "Servicios", href: "#services" },
    { label: "Nosotros", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-lg border-b border-neutral-800">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <span className="text-neutral-950 tracking-wider">INK</span>
            </div>
            <span className="text-xl tracking-wider">NOIR STUDIO</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-300 hover:text-amber-500 transition-colors duration-300 tracking-wide text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-amber-500 text-neutral-950 hover:bg-amber-400 transition-all duration-300 tracking-wider text-sm"
            >
              RESERVAR CITA
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-amber-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-neutral-800 overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-neutral-300 hover:text-amber-500 transition-colors duration-300 tracking-wide text-sm py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-6 py-2.5 bg-amber-500 text-neutral-950 hover:bg-amber-400 transition-all duration-300 tracking-wider text-sm text-center"
                >
                  RESERVAR CITA
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
