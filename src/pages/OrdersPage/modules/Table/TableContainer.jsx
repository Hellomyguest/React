import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../../store/ordersSlice';
import { Table } from './Table';

export function TableContainer() {
  const dispatch = useDispatch();
  // setTimeout(() => dispatch(ordersAction.loading()), 5000);
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  const orders = useSelector((state) => state.orders.orders);
  return <Table orders={orders} />;
}
