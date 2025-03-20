import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const productData = [
  { id: 1, image: "./images/carousel/1.jpg" },
  { id: 2, image: "./images/carousel/2.jpg" },
  { id: 3, image: "./images/carousel/3.jpg" },
  { id: 4, image: "./images/carousel/4.jpg" },
  { id: 5, image: "./images/carousel/5.jpg" },
  { id: 6, image: "./images/carousel/6.png" },
  { id: 7, image: "./images/carousel/7.png" },
  { id: 8, image: "./images/carousel/8.png" },
  { id: 9, image: "./images/carousel/9.png" },
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const { isCartOpen } = useCart();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === productData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? productData.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Solo aplicar el intervalo automático cuando no se está interactuando con el carrusel
    if (!isHovering) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovering]);

  return (
    <div 
      className="relative w-[68%] mx-auto h-64 md:h-96 overflow-hidden rounded-lg shadow-md bg-blue-600"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Contenedor del carrusel con overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-0"></div>
      
      {/* Botones de navegación - solo visibles al hacer hover */}
      <div className={`transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Carrusel con imágenes y efecto de sombra sutil */}
      <AnimatePresence mode="wait">
        {productData.map(
          (item, index) =>
            index === currentIndex && (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex justify-center items-center z-10"
              >
                <div className="relative w-full h-full flex justify-center items-center">
                  {/* Sombra sutil que aparece con la imagen */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                  />
                  
                  {/* Imagen con efecto de elevación sutil */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: 0, 
                      opacity: 1,
                      scale: isCartOpen ? 0.9 : 1,
                    }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full relative z-10 p-3"
                  >
                    <img
                      src={item.image}
                      alt={`Slide ${index + 1}`}
                      className=" w-full h-full rounded-md shadow-lg"
                      onError={(e) => (e.target.src = "./images/placeholder.jpg")}
                    />
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Indicadores - más sutiles y neutros */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
        {productData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white w-4" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;