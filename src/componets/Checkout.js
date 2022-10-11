import React from "react";
import "./checkout.css";
export default function Checkout({ cart, setCart, totalPrice }) {
  const removeItem = (itemToRemove) => {
    setCart(cart.filter((data) => data !== itemToRemove));
  };
  function clearAll() {
    setCart([]);
  }

  return (
    <div>
      {cart.length === 0 && <div className="empty-cart"> No items in cart</div>}
      <button onClick={clearAll}>Clear All</button>
      <div>Total : £{totalPrice()}</div>
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
    </div>
  );
}
