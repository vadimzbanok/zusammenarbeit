import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import CheckoutPage from "./pages/CheckoutPage"; 
import { CartProvider } from "./context/CartContext.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import { SearchProvider } from "./context/SearchContext.jsx"; // ✅ Import SearchContext
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <CartProvider>
      <SearchProvider> {/* ✅ Wrap the app with SearchProvider */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
