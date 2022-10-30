import React from 'react';
import styles from './Table.module.css';
import { TableBody } from './TableBody/TableBody';
import { TableFooter } from './TableFooter/TableFooter';
import { TableHeader } from './TableHeader/TableHeader';

export function Table({ orders }) {
  return (
    <div className={styles._}>
      <TableHeader />
      <TableBody orders={orders} />
      <TableFooter />
    </div>
  );
}
