export const searchSelector = (state) => state.filter.search;
export const dateFromSelector = (state) => state.filter.dateFrom;
export const dateToSelector = (state) => state.filter.dateTo;
export const statusesSelector = (state) => state.filter.statuses;
export const priceFromSelector = (state) => state.filter.priceFrom;
export const priceToSelector = (state) => state.filter.priceTo;
export const activeSortingCellSelector = (state) =>
  state.filter.activeSortingCell;
export const isSortingAscendingSelector = (state) =>
  state.filter.isSortingAscending;
export const currentPageSelector = (state) => state.filter.currentPage;
export const pageSizeSelector = (state) => state.filter.pageSize;
