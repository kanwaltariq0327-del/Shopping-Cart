import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

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
          <span className="cart-dynamic">{cartTotalQuantity}</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
