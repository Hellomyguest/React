import { Searchbar, Button, Icon } from '../../../../../shared/ui';
import styles from './FiltersHeader.module.css';

export function FiltersHeader({ filters: { search, filtersOpen, reset } }) {
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
          color={filtersOpen.value ? 'primary' : 'reversePrimary'}
          size="medium"
          iconType="Filter"
          onClick={filtersOpen.onClick}
        >
          Фильтры
        </Button>
        {filtersOpen.value && (
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
