import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import CartSidebarComponent from "../components/CartSidebarComponent";
import productData from "../utilities/data.js";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productData.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  return (
    <>
      <HeaderComponent />

     
      <div className="flex flex-col md:flex-row">
    
        <div className="container mt-5 flex-1 flex flex-col items-center text-center md:text-left">
          <div className="w-full max-w-md md:max-w-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <h4 className="text-green-600 text-xl font-semibold">${product.price}</h4>
          <p className="text-gray-500">Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)</p>

          <button onClick={() => addToCart(product)} className="btn btn-success mt-3 w-full md:w-1/2">
            Add to Cart
          </button>
        </div>

        
        <CartSidebarComponent />
      </div>

      <FooterComponent />
    </>
  );
};

export default ProductDetailsPage;
