import { configureStore } from '@reduxjs/toolkit';

import { filtersSlice } from './filtersSlice';
import { ordersSlice } from './ordersSlice';

export const store = configureStore({
  reducer: {
    filter: filtersSlice.reducer,
    orders: ordersSlice.reducer,
  },
});
