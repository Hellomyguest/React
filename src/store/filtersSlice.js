import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const filtersActions = filtersSlice.actions;
