import { configureStore } from '@reduxjs/toolkit';

import { filtersSlice } from './slices/filters';
import { ordersSlice } from './slices/orders';

export const store = configureStore({
  reducer: {
    filter: filtersSlice.reducer,
    orders: ordersSlice.reducer,
  },
});
