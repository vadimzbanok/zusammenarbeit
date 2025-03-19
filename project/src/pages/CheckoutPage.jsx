import { useCart } from "../context/CartContext.jsx";

const CheckoutPage = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="container mt-5">
      <h2 className="text-center">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-center mt-3">Your cart is empty.</p>
      ) : (
        <div className="mt-4">
          {cart.map((item, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <span>{item.title}</span>
              <span className="text-success">${item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">
                Remove
              </button>
            </div>
          ))}

          <h4 className="mt-3 text-end">Total: ${totalPrice.toFixed(2)}</h4>
          <button className="btn btn-primary w-100 mt-3">Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
