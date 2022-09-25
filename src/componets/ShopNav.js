import { Link, Outlet } from "react-router-dom";

export default function ShopNav() {
  return (
    <div>
      <Link to="/shop/Men"> MENS</Link>
      <Link to="/shop/Women"> WOMENS</Link>
      <Link to="/shop/Electronics"> ELECTRONICS</Link>
      <Link to="/shop/Jewelery"> JEWELERY</Link>
      <Outlet />
    </div>
  );
}
