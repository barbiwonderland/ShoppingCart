import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const newCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newCart;
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }else if(state.cartItems[itemIndex].cartQuantity === 1){
      const newCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newCart;
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      }
    },
  },
});
export const { addProduct, removeFromCart,decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
