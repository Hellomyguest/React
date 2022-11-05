import { createSlice } from '@reduxjs/toolkit';

export const filteredOrders = createSlice({
  name: 'filteredOrders',
  initialState: [],
  reducers: {
    filterOrders() {},
  },
});
