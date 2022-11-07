/* import { createSelector, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const filteredOrders = createSlice({
  name: 'filteredOrders',
  initialState: [],
  reducers: {
    filterOrders() {},
  },
}); 


const getOrders = useSelector(state => state.orders.orders)
const getFilters = useSelector(state => state.filter);
export const isFiltersFilled = createSelector(getOrders, getFilters, (orders,filters) => {
  if (filters.dateFromValue !== '') {
    orders.filter((item) => {
      const [d, m, y] = item.date.split('.');
      const [df, mf, yf] = filters.dateFromValue.split('.');
      const date = Date.parse(`${y}-${m}-${d}`);
      const dateFrom = Date.parse(`${yf}-${mf}-${df}`);
      return dateFrom < date;
    });
  }
  if (filters.dateToValue !== '') {
    orders.filter((item) => {
      const [d, m, y] = item.date.split('.');
      const [dt, mt, yt] = filters.dateToValue.split('.');
      const date = Date.parse(`${y}-${m}-${d}`);
      const dateTo = Date.parse(`${yt}-${mt}-${dt}`);
      return dateTo > date;
    });
  }
  if (filters.statusValue.length !== 0) {
    orders.filter((item) =>
      filters.statusValue.includes(item.status)
    );
  }
  if (filters.priceFromValue !== '') {
    orders.filter((item) => +item > +filters.priceFromValue);
  }
  if (filters.priceToValue !== '') {
    orders.filter((item) => +item < +filters.priceToValue);
  }
  console.log(orders)
  return orders
}) */
