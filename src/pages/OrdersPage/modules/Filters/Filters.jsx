import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../../../shared/ui';
import { FilterDate } from './FilterDate/FilterDate';
import { FilterStatus } from './FilterStatus/FilterStatus';
import { FilterPrice } from './FilterPrice/FilterPrice';
import { FiltersHeader } from './FiltersHeader/FiltersHeader';

import styles from './Filters.module.css';
import { filtersActions } from '../../../../store/filtersSlice';

export function Filters() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const handleClickFilterOrders = () => {
    dispatch(filtersActions.filterOrders(orders));
  };
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  const handleClickFiltersOpen = () => {
    setFiltersOpen(!isFiltersOpen);
  };

  return (
    <div className={styles._}>
      <FiltersHeader
        isFiltersOpen={isFiltersOpen}
        onClickFiltersOpen={handleClickFiltersOpen}
      />
      {isFiltersOpen && (
        <div className={styles.area}>
          <FilterDate />
          <FilterStatus />
          <FilterPrice />
          <Button
            color="reversePrimary"
            size="medium"
            className={styles.button}
            onClick={handleClickFilterOrders}
          >
            Применить
          </Button>
        </div>
      )}
    </div>
  );
}
