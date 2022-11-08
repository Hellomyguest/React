import React from 'react';
import styles from './OrdersPage.module.css';
import { Pageheader } from './modules/Pageheader/Pageheader';
import { TableContainer } from './modules/TableContainer/TableContainer';
import { Filters } from './modules/Filters/Filters';

export function OrdersPage() {
  return (
    <div className={styles._}>
      <Pageheader title="Список заказов" />
      <Filters />
      <TableContainer />
    </div>
  );
}