import { useCart } from "../context/CartContext.jsx";
import HeaderComponent from "./HeaderComponent";
import CartSidebarComponent from "./CartSidebarComponent";

const NavLayoutComponent = () => {
  const { isCartOpen } = useCart();

  return (
    <>
      <HeaderComponent />
      {/* Flex container for main layout */}
      <div className="flex transition-all duration-300">
        {/* Main content - Flexible and pushes left when cart is open */}
        <main className={`flex-1 p-4 transition-all duration-300 ${isCartOpen ? "mr-80" : ""}`}>
       
     
        </main>

        {/* Cart Sidebar - Stays fixed and under header */}
        <CartSidebarComponent />
      </div>
    </>
  );
};

export default NavLayoutComponent;
