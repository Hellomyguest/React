import { createSelector } from '@reduxjs/toolkit';
import {
  searchSelector,
  dateFromSelector,
  dateToSelector,
  statusesSelector,
  priceFromSelector,
  priceToSelector,
  activeSortingCellSelector,
  isSortingAscendingSelector,
  currentPageSelector,
  pageSizeSelector,
} from '../filters';

export const ordersSelector = (state) => state.orders.orders;
export const isLoadingSelector = (state) => state.orders.isLoading;
export const selectedOrdersIdsSelector = (state) =>
  state.orders.selectedOrdersIds;
export const correctiveOrderIdSelector = (state) =>
  state.orders.correctiveOrderId;

export const parseDate = (date) => {
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
  const minValue = min === '' ? Number.MIN_SAFE_INTEGER : min;
  const maxValue = max === '' ? Number.MAX_SAFE_INTEGER : max;

  return value >= +minValue && value <= +maxValue;
};

const filterByStatus = (statusValue, value) =>
  statusValue.length ? statusValue.includes(value) : true;

const areAllFilled = (arr) => arr.every(Boolean);

const sortByKey = (key, isAscending, array) => {
  const direction = isAscending ? -1 : 1;
  return array.sort((a, b) => (a[key] < b[key] ? direction : -direction));
};

export const filteredAndSortedOrdersSelector = createSelector(
  ordersSelector,
  searchSelector,
  dateFromSelector,
  dateToSelector,
  statusesSelector,
  priceFromSelector,
  priceToSelector,
  activeSortingCellSelector,
  isSortingAscendingSelector,
  (
    orders,
    search,
    dateFrom,
    dateTo,
    statuses,
    priceFrom,
    priceTo,
    key,
    isAscending
  ) => {
    let array = orders.filter(({ orderNumber, date, status, sum, customer }) =>
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

export const paginatedOrdersSelector = createSelector(
  pageSizeSelector,
  currentPageSelector,
  filteredAndSortedOrdersSelector,
  (pageSize, currentPage, orders) => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return orders.slice(firstPageIndex, lastPageIndex);
  }
);
