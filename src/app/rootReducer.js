import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from '../features/productsSlice';

const reducer = combineReducers({
   products: productsSlice,
});

export default reducer;
