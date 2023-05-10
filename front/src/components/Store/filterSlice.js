import { createSlice } from "@reduxjs/toolkit";
import { foodItems } from "../FoodItems";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterItems: [],
  },
  reducers: {
    filteredItems: (state, action) => {
      let items = [];
      if (action.payload == 1) {
        items = foodItems.filter((items) => items.category === "curries");
        state.filterItems.push(items);
      } else if (action.payload == 2) {
        items = foodItems.filter((items) => items.category === "rice");
        state.filterItems.push(items);
      } else if (action.payload == 3) {
        items = foodItems.filter((items) => items.category === "bread");
        state.filterItems.push(items);
      } else if (action.payload == 4) {
        items = foodItems.filter((item) => item.price <= 100);
        state.filterItems.push(items);
      } else if (action.payload == 5) {
        items = foodItems.filter(
          (item) => item.price < 250 && item.price > 100
        );
        state.filterItems.push(items);
      } else if (action.payload == 6) {
        items = foodItems.filter(
          (item) => item.price < 350 && item.price > 250
        );
        state.filterItems.push(items);
      } else if (action.payload == 7) {
        items = foodItems.filter((item) => item.price >= 350);
        state.filterItems.push(items);
      }
    },
  },
});

export const { filteredItems } = filterSlice.actions;
export default filterSlice.reducer;
