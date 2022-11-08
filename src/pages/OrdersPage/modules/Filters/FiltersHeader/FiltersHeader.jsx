import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { Searchbar, Button, Icon } from '../../../../../shared/ui';
import styles from './FiltersHeader.module.css';
import { filtersActions } from '../../../../../store/filtersSlice';

export function FiltersHeader({
  isFiltersOpen,
  onClickFiltersOpen,
  isFiltersFilled,
  onResetFilters,
}) {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.searchValue);
  const isLoading = useSelector((state) => state.orders.isLoading);
  const handleChange = (e) => {
    dispatch(filtersActions.changeSearchValue(e.target.value));
  };
  const handleReset = () => {
    dispatch(filtersActions.resetSearchValue());
  };
  const handleResetFilters = () => {
    dispatch(filtersActions.resetFilters());
  };
  const handleResetAllFilters = () => {
    onResetFilters();
    handleResetFilters();
  };

  return (
    <div className={styles._}>
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
          onClick={onClickFiltersOpen}
        >
          Фильтры
        </Button>
        {isFiltersFilled && (
          <Button
            color="reversePrimary"
            size="medium"
            onClick={handleResetAllFilters}
          >
            Сбросить фильтры
          </Button>
        )}
      </div>
      <div className={styles.load}>
        <Icon
          iconType="Refresh"
          className={classnames(styles.loadIcon, {
            [styles.loadIconLoading]: isLoading,
          })}
        />
        <span className={styles.loadText}>Загрузка</span>
      </div>
    </div>
  );
}
