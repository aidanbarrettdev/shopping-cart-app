import "./App.css";

import React, { useState } from "react";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import Men from "./pages/Men";
import Women from "./pages/Women";
import ShopNav from "./componets/ShopNav";
import Basket from "./pages/basket";
//////////////////////////////////////////////////////third
function App() {
  const [goods] = useState([
    {
      title: "Navy Hightop Track II  ",
      price: "£49.99",
      image:
        "https://cdn.pixabay.com/photo/2013/11/28/12/15/walking-boots-220499_960_720.jpg",
      size: "6-9",
      fit: "Men",
    },
    {
      title: "Outdoor Trail Waterproof Boots",
      price: "£49.99",
      image:
        "https://cdn.pixabay.com/photo/2019/11/22/08/01/shoes-4644338__340.png",
      size: "6-12",
      fit: "Men",
    },
    {
      title: "Adventure Trail Grey",
      price: "£59.99",
      image:
        "https://cdn.pixabay.com/photo/2017/07/27/14/05/walking-2545435__340.jpg",
      size: "4-7",
      fit: "Women",
    },
    {
      title: "Merrell Low Top",
      price: "£69.99",
      image:
        "https://cdn.pixabay.com/photo/2014/12/31/11/41/shoes-584850_960_720.jpg",
      size: "3-9",
      fit: "Women",
    },
    {
      title: "Leather Boots Hill Walking",
      price: "£120.00",
      image:
        "https://cdn.pixabay.com/photo/2016/09/17/22/35/gaiters-1677097_960_720.jpg",
      size: "9",
      fit: "Men",
    },
    {
      title: "Durable Trail Boots",
      price: "£90.00",
      image:
        "https://cdn.pixabay.com/photo/2017/07/27/14/05/walking-2545434__340.jpg",
      size: "6-11",
      fit: "Men",
    },
  ]);

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
                />
              }
            />
            <Route path="Men" element={<Men />} />
            <Route path="Women" element={<Women />} />
            <Route path="Electronics" element={<Electronics />} />
            <Route path="Jewelery" element={<Jewelery />} />
          </Route>
        </Routes>
      </nav>
    </div>
  );
}

export default App;
