import styles from './Table.module.css';
import { TableBody } from './TableBody/TableBody';
import { TableFooter } from './TableFooter/TableFooter';
import { TableHeader } from './TableHeader/TableHeader';

export function Table() {
  return (
    <div className={styles._}>
      <TableHeader />
      <TableBody />
      <TableFooter />
    </div>
  );
}
