import styles from './OrdersPage.module.css';
import { Pageheader } from './modules/Pageheader/Pageheader';
import { Filters } from './modules/Filters/Filters';

export function OrdersPage() {
  return (
    <div className={styles.body}>
      <Pageheader title="Список заказов" />
      <Filters />
    </div>
  );
}
