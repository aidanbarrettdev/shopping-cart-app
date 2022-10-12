import { Link, Outlet } from "react-router-dom";
import "./shopNav.css";
export default function ShopNav() {
  return (
    <div className="shop-nav">
      <Link to="/Shop/Men"> MENS</Link>
      <Link to="/Shop/Women"> WOMENS</Link>
      <Link to="/Shop/Jewelery"> JEWELERY</Link>
      <Outlet />
    </div>
  );
}
