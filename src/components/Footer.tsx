import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <span className="text-neutral-950 tracking-wider">INK</span>
              </div>
              <span className="text-xl tracking-wider">NOIR STUDIO</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Transformando visiones en arte corporal permanente desde 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 tracking-wider">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#gallery" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Cuidado del Tatuaje
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © 2024 Noir Studio. Todos los derechos reservados.
          </p>
          <p className="text-neutral-400 text-sm flex items-center gap-1">
            Hecho con <Heart className="text-amber-500" size={14} fill="currentColor" /> para el arte
          </p>
        </div>
      </div>
    </footer>
  );
}
