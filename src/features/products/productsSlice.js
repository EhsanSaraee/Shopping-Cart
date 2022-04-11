import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   items: [],
   status: null,
};

export const productsFetcher = createAsyncThunk(
   'products/productsFetcher',
   async () => {
      const { data } = await axios.get('http://localhost:5000/products');
      return data;
   }
);

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {},
   extraReducers: {
      [productsFetcher.pending]: (state) => {
         state.status = 'loading';
      },
      [productsFetcher.fulfilled]: (state, action) => {
         state.items = action.payload;
         state.status = 'succeeded';
      },
      [productsFetcher.rejected]: (state, action) => {
         state.status = 'failed';
      },
   },
});

export default productsSlice.reducer;
