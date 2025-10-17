import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    cart: 0,
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
      state.cart++;
    },
    IncrementItems: (state, action) => {
      const element = state.items.find((item) => item.id === action.payload.id);
      element.quantity += 1;
      state.cart++;
    },
    DecrementItems: (state, action) => {
      const element = state.items.find((item) => item.id === action.payload.id);
      if (element.quantity > 1) {
        element.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id != action.payload.id
        );
      }
      state.cart--;
    },
  },
});

export const { addItems, IncrementItems, DecrementItems } = cart.actions;
export default cart.reducer;
