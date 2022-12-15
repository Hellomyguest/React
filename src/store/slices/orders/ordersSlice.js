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
  initialState: {
    orders: [],
    selectedOrdersIds: [],
    correctiveOrderId: '',
    isLoading: false,
  },
  reducers: {
    selectOrder(state, { payload }) {
      state.selectedOrdersIds = xor(state.selectedOrdersIds, payload);
    },
    clearSelectedOrders(state) {
      state.selectedOrdersIds = [];
    },
    deleteOrders(state, { payload }) {
      state.orders = state.orders.filter(({ id }) => !payload.includes(id));
      state.selectedOrdersIds = [];
    },
    changeOrdersStatus(state, { payload: { status, selectedOrdersIds } }) {
      state.orders.forEach((order) => {
        if (selectedOrdersIds.includes(order.id)) {
          order.status = status;
        }
      });
    },
    setCorrectiveOrderId(state, { payload }) {
      state.correctiveOrderId = payload;
    },
    editOrder(state, { payload }) {
      state.orders.forEach((order, i) => {
        if (order.id === state.correctiveOrderId) {
          state.orders[i] = payload;
        }
      });
      state.correctiveOrderId = '';
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
