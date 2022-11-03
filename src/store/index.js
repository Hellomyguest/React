import { configureStore } from '@reduxjs/toolkit';

import { filtersSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    filter: filtersSlice.reducer,
  },
});
