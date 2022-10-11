import { Link, Outlet } from "react-router-dom";

export default function ShopNav() {
  return (
    <div>
      <Link to="/Shop/Men"> MENS</Link>
      <Link to="/Shop/Women"> WOMENS</Link>
      <Link to="/Shop/Jewelery"> JEWELERY</Link>
      <Outlet />
    </div>
  );
}
