import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
   cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
   cartTotalQuantity: 0,
   cartTotalAmount: 0,
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart(state, action) {
         const existingIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );

         if (existingIndex >= 0) {
            state.cartItems[existingIndex] = {
               ...state.cartItems[existingIndex],
               quantity: state.cartItems[existingIndex].quantity + 1,
            };
            toast.info('Increased product quantity', {
               position: 'bottom-left',
            });
         } else {
            let tempProductItem = { ...action.payload, quantity: 1 };
            state.cartItems.push(tempProductItem);
            toast.success('Product added to cart', {
               position: 'bottom-left',
            });
         }
         localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      },
      decreaseQuantity(state, action) {
         const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );

         if (state.cartItems[itemIndex].quantity > 1) {
            state.cartItems[itemIndex].quantity -= 1;

            toast.info('Decreased product quantity', {
               position: 'bottom-left',
            });
         } else if (state.cartItems[itemIndex].quantity === 1) {
            const nextCartItems = state.cartItems.filter(
               (item) => item.id !== action.payload.id
            );

            state.cartItems = nextCartItems;

            toast.error('Product removed from cart', {
               position: 'bottom-left',
            });
         }

         localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      },
      removeFromCart(state, action) {
         state.cartItems.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
               const nextCartItems = state.cartItems.filter(
                  (item) => item.id !== cartItem.id
               );

               state.cartItems = nextCartItems;

               toast.error('Product removed from cart', {
                  position: 'bottom-left',
               });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            return state;
         });
      },
   },
});

export const { addToCart, decreaseQuantity, removeFromCart } =
   cartSlice.actions;

export default cartSlice.reducer;
