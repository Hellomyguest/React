import { createSelector } from '@reduxjs/toolkit';

const orders = (state) => state.orders.orders;
const searchValue = (state) => state.filter.searchValue;
const dateFromValue = (state) => state.filter.dateFromValue;
const dateToValue = (state) => state.filter.dateToValue;
const statusValue = (state) => state.filter.statusValue;
const priceFromValue = (state) => state.filter.priceFromValue;
const priceToValue = (state) => state.filter.priceToValue;

export const filteredOrders = createSelector(
  orders,
  searchValue,
  dateFromValue,
  dateToValue,
  statusValue,
  priceFromValue,
  priceToValue,
  (data, search, dateFrom, dateTo, status, priceFrom, priceTo) => {
    let arr = data.slice(0);
    if (search !== '') {
      arr = arr.filter(
        (item) =>
          item.orderNumber.indexOf(search) !== -1 ||
          item.customer.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    }
    if (dateFrom !== '') {
      arr = arr.filter((item) => {
        const [d, m, y] = item.date.slice(0, 10).split('.');
        const [df, mf, yf] = dateFrom.split('.');
        const date = Date.parse(`${y}-${m}-${d}`);
        const datefrom = Date.parse(`${yf}-${mf}-${df}`);
        return datefrom < date;
      });
    }
    if (dateTo !== '') {
      arr = arr.filter((item) => {
        const [d, m, y] = item.date.slice(0, 10).split('.');
        const [dt, mt, yt] = dateTo.split('.');
        const date = Date.parse(`${y}-${m}-${d}`);
        const dateto = Date.parse(`${yt}-${mt}-${dt}`);
        return dateto > date;
      });
    }
    if (status.length !== 0) {
      arr = arr.filter((item) => status.includes(item.status));
    }
    if (priceFrom !== '') {
      arr = arr.filter(
        (item) => parseInt(String(item.sum).replace(/\s+/g, ''), 10) > priceFrom
      );
    }
    if (priceTo !== '') {
      arr = arr.filter(
        (item) => parseInt(String(item.sum).replace(/\s+/g, ''), 10) < priceTo
      );
    }
    return arr;
  }
);
