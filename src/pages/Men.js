import React from "react";
import Checkout from "../componets/Checkout";
import "../componets/checkout.css";
export default function Men({
  mensGoods,
  cart,
  setCart,
  addToCart,
  isPending,
  handleCheckoutClose,
  handleCheckoutOpen,
  cartClicked,
  totalPrice,
}) {
  return (
    <div>
      {isPending && <div>Loading...</div>}
      <button className="veiw-cart-btn" onClick={handleCheckoutOpen}>
        View Cart ({cart.length})
      </button>
      {cartClicked ? (
        <Checkout
          cart={cart}
          setCart={setCart}
          totalPrice={totalPrice}
          handleCheckoutClose={handleCheckoutClose}
        />
      ) : null}
      <div className="goods-componet-box">
        {mensGoods.map((data) => (
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
