import "./App.css";

import React, { useState } from "react";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Jewelery from "./pages/Jewelery";

import Men from "./pages/Men";
import Women from "./pages/Women";
import ShopNav from "./componets/ShopNav";
import Basket from "./pages/basket";
import useFetch from "./hooks/useFetch";

function App() {
  const { data: goods, isPending } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    console.log("click");

    setCart([...cart, data]);
    console.log(cart);
  };

  return (
    <div className="App">
      <Navbar></Navbar>

      <nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Basket" element={<Basket cart={cart} />}></Route>

          <Route path="/Shop" element={<ShopNav />}>
            <Route
              index
              element={
                <Shop
                  cart={cart}
                  setCart={setCart}
                  addToCart={addToCart}
                  goods={goods}
                  isPending={isPending}
                />
              }
            />
            <Route path="Men" element={<Men />} />
            <Route path="Women" element={<Women />} />

            <Route path="Jewelery" element={<Jewelery />} />
          </Route>
        </Routes>
      </nav>
    </div>
  );
}

export default App;
