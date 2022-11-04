import React from "react";
import "./checkout.css";
export default function Checkout({
  cart,
  setCart,
  totalPrice,
  handleCheckoutClose,
}) {
  const removeItem = (itemToRemove) => {
    setCart(cart.filter((data) => data !== itemToRemove));
  };
  function clearAll() {
    setCart([]);
  }

  return (
    <div className="overlay">
      <div className="checkout-container">
        <div className="header">
          <div>Your Basket</div>
          <button onClick={clearAll}>Clear All</button>

          <button onClick={handleCheckoutClose}>X</button>
        </div>
        <div className="checkout-box">
          {cart.map((data) => (
            <div className="checkout-componet" key={Math.random() * 1000000}>
              <h2>{data.title}</h2>

              <img src={data.image} alt={data.title} />
              <p>£{data.price}</p>
              <button
                className="checkout-remove-item-btn"
                onClick={() => removeItem(data)}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="total">Total : £{totalPrice()}</div>
      </div>
    </div>
  );
}
