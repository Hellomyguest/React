import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import xor from 'lodash.xor';
import { mocks } from '../../mocks/orders';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const orders = await new Promise((resolve) => {
    setTimeout(() => resolve(mocks), 2000);
  });
  return orders;
});

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: { orders: [], selectedOrders: [], isLoading: false },
  reducers: {
    selectOrder(state, { payload }) {
      state.selectedOrders = xor(state.selectedOrders, payload);
    },
    clearSelectedOrders(state) {
      state.selectedOrders = [];
    },
    deleteOrders(state, { payload }) {
      state.orders = state.orders.filter(({ id }) => !payload.includes(id));
    },
  },
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
  },
});

export const ordersActions = ordersSlice.actions;
