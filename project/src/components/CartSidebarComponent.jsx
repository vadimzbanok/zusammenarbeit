import { useCart } from "../context/CartContext.jsx";

const CartSidebarComponent = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart } = useCart();

  return (
    <div
      className={`fixed right-0 w-80 bg-white shadow-lg transition-transform transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{
        top: "70px", // Stays below the header
        height: "calc(100vh - 70px)", // Adjusts to screen size
        zIndex: 1000, // Ensures it's above content but below navbar
        overflowY: "auto", // Enables scrolling inside the cart if content is long
        display: "flex", // Makes it flex-based
        flexDirection: "column", // Ensures proper stacking
      }}
    >
      {/* Cart Header */}
      <div className="p-4 border-b flex justify-between items-center bg-gray-100">
        <h3 className="text-lg font-bold">Shopping Cart</h3>
        {/* ✅ Fix: Use toggleCart() to close the cart instead of removeFromCart() */}
        <button onClick={toggleCart} className="text-gray-600 text-xl">
          &times;
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1 px-3">
                <h5 className="text-sm font-medium">{item.title}</h5>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">&times;</button>
            </div>
          ))
        )}
      </div>

      {/* Checkout Button */}
      {cart.length > 0 && (
        <div className="p-4 border-t bg-white sticky bottom-0 flex">
          <button className="w-full bg-blue-600 text-white py-2 rounded">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartSidebarComponent;
