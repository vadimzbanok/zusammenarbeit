import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const CartSidebarComponent = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className={`fixed right-0 top-[70px] h-[calc(100vh-70px)] w-80 bg-white shadow-lg transition-transform transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="p-4 border-b flex justify-between items-center bg-gray-100">
        <h3 className="text-lg font-bold">Shopping Cart</h3>
        <button onClick={toggleCart} className="text-gray-600 text-xl">
          &times;
        </button>
      </div>

      <div className="p-4 overflow-y-auto max-h-[60vh]">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1 px-3">
                <h5 className="text-sm font-medium">{item.title}</h5>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-800">Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">&times;</button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-4 border-t bg-white sticky bottom-0">
          <button 
            onClick={() => navigate("/checkout")}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebarComponent;
