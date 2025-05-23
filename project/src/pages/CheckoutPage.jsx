import { useCart } from "../context/CartContext.jsx";
import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent.jsx";

const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const message = `Thank you for your order. Your total is $${totalPrice.toFixed(
    2
  )}.`;

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
              <div
                key={index}
                className="d-flex justify-content-between border-bottom py-3"
              >
                {/* Column Layout for Each Item */}
                <div className="d-flex flex-column align-items-center w-25">
                  <span className="fw-bold">{item.title}</span>
                </div>
                <div className="d-flex flex-column align-items-center w-25">
                  <span className="text-muted">Qty: {item.quantity}</span>
                </div>
                <div className="d-flex flex-column align-items-center w-25">
                  <span className="text-success">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center w-25">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Remove
                  </button>
                </div>
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
<div className="flex justify-center">
            <button className="btn btn-primary w-[20%] mt-3" onClick={() => (paymentMethod === "cash" ? alert(message) :
              paymentMethod === "credit-card" ? alert(message) :
              paymentMethod === "paypal" &&
              window.open("https://www.paypal.com", "_blank") || null)}>
              Proceed to Payment
            </button>

</div>

          </div>
        )}
      </div>
      <FooterComponent />
    </>
  );
};

export default CheckoutPage;
