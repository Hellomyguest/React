import { createSelector } from '@reduxjs/toolkit';
import {
  search,
  dateFrom,
  dateTo,
  statuses,
  priceFrom,
  priceTo,
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

const filterBySearch = (searchValue, orderValue, customer) =>
  searchValue
    ? orderValue.startsWith(searchValue) ||
      customer.toLowerCase().includes(searchValue.toLowerCase())
    : true;

const filterByDate = (dateFromValue, dateToValue, date) => {
  if (!dateFromValue && !dateToValue) {
    return true;
  }
  if (!dateFromValue) {
    return date <= dateToValue;
  }
  if (!dateToValue) {
    return date >= dateFromValue;
  }
  return date >= dateFromValue && date <= dateToValue;
};

const filterBySum = (min, max, value) => {
  const minValue = min === '' ? Number.MIN_SAFE_INTEGER : +min;
  const maxValue = max === '' ? Number.MAX_SAFE_INTEGER : +max;

  return value >= +minValue && value <= +maxValue;
};

const filterByStatus = (statusValue, value) =>
  statusValue.length ? statusValue.includes(value) : true;

const areAllFilled = (arr) => arr.every(Boolean);

const sortByKey = (key, isAscending, array) => {
  const direction = isAscending ? -1 : 1;
  return array.sort((a, b) => (a[key] > b[key] ? direction : -direction));
};

export const filteredAndSortedOrders = createSelector(
  orders,
  search,
  dateFrom,
  dateTo,
  statuses,
  priceFrom,
  priceTo,
  activeSortingCell,
  isSortingAscending,
  (
    ordersValue,
    searchValue,
    dateFromValue,
    dateToValue,
    statusesValue,
    priceFromValue,
    priceToValue,
    key,
    isAscending
  ) => {
    let array = ordersValue.filter(
      ({ orderNumber, date, status, sum, customer }) =>
        areAllFilled([
          filterBySearch(searchValue, orderNumber, customer),
          filterByDate(
            parseDate(dateFromValue),
            parseDate(dateToValue),
            Date.parse(date.slice(0, 10))
          ),
          filterByStatus(statusesValue, status),
          filterBySum(priceFromValue, priceToValue, sum),
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
