import { useCart } from "../context/CartContext.jsx";
import { useSearch } from "../context/SearchContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import productData from "../utilities/data.js";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const CardItemComponent = () => {
  const { addToCart, isCartOpen } = useCart();
  const { searchTerm } = useSearch();
  const [showScroll, setShowScroll] = useState(false);

  const filteredProducts = productData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="container mt-5 mb-5 position-relative"
      style={{
        maxHeight: "80vh",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "#6c757d #f1f1f1",
      }}
    >
      <motion.div
        className="row g-4 justify-content-center"
        animate={{ x: isCartOpen ? -144 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ paddingRight: "1rem" }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
              <div
                className="card d-flex flex-column w-100 h-100"
                style={{ minHeight: "350px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "200px", overflow: "hidden" }}
                >
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ width: "auto", height: "100%", objectFit: "contain" }}
                  />
                </div>
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title flex-grow-1">{item.title}</h5>
                  <p className="card-text">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                      })
                    }
                    className="btn btn-success mb-2"
                  >
                    Add to Cart
                  </button>
                  <Link to={`/products/${item.id}`} className="btn btn-primary">
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-12">No products found.</p>
        )}
      </motion.div>

      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "50%",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
};

export default CardItemComponent;
