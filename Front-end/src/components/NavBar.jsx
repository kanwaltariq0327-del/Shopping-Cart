import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to={"/"}>
        <h2>Shop Online</h2>
      </Link>
      <Link to={"/cart"}>
        <div className="cart">
            <span className="cart-icon">
                <FaCartShopping />
            </span>
            <span className="cart-dynamic">
                3
            </span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
