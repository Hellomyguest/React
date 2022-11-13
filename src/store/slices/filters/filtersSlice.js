import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  dateFromValue: '',
  dateToValue: '',
  statusValue: [],
  priceFromValue: '',
  priceToValue: '',
  activeSortingCell: 'date',
  isSortingAscending: false,
  currentPage: 1,
  pageSize: 20,
};
export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    resetSearchValue(state) {
      state.searchValue = '';
    },
    resetFilters() {
      return initialState;
    },
    setFilters(state, { payload }) {
      state.dateFromValue = payload.dateFromValue;
      state.dateToValue = payload.dateToValue;
      state.statusValue = payload.statusValue.slice(0);
      state.priceFromValue = payload.priceFromValue;
      state.priceToValue = payload.priceToValue;
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
