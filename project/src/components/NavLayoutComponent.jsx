import { useCart } from "../context/CartContext.jsx";
import HeaderComponent from "./HeaderComponent";
import CartSidebarComponent from "./CartSidebarComponent";

const NavLayoutComponent = () => {
  const { toggleCart, isCartOpen } = useCart();

  return (
    <>
      <HeaderComponent />
      <div className="flex transition-all duration-300">
        
        <main className={`flex-1 p-4 transition-all duration-300 ${isCartOpen ? "mr-80" : ""}`}>
         
        </main>

        
        <CartSidebarComponent />

       
        {!isCartOpen && (
          <button
            onClick={toggleCart}
            className="fixed top-40 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            🛒 Show Cart
          </button>
        )}
      </div>
    </>
  );
};

export default NavLayoutComponent;
