import { useContext } from 'react';
import styles from './TableBody.module.css';
import { TableRow } from './TableRow/TableRow';
import { FilterContext } from '../../../../../store/filterContext';

export function TableBody() {
  const { data } = useContext(FilterContext);
  return (
    <div className={styles._}>
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
      <TableRow value={data} />
    </div>
  );
}
