import "./App.css";

import Shop from "./pages/Shop";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import Men from "./pages/Men";
import Women from "./pages/Women";
import ShopNav from "./componets/ShopNav";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/shop" element={<ShopNav />}>
            <Route index element={<Shop />} />
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
