import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: { searchValue: '' },
  reducers: {
    changeSearchValue(state, action) {
      state.searchValue = action.payload.value;
    },
    resetSearchValue(state) {
      state.searchValue = '';
    },
  },
});

export const filtersActions = filtersSlice.actions;
