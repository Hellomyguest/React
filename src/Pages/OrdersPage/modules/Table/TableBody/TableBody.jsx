import classNames from 'classnames';
import {
  Checkbox,
  ControlWithLabel,
  Icon,
  TableCell,
} from '../../../../../shared/ui';
import styles from './TableBody.module.css';
import { TableRow } from './TableRow/TableRow';

export function TableBody({ orders }) {
  return (
    <div className={styles._}>
      {orders.map((order) => (
        <TableRow key={order.id}>
          <TableCell className={classNames(styles.cell, styles.cell_filtering)}>
            <ControlWithLabel
              control={<Checkbox />}
              className={styles.cellCheckbox}
            />
          </TableCell>
          <TableCell className={styles.cell}>
            <span className={styles.text}>{order.orderNumber}</span>
          </TableCell>
          <TableCell className={styles.cell}>
            <span className={styles.text}>{order.date}</span>
          </TableCell>
          <TableCell
            className={classNames(styles.cell, {
              [styles.cell_canseled]: order.statusExtended.declined,
            })}
          >
            <Icon
              iconType={order.statusExtended.iconType}
              className={classNames(
                styles.icon,
                order.statusExtended.iconClassName
              )}
            />
            <span
              className={classNames(
                styles.text,
                order.statusExtended.textClassName
              )}
            >
              {order.statusExtended.name}
            </span>
          </TableCell>
          <TableCell className={styles.cell}>
            <span className={styles.text}>{order.amount}</span>
          </TableCell>
          <TableCell className={styles.cell}>
            <span className={styles.text}>{order.sum}</span>
          </TableCell>
          <TableCell className={styles.cell}>
            <span className={styles.text}>{order.customer}</span>
          </TableCell>
        </TableRow>
      ))}
    </div>
  );
}
