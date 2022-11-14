import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  paginatedOrders,
  filteredAndSortedOrders,
  selectedOrders,
  ordersActions,
} from '../../../../store/slices/orders';
import styles from './TableContainer.module.css';
import {
  Button,
  Checkbox,
  ControlWithLabel,
  Dropdown,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  TableSortingCell,
} from '../../../../shared/ui';
import { StatusTableCell } from '../../ui/StatusTableCell/StatusTableCell';
import {
  activeSortingCell,
  currentPage,
  filtersActions,
  isSortingAscending,
  pageSize,
} from '../../../../store/slices/filters';
import { Pagination } from '../Pagination/Pagination';

const prettifySum = (sum) => {
  const preSum = sum.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1 `);
  return `${preSum} ₽`;
};

const prettifyDate = (date) => {
  const dateObj = new Date(date);
  return `${`0${dateObj.getDate()}`.slice(-2)}.${`0${
    1 + +dateObj.getMonth()
  }`.slice(-2)}.${dateObj.getFullYear()}, ${`0${dateObj.getHours()}`.slice(
    -2
  )}:${`0${dateObj.getMinutes()}`.slice(-2)}`;
};

export function TableContainer() {
  const curPage = useSelector(currentPage);

  const dispatch = useDispatch();

  const handleClickChangePage = (page) =>
    dispatch(filtersActions.setCurrentPage(page));
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(filtersActions.setCurrentPage(+e.target.value));
    }
  };

  const selectedSortingCell = useSelector(activeSortingCell);
  const sortAscending = useSelector(isSortingAscending);
  const handleClickSetSortingCell = (key) => () => {
    const sortingAsc = selectedSortingCell === key ? !sortAscending : false;
    return dispatch(filtersActions.setSorting({ key, sortingAsc }));
  };

  const filteredSortedOrders = useSelector(filteredAndSortedOrders);
  const paginatdOrders = useSelector(paginatedOrders);
  const pSize = useSelector(pageSize);
  const lastPage = Math.ceil(filteredSortedOrders.length / pSize);

  useEffect(() => {
    dispatch(filtersActions.setCurrentPage(1));
  }, [lastPage, dispatch]);

  const selectedOrder = useSelector(selectedOrders);
  const handleChangeSelectOrder = (id) => () =>
    dispatch(ordersActions.selectOrder(id));

  useEffect(() => {
    dispatch(ordersActions.clearSelectedOrders());
  }, [curPage, paginatdOrders, dispatch]);

  return (
    <Table>
      <TableHeader>
        <div className={styles.wrapper}>
          <TableCell className={classNames(styles.cell, styles.cell_filtering)}>
            <ControlWithLabel
              control={<Checkbox />}
              className={styles.cellCheckbox}
            />
          </TableCell>
          <TableCell className={styles.cell}>
            <span className={styles.text}>#</span>
          </TableCell>
          <TableSortingCell
            isActive={selectedSortingCell === 'date'}
            direction={selectedSortingCell === 'date' && sortAscending}
            className={classNames(styles.cell, styles.cell_sorting)}
            label="Дата"
            onClick={handleClickSetSortingCell('date')}
          />
          <TableSortingCell
            isActive={selectedSortingCell === 'status'}
            direction={selectedSortingCell === 'status' && sortAscending}
            className={classNames(styles.cell, styles.cell_sorting)}
            label="Статус"
            onClick={handleClickSetSortingCell('status')}
          />
          <TableSortingCell
            isActive={selectedSortingCell === 'amount'}
            direction={selectedSortingCell === 'amount' && sortAscending}
            className={classNames(styles.cell, styles.cell_sorting)}
            label="Позиций"
            onClick={handleClickSetSortingCell('amount')}
          />
          <TableSortingCell
            isActive={selectedSortingCell === 'sum'}
            direction={selectedSortingCell === 'sum' && sortAscending}
            className={classNames(styles.cell, styles.cell_sorting)}
            label="Сумма"
            onClick={handleClickSetSortingCell('sum')}
          />
          <TableCell className={styles.cell}>
            <span className={styles.text}>ФИО покупателя</span>
          </TableCell>
        </div>
      </TableHeader>
      <TableBody>
        {paginatdOrders.map((order) => (
          <TableRow key={order.id} className={styles.row}>
            <TableCell
              className={classNames(styles.cell, styles.cell_filtering)}
            >
              <ControlWithLabel
                control={
                  <Checkbox
                    readOnly
                    value={order.id}
                    checked={selectedOrder.includes(order.id)}
                    onChange={handleChangeSelectOrder(order.id)}
                  />
                }
                className={styles.cellCheckbox}
              />
            </TableCell>
            <TableCell className={styles.cell}>{order.orderNumber}</TableCell>
            <TableCell className={styles.cell}>
              {prettifyDate(order.date)}
            </TableCell>
            <StatusTableCell status={order.status} className={styles.cell} />
            <TableCell className={styles.cell}>{order.amount}</TableCell>
            <TableCell className={styles.cell}>
              {prettifySum(order.sum)}
            </TableCell>
            <TableCell className={styles.cell}>{order.customer}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <div className={styles.buttons}>
          <span className={styles.bunch}>
            Выбрано записей: {selectedOrder.length}
          </span>
          <Button color="primary" size="small" iconType="Pencil">
            Изменить статус
          </Button>

          <div className={styles.dropdown}>
            <Dropdown
              trigger={
                <Button color="danger" size="small" iconType="Bin">
                  Удалить
                </Button>
              }
              overlay={
                <>
                  <span className="dropdown__name">Удалить n записей?</span>
                  <Button
                    color="reversePrimary"
                    size="small"
                    maxWidth
                    className={styles.overlayButton}
                  >
                    Удалить
                  </Button>
                  <Button
                    color="reversePrimary"
                    size="small"
                    maxWidth
                    className={styles.overlayButton}
                  >
                    Отмена
                  </Button>
                </>
              }
              className={styles.dropdown_delete}
            />
          </div>
        </div>
        <div className={styles.pages}>
          <Pagination
            currentPage={curPage}
            totalCount={filteredSortedOrders.length}
            pageSize={pSize}
            onPageChange={handleClickChangePage}
            onKeyPress={handleKeyPress}
          />
        </div>
      </TableFooter>
    </Table>
  );
}
