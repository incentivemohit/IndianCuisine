import { createSlice } from "@reduxjs/toolkit";
import { foodItems } from "../FoodItems";

const searchSlice = createSlice({
  name: "search",
  initialState: [],
  reducers: {
    searchItems: (state, action) => {
      let searchedItems = foodItems.filter((item) => {
        return item.title.toLocaleLowerCase().includes(action.payload);
      });

      if (state.length != 0) {
        state.splice(0, state.length);
      }
      state.push(searchedItems);
    },
  },
});

export const { searchItems } = searchSlice.actions;
export default searchSlice.reducer;
