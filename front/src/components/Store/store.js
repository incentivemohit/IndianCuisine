import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    cart: cartSlice,
    filterItem: filterSlice,
  },
});
