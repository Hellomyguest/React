import { createSelector } from '@reduxjs/toolkit';

const orders = (state) => state.orders.orders;
const searchValue = (state) => state.filter.searchValue;
const dateFromValue = (state) => state.filter.dateFromValue;
const dateToValue = (state) => state.filter.dateToValue;
const statusValue = (state) => state.filter.statusValue;
const priceFromValue = (state) => state.filter.priceFromValue;
const priceToValue = (state) => state.filter.priceToValue;
const activeSortingCell = (state) => state.filter.activeSortingCell;
const sortingCellsDirectionUp = (state) => state.filter.sortingCellsDirectionUp;

const parseDate = (date) => {
  const [d, m, y] = date.slice(0, 10).split('.');
  return Date.parse(`${y}-${m}-${d}`);
};
const parseSum = (sum) => parseInt(String(sum).replace(/\s+/g, ''), 10);

export const filteredOrders = createSelector(
  orders,
  searchValue,
  dateFromValue,
  dateToValue,
  statusValue,
  priceFromValue,
  priceToValue,
  activeSortingCell,
  sortingCellsDirectionUp,
  (
    data,
    search,
    dateFrom,
    dateTo,
    status,
    priceFrom,
    priceTo,
    sortingCell,
    sortDirectionUp
  ) => {
    let arr = data.slice(0);

    // Фильтрация
    if (search !== '') {
      arr = arr.filter(
        (item) =>
          item.orderNumber.indexOf(search) !== -1 ||
          item.customer.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    }

    // Фильтрация по дате
    arr = arr.filter((item) =>
      dateFrom ? parseDate(dateFrom) < parseDate(item.date) : true
    );

    arr = arr.filter((item) =>
      dateTo ? parseDate(dateTo) > parseDate(item.date) : true
    );

    // Фильтрация по статусу
    arr = arr.filter((item) =>
      status.length ? status.includes(item.status) : true
    );

    // Фильтрация по сумме
    arr = arr.filter((item) =>
      priceFrom ? parseSum(item.sum) > priceFrom : true
    );

    arr = arr.filter((item) => (priceTo ? parseSum(item.sum) < priceTo : true));

    // Сортировка
    switch (sortingCell) {
      case 'Дата':
        arr.sort((a, b) => parseDate(a.date) - parseDate(b.date));
        if (sortDirectionUp.includes('Дата')) arr.reverse();

        break;
      case 'Статус':
        arr.sort((a, b) => (a.status > b.status ? -1 : 1));
        if (sortDirectionUp.includes('Статус')) {
          arr.reverse();
        }

        break;
      case 'Позиций':
        arr.sort((a, b) => +a.amount - +b.amount);
        if (sortDirectionUp.includes('Позиций')) {
          arr.reverse();
        }
        break;
      case 'Сумма':
        arr.sort((a, b) => parseSum(a.sum) - parseSum(b.sum));
        if (sortDirectionUp.includes('Сумма')) {
          arr.reverse();
        }
        break;
      default:
    }
    return arr;
  }
);
