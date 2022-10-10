import Checkout from "../componets/Checkout";
import { useState } from "react";

export default function Shop({ cart, setCart, addToCart, goods, isPending }) {
  const [cartClicked, setCartClicked] = useState(false);
  function handleCheckoutOpen() {
    console.log("cart open");
    setCartClicked(true);
  }
  function handleCheckoutClose() {
    console.log("cart close");
    setCartClicked(false);
  }

  return (
    <div>
      {isPending && <div>Loading...</div>}
      <button onClick={handleCheckoutOpen}>cart clicked</button>
      <button onClick={handleCheckoutClose}>X</button>
      {cartClicked ? <Checkout cart={cart} /> : null}
      <div className="goods-componet-box">
        {goods.map((data) => (
          <div className="goods-componet" key={Math.random() * 1000000}>
            <h2>{data.title}</h2>
            <img src={data.image} alt={data.title} />
            <p>£{data.price}</p>
            <button onClick={() => addToCart(data)} className="add-to-cart-btn">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
