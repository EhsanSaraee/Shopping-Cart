import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   cartItems: [],
   cartTotalQuantity: 0,
   cartTotalPrice: 0,
};

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const { cartItems } = state;
         const existingItem = cartItems.find(
            (item) => item.id === action.payload.id
         );
         if (existingItem) {
            existingItem.quantity += 1;
         } else {
            cartItems.push({
               ...action.payload,
               quantity: 1,
            });
         }
      },
   },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
