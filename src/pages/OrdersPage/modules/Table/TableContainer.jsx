import React, { useContext } from 'react';
import { FilterContext } from '../../../../store/FilterContext';
import { Table } from './Table';

export function TableContainer() {
  const { orders } = useContext(FilterContext);
  return <Table orders={orders} />;
}
