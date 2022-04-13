import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice';
import { productsAPI } from '../features/products/productsAPI';
import productsSlice from '../features/products/productsSlice';

const reducer = combineReducers({
   products: productsSlice,
   cart: cartSlice,
   [productsAPI.reducerPath]: productsAPI.reducer,
});

export default reducer;
