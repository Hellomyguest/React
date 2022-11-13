import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  dateFrom: '',
  dateTo: '',
  statuses: [],
  priceFrom: '',
  priceTo: '',
  activeSortingCell: 'date',
  isSortingAscending: false,
  currentPage: 1,
  pageSize: 20,
};
export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
    resetSearch(state) {
      state.search = '';
    },
    resetFilters() {
      return initialState;
    },
    setFilters(state, { payload }) {
      state.dateFrom = payload.dateFromValue;
      state.dateTo = payload.dateToValue;
      state.statuses = payload.statusValue;
      state.priceFrom = payload.priceFromValue;
      state.priceTo = payload.priceToValue;
    },
    setSorting(state, { payload }) {
      state.isSortingAscending = payload.sortingAsc;
      state.activeSortingCell = payload.key;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;
