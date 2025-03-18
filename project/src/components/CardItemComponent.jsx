import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productData from "../utilities/data.js";

const CardItemComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? productData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === productData.length - 1 ? 0 : prev + 1));
  };

  const addToBasket = (item) => {
    console.log("Added to basket:", item);
  };

  const viewDetails = (item) => {
    console.log("Viewing details for:", item);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <AnimatePresence>
          {productData.map((item, index) => {
            return (
              index === currentIndex && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="carousel-item"
                >
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <div className="button-group">
                    <button className="basket-btn" onClick={() => addToBasket(item)}>Add to Basket</button>
                    <button className="details-btn" onClick={() => viewDetails(item)}>More Details</button>
                  </div>
                </motion.div>
              )
            );
          })}
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

        .carousel-item img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
        }

        .carousel-item h3 {
          font-size: 18px;
          margin: 8px 0;
          font-weight: bold;
        }

        .carousel-item p {
          font-size: 16px;
          font-weight: bold;
          color: #444;
        }

        .button-group {
          margin-top: 10px;
          display: flex;
          justify-content: space-around;
        }

        .basket-btn, .details-btn {
          background: #007bff;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .basket-btn:hover, .details-btn:hover {
          background: #0056b3;
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

export default CardItemComponent;
