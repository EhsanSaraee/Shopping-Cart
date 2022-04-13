import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
   cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
   cartTotalQuantity: 0,
   cartTotalAmount: 0,
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
            toast.info(`${existingItem.name} quantity updated`, {
               position: 'top-right',
            });
         } else {
            cartItems.push({
               ...action.payload,
               quantity: 1,
            });
            toast.success(`${action.payload.name} added to cart`, {
               position: 'top-right',
            });
         }
         localStorage.setItem('cartItems', JSON.stringify(cartItems));
      },
   },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
