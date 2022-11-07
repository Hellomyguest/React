import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  dateFromValue: '',
  dateToValue: '',
  statusValue: [],
  priceFromValue: '',
  priceToValue: '',
  filteredOrders: [],
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
    filterOrders(state, { payload }) {
      let arr = payload.slice(0);
      if (state.dateFromValue !== '') {
        arr = arr.filter((item) => {
          const [d, m, y] = item.date.slice(0, 10).split('.');
          const [df, mf, yf] = state.dateFromValue.split('.');
          const date = Date.parse(`${y}-${m}-${d}`);
          const dateFrom = Date.parse(`${yf}-${mf}-${df}`);
          return dateFrom < date;
        });
      }
      if (state.dateToValue !== '') {
        arr = arr.filter((item) => {
          const [d, m, y] = item.date.slice(0, 10).split('.');
          const [dt, mt, yt] = state.dateToValue.split('.');
          const date = Date.parse(`${y}-${m}-${d}`);
          const dateTo = Date.parse(`${yt}-${mt}-${dt}`);
          return dateTo > date;
        });
      }
      if (state.statusValue.length !== 0) {
        arr = arr.filter((item) => {
          console.log(state.statusValue, item.status);
          return state.statusValue.includes(item.status);
        });
      }
      if (state.priceFromValue !== '') {
        arr = arr.filter(
          (item) =>
            parseInt(String(item.sum).replace(/\s+/g, ''), 10) >
            state.priceFromValue
        );
      }
      if (state.priceToValue !== '') {
        arr = arr.filter(
          (item) =>
            parseInt(String(item.sum).replace(/\s+/g, ''), 10) <
            state.priceToValue
        );
      }

      state.filteredOrders = arr;
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
