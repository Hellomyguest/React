import styles from './OrdersPage.module.css';
import { Pageheader } from './modules/Pageheader/Pageheader';
import { TableContainer } from './modules/Table/TableContainer';
import { FiltersContainer } from './modules/Filters/FiltersContainer';

export function OrdersPage() {
  return (
    <div className={styles._}>
      <Pageheader title="Список заказов" />
      <FiltersContainer />
      <TableContainer />
    </div>
  );
}
