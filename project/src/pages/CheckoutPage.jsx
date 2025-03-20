import { useCart } from "../context/CartContext.jsx";
import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent.jsx";

const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const message = `Tank you for your order. Your total is $${totalPrice.toFixed(2)}.`;

  return (
    <>
    <HeaderComponent />
    <div className="container mt-5 mb-5">
      <h2 className="text-center">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-center mt-3">Your cart is empty.</p>
      ) : (
        <div className="mt-4">
         
          {cart.map((item, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <span className="fw-bold">{item.title}</span>
              <span className="text-muted">Qty: {item.quantity}</span>
              <span className="text-success">${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">
                Remove
              </button>
            </div>
          ))}

          
          <h4 className="mt-4">Payment Method</h4>
          <div className="mt-2">
            <label className="d-block">
              <input
                type="radio"
                name="payment"
                value="credit-card"
                checked={paymentMethod === "credit-card"}
                onChange={() => setPaymentMethod("credit-card")}
              />
              <span className="ms-2">Credit Card</span>
            </label>
            <label className="d-block">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              <span className="ms-2">PayPal</span>
            </label>
            <label className="d-block">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              <span className="ms-2">Cash on Delivery</span>
            </label>
          </div>

         
          <h4 className="mt-3 text-end">Total: ${totalPrice.toFixed(2)}</h4>

         
          <button className="btn btn-primary w-100 mt-3" onClick={() => alert(message)}>
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
    <FooterComponent />
    </>
  );
};

export default CheckoutPage;
