import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <div>Home</div>
      </Link>
      <Link to={"/Shop"}>
        <div>Shop</div>
      </Link>
      <Link to={"/Basket"}>
        <div>
          <AiOutlineShoppingCart size={40} />
        </div>
      </Link>
    </div>
  );
}
