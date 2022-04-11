import { combineReducers } from '@reduxjs/toolkit';
import { productsAPI } from '../features/products/productsAPI';
import productsSlice from '../features/products/productsSlice';

const reducer = combineReducers({
   products: productsSlice,
   [productsAPI.reducerPath]: productsAPI.reducer,
});

export default reducer;
