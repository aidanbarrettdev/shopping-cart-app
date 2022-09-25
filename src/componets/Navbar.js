import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <div>Home</div>
      </Link>
      <Link to={"/shop"}>
        <div>Shop</div>
      </Link>
      <Link to={"/basket"}>
        <div>
          <AiOutlineShoppingCart size={40} />
        </div>
      </Link>
    </div>
  );
}
