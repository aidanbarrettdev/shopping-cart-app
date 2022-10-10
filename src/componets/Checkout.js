import React from "react";

export default function Checkout({ cart }) {
  function removeItem() {
    //filter
  }
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
            <button onClick={removeItem}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

//checkout css pop up grey background
