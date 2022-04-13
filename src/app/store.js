import { configureStore } from '@reduxjs/toolkit';
import { getTotals } from '../features/cart/cartSlice';
import { productsAPI } from '../features/products/productsAPI';
import reducer from './rootReducer';

export const store = configureStore({
   reducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsAPI.middleware),
});

store.dispatch(getTotals());
