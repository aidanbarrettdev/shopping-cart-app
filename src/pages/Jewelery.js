import React from "react";
import Checkout from "../componets/Checkout";
export default function Jewelery({
  jeweleryGoods,
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
      <button onClick={handleCheckoutOpen}>View Cart ({cart.length})</button>

      {cartClicked ? (
        <Checkout
          cart={cart}
          setCart={setCart}
          totalPrice={totalPrice}
          handleCheckoutClose={handleCheckoutClose}
        />
      ) : null}
      <div className="goods-componet-box">
        {jeweleryGoods.map((data) => (
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
