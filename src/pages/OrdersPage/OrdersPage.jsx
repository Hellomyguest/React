import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './OrdersPage.module.css';
import { Pageheader } from './modules/Pageheader/Pageheader';
import { TableContainer } from './modules/TableContainer/TableContainer';
import { Filters } from './modules/Filters/Filters';

import { fetchOrders } from '../../store/slices/orders';

export function OrdersPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  return (
    <div className={styles._}>
      <Pageheader title="Список заказов" />
      <Filters />
      <TableContainer />
    </div>
  );
}
