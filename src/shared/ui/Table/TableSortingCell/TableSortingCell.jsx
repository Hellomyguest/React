import React from 'react';
import classNames from 'classnames';
import { Icon } from '../../Icons';
import { TableCell } from '../TableCell/TableCell';
import styles from './TableSortingCell.module.css';

export function TableSortingCell({
  isActive,
  direction,
  onClick,
  children,
  className,
}) {
  return (
    <TableCell
      className={classNames(styles._, { [styles.active]: isActive }, className)}
    >
      <button type="button" className={styles.button} onClick={onClick}>
        {children}
        <Icon
          iconType="Varrow"
          className={classNames(styles.icon, {
            [styles.icon_rotated]: direction,
          })}
        />
      </button>
    </TableCell>
  );
}
