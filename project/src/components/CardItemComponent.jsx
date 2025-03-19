import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import productData from "../utilities/data.js";

const CardItemComponent = () => {
  const { addToCart } = useCart();

  return (
    <div className="container mt-4">
      <div className="row g-4 justify-content-center">
        {productData.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div className="card d-flex flex-column w-100 h-100" style={{ minHeight: "350px" }}>
              <div className="d-flex justify-content-center align-items-center" style={{ height: "200px", overflow: "hidden" }}>
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

                {/* ✅ Fix: Make "More Details" link go to the correct product details page */}
                <Link to={`/products/${item.id}`} className="btn btn-primary">
                  More Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardItemComponent;
