import React, { useState } from 'react';
import { Button } from '../../../../shared/ui';
import { FilterDate } from './FilterDate/FilterDate';
import { FilterStatus } from './FilterStatus/FilterStatus';
import { FilterPrice } from './FilterPrice/FilterPrice';
import { FiltersHeader } from './FiltersHeader/FiltersHeader';

import styles from './Filters.module.css';

export function Filters() {
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
          >
            Применить
          </Button>
        </div>
      )}
    </div>
  );
}
