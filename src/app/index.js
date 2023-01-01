import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../slices/cartSlice";
import counterReducer from "../slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
