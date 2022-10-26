import { useContext } from 'react';
import { Button } from '../../../../shared/ui';
import { FilterContext } from '../../../../store/filterContext';
import { FilterDate } from './FilterDate/FilterDate';
import { FilterStatus } from './FilterStatus/FilterStatus';
import { FilterPrice } from './FilterPrice/FilterPrice';
import { FiltersHeader } from './FiltersHeader/FiltersHeader';

import styles from './Filters.module.css';

export function Filters() {
  const { filtersOpen } = useContext(FilterContext);
  return (
    <div className={styles._}>
      <FiltersHeader />
      {filtersOpen.value && (
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
