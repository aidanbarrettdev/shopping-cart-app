import "./App.css";
import React, { useState } from "react";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Jewellery from "./pages/Jewellery";
import Men from "./pages/Men";
import Women from "./pages/Women";
import ShopNav from "./componets/ShopNav";
import Basket from "./pages/Basket";
import useFetch from "./hooks/useFetch";
import Footer from "./componets/Footer";
function App() {
  const { data: jewelleryGoods, isPending } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const { data: mensGoods } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const { data: womensGoods } = useFetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  const [cart, setCart] = useState([]);
  const [cartClicked, setCartClicked] = useState(false);

  const addToCart = (data) => {
    console.log("click");
    setCart([...cart, { ...data }]);
    console.log(cart);
  };

  function handleCheckoutOpen() {
    console.log("cart open");
    setCartClicked(true);
    const exitCheckoutBtn = document.querySelector(".exit-checkout-btn");
    exitCheckoutBtn.style.backgroundColor = "red";
    exitCheckoutBtn.style.color = "white";
  }

  function handleCheckoutClose() {
    console.log("cart close");
    setCartClicked(false);
    const exitCheckoutBtn = document.querySelector(".exit-checkout-btn");
    exitCheckoutBtn.style.backgroundColor = "white";
    exitCheckoutBtn.style.color = "black";
  }
  function totalPrice() {
    return cart.reduce((sum, { price }) => sum + price, 0).toFixed(2);
  }

  return (
    <div className="App">
      <Navbar></Navbar>

      <nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Basket"
            element={<Basket cart={cart} totalPrice={totalPrice} />}
          ></Route>

          <Route path="/Shop" element={<ShopNav />}>
            <Route index element={<Shop />} />
            <Route
              path="Men"
              element={
                <Men
                  mensGoods={mensGoods}
                  cart={cart}
                  setCart={setCart}
                  addToCart={addToCart}
                  isPending={isPending}
                  handleCheckoutClose={handleCheckoutClose}
                  handleCheckoutOpen={handleCheckoutOpen}
                  cartClicked={cartClicked}
                  totalPrice={totalPrice}
                />
              }
            />

            <Route
              path="Women"
              element={
                <Women
                  womensGoods={womensGoods}
                  cart={cart}
                  setCart={setCart}
                  addToCart={addToCart}
                  isPending={isPending}
                  handleCheckoutClose={handleCheckoutClose}
                  handleCheckoutOpen={handleCheckoutOpen}
                  cartClicked={cartClicked}
                  totalPrice={totalPrice}
                />
              }
            />

            <Route
              path="Jewellery"
              element={
                <Jewellery
                  jewelleryGoods={jewelleryGoods}
                  cart={cart}
                  setCart={setCart}
                  addToCart={addToCart}
                  isPending={isPending}
                  handleCheckoutClose={handleCheckoutClose}
                  handleCheckoutOpen={handleCheckoutOpen}
                  cartClicked={cartClicked}
                  totalPrice={totalPrice}
                />
              }
            />
          </Route>
        </Routes>
      </nav>
      <Footer></Footer>
    </div>
  );
}

export default App;
