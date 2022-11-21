import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import { Searchbar, Button, Icon } from '../../../../../shared/ui';
import styles from './FiltersHeader.module.css';
import { filtersActions } from '../../../../../store/slices/filters';
import { isLoadingSelector } from '../../../../../store/slices/orders';

export function FiltersHeader({
  isFiltersOpen,
  onClickFiltersOpen,
  isFiltersFilled,
  onResetFilters,
  searchValue,
  onChangeSearchValue,
  onResetSearchValue,
}) {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  // Обработка строки поиска
  const handleChange = ({ target: { value } }) => {
    dispatch(filtersActions.changeSearch(value));
  };

  const debouncedResults = useMemo(
    () => debounce(handleChange, 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleChangeSearchValue = (e) => {
    onChangeSearchValue(e);
    debouncedResults(e);
  };

  // Сброс строки поиска
  const handleReset = () => {
    onResetSearchValue();
    dispatch(filtersActions.resetSearch());
  };

  // Сброс всех фильтров
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
          onChange={handleChangeSearchValue}
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
      {isLoading && (
        <div className={styles.load}>
          <Icon
            iconType="Refresh"
            className={classnames(styles.loadIcon, {
              [styles.loadIconLoading]: isLoading,
            })}
          />
          <span className={styles.loadText}>Загрузка</span>
        </div>
      )}
    </div>
  );
}
