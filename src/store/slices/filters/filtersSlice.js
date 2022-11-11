import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  dateFromValue: '',
  dateToValue: '',
  statusValue: [],
  priceFromValue: '',
  priceToValue: '',
  activeSortingCell: 'Дата',
  sortingCellsDirectionUp: [],
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
    getFilters(state, { payload }) {
      state.dateFromValue = payload.dateFromValue;
      state.dateToValue = payload.dateToValue;
      state.statusValue = payload.statusValue.slice(0);
      state.priceFromValue = payload.priceFromValue;
      state.priceToValue = payload.priceToValue;
    },
    sortOrders(state, action) {
      if (state.activeSortingCell === action.payload) {
        state.sortingCellsDirectionUp = state.sortingCellsDirectionUp.includes(
          action.payload
        )
          ? state.sortingCellsDirectionUp.filter(
              (item) => item !== action.payload
            )
          : [state.sortingCellsDirectionUp, action.payload];
      } else state.activeSortingCell = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;
