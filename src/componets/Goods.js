import React, { useState } from "react";

export default function Goods({ goods }) {
  const [cart, setCart] = useState([]);
  const addToCart = (goods) => {
    console.log("click");
    setCart([...cart, goods]);
  };

  return (
    <div>
      Goods
      <div className="goods-componet-box">
        {goods.map((data) => (
          <div className="goods-componet" key={data.id}>
            <h2>{data.title}</h2>
            <img src={data.image} alt={data.title} />
            <p>£{data.price}</p>
            <button onClick={addToCart} className="add-to-cart-btn">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
