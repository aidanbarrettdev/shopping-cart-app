import { Link, Outlet } from "react-router-dom";
import "./shopNav.css";
export default function ShopNav() {
  return (
    <div className="shop-nav">
      <Link to="/Shop/Men"> MEN'S</Link>
      <Link to="/Shop/Women"> WOMEN'S</Link>
      <Link to="/Shop/Jewellery"> JEWELLERY</Link>
      <Outlet />
    </div>
  );
}
