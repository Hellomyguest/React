import styles from './OrdersPage.module.css';
import { Pageheader } from './modules/Pageheader/Pageheader';
import { Filters } from './modules/Filters/Filters';
import { Table } from './modules/Table/Table';

export function OrdersPage() {
  return (
    <div className={styles._}>
      <Pageheader title="Список заказов" />
      <Filters />
      <Table />
    </div>
  );
}
