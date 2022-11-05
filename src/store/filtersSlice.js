import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  dateFromValue: '',
  dateToValue: '',
  statusValue: [],
  priceFromValue: '',
  priceToValue: '',
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
    changeDateFromValue(state, action) {
      state.dateFromValue = action.payload;
    },
    resetDateFromValue(state) {
      state.dateFromValue = '';
    },
    changeDateToValue(state, action) {
      state.dateToValue = action.payload;
    },
    resetDateToValue(state) {
      state.dateToValue = '';
    },
    changeStatusValue(state, action) {
      state.statusValue = state.statusValue.includes(action.payload)
        ? state.statusValue.filter((item) => item !== action.payload)
        : [...state.statusValue, action.payload];
    },
    changePriceFromValue(state, action) {
      state.priceFromValue = action.payload;
    },
    resetPriceFromValue(state) {
      state.priceFromValue = '';
    },
    changePriceToValue(state, action) {
      state.priceToValue = action.payload;
    },
    resetPriceToValue(state) {
      state.priceToValue = '';
    },
    resetFilters() {
      return initialState;
    },
  },
});

const search = (state) => state.filter.searchValue;
const dateFrom = (state) => state.filter.dateFromValue;
const dateTo = (state) => state.filter.dateToValue;
const status = (state) => state.filter.statusValue;
const priceFrom = (state) => state.filter.priceFromValue;
const priceTo = (state) => state.filter.priceToValue;

export const isFiltersFilled = createSelector(
  search,
  dateFrom,
  dateTo,
  status,
  priceFrom,
  priceTo,
  (se, df, dt, st, pf, pt) => se || df || dt || st.length || pf || pt
);

export const filtersActions = filtersSlice.actions;
