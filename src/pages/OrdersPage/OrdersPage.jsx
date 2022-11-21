import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './OrdersPage.module.css';
import { Pageheader } from './modules/Pageheader/Pageheader';
import { TableContainer } from './modules/TableContainer/TableContainer';
import { Filters } from './modules/Filters/Filters';

import {
  correctiveOrderIdSelector,
  fetchOrders,
} from '../../store/slices/orders';
import { OrderForm } from './modules/OrderForm/OrderForm';

export function OrdersPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orderIdToCorrect = useSelector(correctiveOrderIdSelector);

  return (
    <div className={styles._}>
      <Pageheader title="Список заказов" />
      <Filters />
      <TableContainer />
      {orderIdToCorrect && (
        <div className={styles.wrapper}>
          <OrderForm />
        </div>
      )}
    </div>
  );
}
