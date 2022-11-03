import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Searchbar, Button, Icon } from '../../../../../shared/ui';
import styles from './FiltersHeader.module.css';
import { filtersActions } from '../../../../../store/filterSlice';

export function FiltersHeader({
  filters: { reset, filtersFilled },
  isFiltersOpen,
  onFiltersOpen,
}) {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.searchValue);
  const handleChange = (e) => {
    dispatch(
      filtersActions.changeSearchValue({
        type: 'changeSearchValue',
        value: e.target.value,
      })
    );
  };
  const handleReset = () => {
    dispatch(filtersActions.resetSearchValue());
  };
  return (
    <div classNaЫme={styles._}>
      <div className={styles.search}>
        <Searchbar
          placeholder="Номер заказа или ФИО"
          value={searchValue}
          onChange={handleChange}
          onReset={handleReset}
        />
        <Button
          color={isFiltersOpen ? 'primary' : 'reversePrimary'}
          size="medium"
          iconType="Filter"
          onClick={onFiltersOpen}
        >
          Фильтры
        </Button>
        {onFiltersOpen && filtersFilled && (
          <Button color="reversePrimary" size="medium" onClick={reset.onClick}>
            Сбросить фильтры
          </Button>
        )}
      </div>
      <div className={styles.load}>
        <Icon iconType="Refresh" className={styles.loadIcon} />
        <span className={styles.loadText}>Загрузка</span>
      </div>
    </div>
  );
}
