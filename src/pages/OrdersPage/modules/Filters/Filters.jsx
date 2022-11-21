import React, { useState } from 'react';
import xor from 'lodash.xor';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../shared/ui';
import { FilterDate } from './FilterDate/FilterDate';
import { FilterStatus } from './FilterStatus/FilterStatus';
import { FilterPrice } from './FilterPrice/FilterPrice';
import { FiltersHeader } from './FiltersHeader/FiltersHeader';

import styles from './Filters.module.css';
import { filtersActions } from '../../../../store/slices/filters';

export function Filters() {
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  const handleClickFiltersOpen = () => {
    setFiltersOpen(!isFiltersOpen);
  };

  const [filtersValue, setFiltersValue] = useState({
    searchValue: '',
    dateFromValue: '',
    dateToValue: '',
    statusValue: [],
    priceFromValue: '',
    priceToValue: '',
  });

  // Search
  const handleChangeSearchValue = ({ target: { value } }) => {
    setFiltersValue({ ...filtersValue, searchValue: value });
  };
  const handleResetSearchValue = () =>
    setFiltersValue({ ...filtersValue, searchValue: '' });

  // Date filter
  const handleChangeDateFromValue = ({ target: { value } }) => {
    setFiltersValue({ ...filtersValue, dateFromValue: value });
  };
  const handleResetDateFromValue = () =>
    setFiltersValue({ ...filtersValue, dateFromValue: '' });

  const handleChangeDateToValue = ({ target: { value } }) => {
    setFiltersValue({ ...filtersValue, dateToValue: value });
  };
  const handleResetDateToValue = () =>
    setFiltersValue({ ...filtersValue, dateToValue: '' });

  // Status filter
  const handleChangeStatusValue = ({ target: { value } }) => {
    setFiltersValue({
      ...filtersValue,
      statusValue: xor(filtersValue.statusValue, [value]),
    });
  };

  // Price filter
  const handleChangePriceFromValue = ({ target: { value } }) => {
    setFiltersValue({ ...filtersValue, priceFromValue: value });
  };
  const handleResetPriceFromValue = () =>
    setFiltersValue({ ...filtersValue, priceFromValue: '' });

  const handleChangePriceToValue = ({ target: { value } }) => {
    setFiltersValue({ ...filtersValue, priceToValue: value });
  };
  const handleResetPriceToValue = () =>
    setFiltersValue({ ...filtersValue, priceToValue: '' });

  // Reset all filters
  const handleResetFilters = () => {
    setFiltersValue({
      searchValue: '',
      dateFromValue: '',
      dateToValue: '',
      statusValue: [],
      priceFromValue: '',
      priceToValue: '',
    });
  };

  // Checking if filters are filled
  const isFiltersFilled =
    filtersValue.searchValue ||
    filtersValue.dateFromValue ||
    filtersValue.dateToValue ||
    filtersValue.statusValue.length ||
    filtersValue.priceFromValue ||
    filtersValue.priceToValue;

  const dispatch = useDispatch();
  const handleClickSetFilters = () =>
    dispatch(filtersActions.setFilters(filtersValue));

  return (
    <div className={styles._}>
      <FiltersHeader
        isFiltersOpen={isFiltersOpen}
        onClickFiltersOpen={handleClickFiltersOpen}
        onResetFilters={handleResetFilters}
        isFiltersFilled={isFiltersFilled}
        searchValue={filtersValue.searchValue}
        onChangeSearchValue={handleChangeSearchValue}
        onResetSearchValue={handleResetSearchValue}
      />
      {isFiltersOpen && (
        <div className={styles.area}>
          <FilterDate
            dateFromValue={filtersValue.dateFromValue}
            onChangeDateFromValue={handleChangeDateFromValue}
            onResetDateFromValue={handleResetDateFromValue}
            dateToValue={filtersValue.dateToValue}
            onChangeDateToValue={handleChangeDateToValue}
            onResetDateToValue={handleResetDateToValue}
          />
          <FilterStatus
            statusValue={filtersValue.statusValue}
            onChangeStatusValue={handleChangeStatusValue}
          />
          <FilterPrice
            priceFromValue={filtersValue.priceFromValue}
            onChangePriceFromValue={handleChangePriceFromValue}
            onResetPriceFromValue={handleResetPriceFromValue}
            priceToValue={filtersValue.priceToValue}
            onChangePriceToValue={handleChangePriceToValue}
            onResetPriceToValue={handleResetPriceToValue}
          />
          <Button
            color="reversePrimary"
            size="medium"
            className={styles.button}
            onClick={handleClickSetFilters}
          >
            Применить
          </Button>
        </div>
      )}
    </div>
  );
}
