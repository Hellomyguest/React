import React from 'react';
import classNames from 'classnames';
import {
  Checkbox,
  ControlWithLabel,
  TableCell,
} from '../../../../../shared/ui';
import { StatusTableCell } from '../../../ui/StatusTableCell/StatusTableCell';
import styles from './TableBody.module.css';
import { TableRow } from './TableRow/TableRow';

export function TableBody({ orders }) {
  return (
    <div className={styles._}>
      {orders.map((order) => (
        <TableRow key={order.id} className={styles.row}>
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
          <StatusTableCell status={order.status} className={styles.cell} />
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
