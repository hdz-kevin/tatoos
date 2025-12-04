import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1594070182331-51452dcd61c3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Black Ink Tattoo",
    category: "Realismo",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1562379825-415aea84ebcf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Detailed Tattoo Art",
    category: "Detallado",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Geometric Tattoo Design",
    category: "Geométrico",
  },
  {
    id: 4,
    src: "https://plus.unsplash.com/premium_photo-1707086194263-8ae88d647df7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Traditional Tattoo",
    category: "Tradicional",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1603828917425-8b5969eeae46?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tattoo Process",
    category: "Proceso",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/1200x/14/f7/0b/14f70baadde5f059a36d9f339cb11c1b.jpg",
    alt: "Studio Interior",
    category: "Estudio",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<
    number | null
  >(null);

  return (
    <section id="gallery" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-amber-500/30 bg-amber-500/5 mb-4">
            <span className="text-amber-500 tracking-widest text-xs">
              NUESTRO TRABAJO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Galería de Arte
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Un vistazo de nuestros mejores trabajos
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-neutral-900 cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-amber-500 text-sm tracking-wider">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-neutral-400 hover:text-amber-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-5xl w-full">
              <ImageWithFallback
                src={
                  galleryImages.find(
                    (img) => img.id === selectedImage,
                  )?.src || ""
                }
                alt={
                  galleryImages.find(
                    (img) => img.id === selectedImage,
                  )?.alt || ""
                }
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
