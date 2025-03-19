import { useParams } from "react-router-dom";
import productData from "../utilities/data.js";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderComponent from "../components/HeaderComponent.jsx";
import FooterComponent from "../components/FooterComponent.jsx";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  return (
    <>
      <HeaderComponent />

      <div className="container mt-5 d-flex justify-content-center">
        <div
          className="row w-75 text-center"
          style={{ minHeight: "600px", display: "flex", alignItems: "center" }} // Increased height
        >
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "80%", maxHeight: "400px", objectFit: "contain" }} // Adjusted maxHeight
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4 className="text-success">${product.price}</h4>
            <p>
              Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
            </p>
            <button className="btn btn-success mt-3 w-50 mx-auto">Add to Cart</button>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default ProductDetailsPage;
