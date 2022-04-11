import { configureStore } from '@reduxjs/toolkit';
import { productsFetcher } from '../features/productsSlice';
import reducer from './rootReducer';

export const store = configureStore({
   reducer,
});

store.dispatch(productsFetcher());
