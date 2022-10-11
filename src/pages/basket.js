import React from "react";

export default function Basket({ cart, totalPrice }) {
  return (
    <div>
      {cart.length === 0 && <div className="empty-cart"> No items in cart</div>}
      <div className="goods-componet-box">
        {cart.map((data) => (
          <div className="goods-componet" key={Math.random() * 1000000}>
            <h2>{data.title}</h2>
            <h4>ok i here</h4>
            <img src={data.image} alt={data.title} />
            <p>£{data.price}</p>
          </div>
        ))}
      </div>
      <div>Order Total: £{totalPrice()}</div>
      <button
        style={{
          backgroundColor: "lightgreen",
        }}
      >
        Continue to Payment
      </button>
    </div>
  );
}
