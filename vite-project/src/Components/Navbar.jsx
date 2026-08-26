import react from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/products">Products</Link> */}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;