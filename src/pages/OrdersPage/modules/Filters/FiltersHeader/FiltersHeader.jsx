import { Searchbar, Button, Icon } from '../../../../../shared/ui';
import styles from './FiltersHeader.module.css';

export function FiltersHeader({
  filters: { search, reset, filtersFilled },
  isFiltersOpen,
  onFiltersOpen,
}) {
  return (
    <div className={styles._}>
      <div className={styles.search}>
        <Searchbar
          placeholder="Номер заказа или ФИО"
          value={search.value}
          onChange={search.onChange}
          onReset={search.onReset}
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
