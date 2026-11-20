import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSLice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `increased ${state.cartItems[itemIndex].name} 's quantity in cart`,
          {
            position: "bottom-left",
          },
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`added ${action.payload.name} in cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      let nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      );
      state.cartItems = nextCartItems;

      toast.error(`removed ${action.payload.name} from cart`, {
        position: "bottom-left",
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      );

      if (state.cartItems[itemIndex].cartQuantity >= 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`${action.payload.name} quantity decreased`, {
          position: "bottom-left",
        });
      } else {
        let nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        );
        state.cartItems = nextCartItems;

        toast.error(`removed ${action.payload.name} from cart`, {
          position: "bottom-left",
        });

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    clearCart(state, action) {
      state.cartItems = [];

      toast.error(`Cart cleared`, {
        position: "bottom-left",
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );

      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } =
  cartSLice.actions;

export default cartSLice.reducer;
