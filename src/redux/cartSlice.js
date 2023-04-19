import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isCartOpen: false,
  cartItem: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions ) => {
      const addItem = state.cartItem.find(item => item.name === actions.payload.name)
      const cartItem = addItem ? state.cartItem.map(x => x.name === addItem.name ? { ...x, quantity: x.quantity + 1 } : x) : [...state.cartItem, { ...actions.payload, quantity: Number(1) }]
      localStorage.setItem('cart', JSON.stringify(cartItem)); // Lưu giỏ hàng vào LocalStorage
      window.location='/cart'
      return { ...state, cartItem }
    },
    updateCartList: (state, { payload }) => {
      return { ...state, cartItem: payload }
    },
  },
});

export const { setItems, addToCart, updateCartList } = cartSlice.actions;
export default cartSlice.reducer;
