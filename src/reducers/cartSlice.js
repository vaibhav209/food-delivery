import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  totalQuantity: 0,
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (eachItem) => eachItem.id === item.id
      );

      if (itemIndex >= 0) {
        alert("This item already in Cart!");
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalPrice += item.price;
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (eachItem) => eachItem.id === item
      );

      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }
    },
    incrementQuantity: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (eachItem) => eachItem.id === item
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity++;
        state.totalQuantity++;
        state.totalPrice += state.cartItems[itemIndex].quantity;
      }
    },
    decrementQuantity: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (eachItem) => eachItem.id === item
      );
      if (itemIndex >= 0 && state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity--;
        state.totalQuantity--;
        state.totalPrice -= state.cartItems[itemIndex].price;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
