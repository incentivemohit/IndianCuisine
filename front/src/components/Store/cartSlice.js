import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    counter: 0,
    currPrice: 0,
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.counter = state.cartItems.length;
    },

    increamentItem: (state, action) => {
      let incObj = state.cartItems.find(
        (element) => element.id == action.payload
      );
      incObj.quantity += 1;
      state.currPrice =
        (incObj.price * incObj.quantity -
          incObj.price * (incObj.quantity - 1)) /
        (incObj.quantity - 1);
      incObj.price = state.currPrice * incObj.quantity;

      state.totalAmount = state.cartItems.map(
        (item) => (state.totalAmount += item.price)
      );
    },

    decreamentItem: (state, action) => {
      let decObj = state.cartItems.find(
        (element) => element.id == action.payload
      );
      let ind = state.cartItems.indexOf(decObj);
      if (decObj.quantity > 1) {
        state.currPrice =
          (decObj.price * decObj.quantity -
            decObj.price * (decObj.quantity - 1)) /
          decObj.quantity;
        decObj.quantity -= 1;
        decObj.price = state.currPrice * decObj.quantity;
      } else {
        state.cartItems.pop(ind);
        state.counter = state.cartItems.length;
      }
    },
    totalAmount: (state, action) => {
      var sum = 0;
      action.payload.map((item) => console.log((sum += item.price)));
      state.total = sum;
    },
  },
});

export const { addItem, increamentItem, decreamentItem, totalAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
