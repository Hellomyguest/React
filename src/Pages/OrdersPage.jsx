import styles from './OrdersPage.module.css';

import { Pageheader } from '../modules/Pageheader/Pageheader';
import { Filter } from '../modules/Filter/Filter';

export function OrdersPage() {
  return (
    <div className={styles.body}>
      <Pageheader title="Список заказов" />
      <Filter />
    </div>
  );
}
