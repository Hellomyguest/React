import classNames from 'classnames';
import {
  Checkbox,
  ControlWithLabel,
  TableCell,
  TableSortingCell,
} from '../../../../../shared/ui';
import styles from './TableHeader.module.css';

export function TableHeader() {
  return (
    <div className={styles._}>
      <div className={styles.wrapper}>
        <TableCell className={classNames(styles.cell, styles.cell_filtering)}>
          <ControlWithLabel
            control={<Checkbox />}
            className={styles.cellCheckbox}
          />
        </TableCell>
        <TableCell className={styles.cell}>
          <span className={styles.text}>#</span>
        </TableCell>
        <TableSortingCell isActive className={styles.cell} label="Дата" />
        <TableSortingCell className={styles.cell} label="Статус" />
        <TableSortingCell className={styles.cell} label="Позиций" />
        <TableSortingCell className={styles.cell} label="Сумма" />
        <TableCell className={styles.cell}>
          <span className={styles.text}>ФИО покупателя</span>
        </TableCell>
      </div>
    </div>
  );
}
