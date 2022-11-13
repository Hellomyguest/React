import { createSelector } from '@reduxjs/toolkit';
import {
  searchValue,
  dateFromValue,
  dateToValue,
  statusValue,
  priceFromValue,
  priceToValue,
  activeSortingCell,
  isSortingAscending,
  currentPage,
  pageSize,
} from '../filters';

export const orders = (state) => state.orders.orders;
export const isLoading = (state) => state.orders.isLoading;

const parseDate = (date) => {
  const [d, m, y] = date.slice(0, 10).split('.');
  return Date.parse(`${y}-${m}-${d}`);
};

const filterBySearch = (search, order, customer) =>
  search
    ? order.startsWith(search) ||
      customer.toLowerCase().includes(search.toLowerCase())
    : true;

const filterByDate = (dateFrom, dateTo, date) => {
  if (!dateFrom && !dateTo) {
    return true;
  }
  if (!dateFrom) {
    return date <= dateTo;
  }
  if (!dateTo) {
    return date >= dateFrom;
  }
  return date >= dateFrom && date <= dateTo;
};

const filterBySum = (min, max, value) => {
  const minValue = min === '' ? Number.MIN_SAFE_INTEGER : +min;
  const maxValue = max === '' ? Number.MAX_SAFE_INTEGER : +max;

  return +value >= +minValue && +value <= +maxValue;
};

const filterByStatus = (status, value) =>
  status.length ? status.includes(value) : true;

const areAllFilled = (arr) => arr.every(Boolean);

const sortByKey = (key, isAscending, array) => {
  const direction = isAscending ? -1 : 1;
  return key === 'sum'
    ? array.sort((a, b) => (+a[key] > +b[key] ? direction : -direction))
    : array.sort((a, b) => (a[key] > b[key] ? direction : -direction));
};

export const filteredAndSortedOrders = createSelector(
  orders,
  searchValue,
  dateFromValue,
  dateToValue,
  statusValue,
  priceFromValue,
  priceToValue,
  activeSortingCell,
  isSortingAscending,
  pageSize,
  currentPage,
  (
    ordersValue,
    search,
    dateFrom,
    dateTo,
    statuses,
    priceFrom,
    priceTo,
    key,
    isAscending
  ) => {
    let array = ordersValue.filter(
      ({ orderNumber, date, status, sum, customer }) =>
        areAllFilled([
          filterBySearch(search, orderNumber, customer),
          filterByDate(
            parseDate(dateFrom),
            parseDate(dateTo),
            Date.parse(date.slice(0, 10))
          ),
          filterByStatus(statuses, status),
          filterBySum(priceFrom, priceTo, sum),
        ])
    );

    array = sortByKey(key, isAscending, array);

    return array;
  }
);

export const paginatedOrders = createSelector(
  pageSize,
  currentPage,
  filteredAndSortedOrders,
  (pSize, curPage, ordersValue) => {
    const firstPageIndex = (curPage - 1) * pSize;
    const lastPageIndex = firstPageIndex + pSize;
    return ordersValue.slice(firstPageIndex, lastPageIndex);
  }
);
