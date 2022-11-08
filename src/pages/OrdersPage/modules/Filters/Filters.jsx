import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../shared/ui';
import { FilterDate } from './FilterDate/FilterDate';
import { FilterStatus } from './FilterStatus/FilterStatus';
import { FilterPrice } from './FilterPrice/FilterPrice';
import { FiltersHeader } from './FiltersHeader/FiltersHeader';

import styles from './Filters.module.css';
import { filtersActions } from '../../../../store/filtersSlice';

export function Filters() {
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  const handleClickFiltersOpen = () => {
    setFiltersOpen(!isFiltersOpen);
  };

  const [filtersValue, setFiltersValue] = useState({
    dateFromValue: '',
    dateToValue: '',
    statusValue: [],
    priceFromValue: '',
    priceToValue: '',
  });

  // Date filter
  const handleChangeDateFromValue = (e) => {
    setFiltersValue({ ...filtersValue, dateFromValue: e.target.value });
  };
  const handleResetDateFromValue = () =>
    setFiltersValue({ ...filtersValue, dateFromValue: '' });

  const handleChangeDateToValue = (e) => {
    setFiltersValue({ ...filtersValue, dateToValue: e.target.value });
  };
  const handleResetDateToValue = () =>
    setFiltersValue({ ...filtersValue, dateToValue: '' });

  // Status filter
  const handleChangeStatusValue = (e) => {
    setFiltersValue({
      ...filtersValue,
      statusValue: filtersValue.statusValue.includes(e.target.name)
        ? filtersValue.statusValue.filter((item) => item !== e.target.name)
        : [...filtersValue.statusValue, e.target.name],
    });
  };

  // Price filter
  const handleChangePriceFromValue = (e) => {
    setFiltersValue({ ...filtersValue, priceFromValue: e.target.value });
  };
  const handleResetPriceFromValue = () =>
    setFiltersValue({ ...filtersValue, priceFromValue: '' });

  const handleChangePriceToValue = (e) => {
    setFiltersValue({ ...filtersValue, priceToValue: e.target.value });
  };
  const handleResetPriceToValue = () =>
    setFiltersValue({ ...filtersValue, priceToValue: '' });

  // Reset all filters
  const handleResetFilters = () => {
    setFiltersValue({
      dateFromValue: '',
      dateToValue: '',
      statusValue: [],
      priceFromValue: '',
      priceToValue: '',
    });
  };

  // Checking if filters are filled
  const searchValue = useSelector((state) => state.filter.searchValue);
  const isFiltersFilled =
    searchValue ||
    filtersValue.dateFromValue ||
    filtersValue.dateToValue ||
    filtersValue.statusValue.length ||
    filtersValue.priceFromValue ||
    filtersValue.priceToValue;

  const dispatch = useDispatch();
  const handleClickGetFilters = () =>
    dispatch(filtersActions.getFilters(filtersValue));

  return (
    <div className={styles._}>
      <FiltersHeader
        isFiltersOpen={isFiltersOpen}
        onClickFiltersOpen={handleClickFiltersOpen}
        onResetFilters={handleResetFilters}
        isFiltersFilled={isFiltersFilled}
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
            onClick={handleClickGetFilters}
          >
            Применить
          </Button>
        </div>
      )}
    </div>
  );
}