import React, { useState } from 'react';
import { orders } from './order';

export const FilterContext = React.createContext(null);

export function FilterContextProvider({ children }) {
  // isFilters open context
  const [isFiltersOpen, setFiltersOpen] = useState('');

  const handleClickFiltersOpen = () => {
    setFiltersOpen(!isFiltersOpen);
  };

  // Search context
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleResetSearchValue = () => setSearchValue('');

  // Date filter context
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleChangeDateFrom = (e) => {
    setDateFrom(e.target.value);
  };

  const handleChangeDateTo = (e) => {
    setDateTo(e.target.value);
  };

  // Status filter context
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleChangeSelectedStatuses = (e) => {
    setSelectedStatuses(
      selectedStatuses.includes(e.target.name)
        ? selectedStatuses.filter((item) => item !== e.target.name)
        : [...selectedStatuses, e.target.name]
    );
  };

  // Price filter context
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const handleChangePriceFrom = (e) => {
    setPriceFrom(e.target.value);
  };

  const handleChangePriceTo = (e) => {
    setPriceTo(e.target.value);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchValue('');
    setDateFrom('');
    setDateTo('');
    setSelectedStatuses([]);
    setPriceFrom('');
    setPriceTo('');
  };

  // Getting the context value
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const filterStore = {
    filtersOpen: {
      value: isFiltersOpen,
      onClick: handleClickFiltersOpen,
    },
    search: {
      value: searchValue,
      onChange: handleChangeSearchValue,
      onReset: handleResetSearchValue,
    },
    date: {
      valueFrom: dateFrom,
      valueTo: dateTo,
      onChangeFrom: handleChangeDateFrom,
      onChangeTo: handleChangeDateTo,
    },
    status: {
      value: selectedStatuses,
      onChange: handleChangeSelectedStatuses,
    },
    price: {
      valueFrom: priceFrom,
      valueTo: priceTo,
      onChangeFrom: handleChangePriceFrom,
      onChangeTo: handleChangePriceTo,
    },
    reset: { onClick: handleResetFilters },
    orders,
  };

  return (
    <FilterContext.Provider value={filterStore}>
      {children}
    </FilterContext.Provider>
  );
}
