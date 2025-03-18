import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/carousel/1.jpg", 
  "/images/carousel/2.jpg",
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="carousel-item"
          >
            <img
              src={images[currentIndex]}
              alt={`Carousel Image ${currentIndex + 1}`}
              className="carousel-img"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <button className="prev-btn" onClick={prevSlide}>❮</button>
      <button className="next-btn" onClick={nextSlide}>❯</button>

      <style>{`
        .carousel-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .carousel {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 350px;
          height: 450px;
        }

        .carousel-item {
          position: absolute;
          width: 320px;
          height: 350px;
          background: white;
          border-radius: 20px;
          padding: 15px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
          text-align: center;
        }

        .carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }

        .prev-btn,
        .next-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          font-size: 26px;
          cursor: pointer;
          padding: 12px;
          border-radius: 50%;
          transition: background 0.3s;
        }

        .prev-btn {
          left: 15px;
        }

        .next-btn {
          right: 15px;
        }

        .prev-btn:hover,
        .next-btn:hover {
          background: black;
        }
      `}</style>
    </div>
  );
};

export default CarouselComponent;
