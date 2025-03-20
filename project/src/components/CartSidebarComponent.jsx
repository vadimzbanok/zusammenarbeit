import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const CartSidebarComponent = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className={`fixed right-0 top-[70px] h-[calc(100vh-70px)] w-64 bg-white shadow-lg transition-transform transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="p-3 border-b flex justify-between items-center bg-gray-100">
        <h3 className="text-md font-semibold">Cart</h3>
        <button onClick={toggleCart} className="text-gray-600 text-lg">
          &times;
        </button>
      </div>

      <div className="p-3 overflow-y-auto max-h-[50vh]">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
              <div className="flex-1 px-2">
                <h5 className="text-xs font-medium">{item.title}</h5>
                <p className="text-xs text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-xs text-gray-800">Qty: {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs">&times;</button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-3 border-t bg-white sticky bottom-0">
          <button 
            onClick={() => navigate("/checkout")}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebarComponent;
