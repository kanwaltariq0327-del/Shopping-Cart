import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your Cart Is Empty</p>
          <div className="goto-link">
            <Link to={"/"}>
              <FaArrowLeft />
              <p>Start Shopping</p>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="product-price">Price</h3>
            <h3 className="product-quantity">Quantity</h3>
            <h3 className="product-total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.description}</p>
                    <button>Remove Item</button>
                  </div>
                </div>
                <div className="cart-product-price">$ {cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button>+</button>
                </div>
                <div className="cart-product-total">
                  {cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <button className="clear-cart">Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="total-amount">{cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and Shipping calculated at checkout</p>
              <button>Check Out</button>
              <div className="goto-link">
                <Link to={"/"}>
                  <FaArrowLeft />
                  <p>Continue Shopping</p>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Cart;
