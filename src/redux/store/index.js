import { configureStore } from "@reduxjs/toolkit";
import inventaryReducer from "../slices/inventarySlice";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
  reducer: { inventary: inventaryReducer, cart: cartReducer },
});
