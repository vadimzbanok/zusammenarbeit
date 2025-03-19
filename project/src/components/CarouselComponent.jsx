import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productData = [
  { id: 1, image: "./images/carousel/1.jpg" },
  { id: 2, image: "./images/carousel/2.jpg" },
  { id: 3, image: "./images/carousel/3.jpg" },
  { id: 4, image: "./images/carousel/4.jpg" },
  { id: 5, image: "./images/carousel/5.jpg" },
  { id: 6, image: "./images/carousel/6.jpg" },
  { id: 7, image: "./images/carousel/7.jpg" },
  { id: 8, image: "./images/carousel/8.jpg" },
  { id: 9, image: "./images/carousel/9.jpg" },
  { id: 10, image: "./images/carousel/10.jpg" },
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === productData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      
      <div className="carousel">
        <AnimatePresence mode="wait">
          {productData.map(
            (item, index) =>
              index === currentIndex && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <img
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                    className="carousel-img"
                    onError={(e) => (e.target.src = "./images/placeholder.jpg")}
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .carousel-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 55vh;
          position: relative;
          overflow: hidden;
          margin-top: 20px;
          width: 100%;
        }

        .carousel {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 80vw;
          max-width: 1000px;
        }

        

        .carousel-img {
        
          max-width: 900px;
          height: auto;
          object-fit: cover;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
};

export default CarouselComponent;
