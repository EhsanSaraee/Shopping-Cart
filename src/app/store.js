import { configureStore } from '@reduxjs/toolkit';
import { productsAPI } from '../features/products/productsAPI';
import { productsFetcher } from '../features/products/productsSlice';
import reducer from './rootReducer';

export const store = configureStore({
   reducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsAPI.middleware),
});

store.dispatch(productsFetcher());
