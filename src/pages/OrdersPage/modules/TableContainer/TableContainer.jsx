import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import xor from 'lodash.xor';
import classNames from 'classnames';
import {
  paginatedOrders,
  filteredAndSortedOrders,
  selectedOrdersIds,
  ordersActions,
  correctiveOrderId,
} from '../../../../store/slices/orders';
import styles from './TableContainer.module.css';
import {
  Button,
  Checkbox,
  ControlWithLabel,
  Dropdown,
  Radio,
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
  dateFrom,
  dateTo,
  statuses,
  search,
  priceFrom,
  priceTo,
} from '../../../../store/slices/filters';
import { Pagination } from '../Pagination/Pagination';
import { STATUS_FILTERS } from '../Filters/FilterStatus/FilterStatus';

export const prettifySum = (sum) => {
  const preSum = `${sum}`.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1 `);
  return `${preSum} ₽`;
};

export const prettifyDate = (date) => {
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

  const selectedOrders = useSelector(selectedOrdersIds);
  const paginatedOrdersIds = paginatdOrders.reduce((arr, { id }) => {
    arr.push(id);
    return arr;
  }, []);

  const handleSelectOrder = (id) => () =>
    dispatch(ordersActions.selectOrder(id));

  const handleSelectAllPaginatedOrders = (arr) => () => {
    const unselectedOrders = xor(selectedOrders, arr);
    return unselectedOrders.length === 0
      ? dispatch(ordersActions.selectOrder(arr))
      : dispatch(ordersActions.selectOrder(unselectedOrders));
  };

  const searchValue = useSelector(search);
  const dateFromValue = useSelector(dateFrom);
  const dateToValue = useSelector(dateTo);
  const statusesValue = useSelector(statuses);
  const priceFromValue = useSelector(priceFrom);
  const priceToValue = useSelector(priceTo);
  const correctedOrderId = useSelector(correctiveOrderId);

  useEffect(() => {
    dispatch(ordersActions.clearSelectedOrders());
  }, [
    curPage,
    searchValue,
    dateFromValue,
    dateToValue,
    statusesValue,
    priceFromValue,
    priceToValue,
    selectedSortingCell,
    sortAscending,
    correctedOrderId,
    dispatch,
  ]);

  const [isDeleteDropdownOpen, setDeleteDropdownOpen] = useState(false);
  const handleClickOpen = () => setDeleteDropdownOpen(!isDeleteDropdownOpen);
  const handleClickClose = () => setDeleteDropdownOpen(false);

  const handleClickDeleteSelectedOrders = () => {
    dispatch(ordersActions.deleteOrders(selectedOrders));
    handleClickClose();
  };

  const handleChangeSelectedOrdersStatus = (e) => {
    const status = e.target.value;
    return dispatch(
      ordersActions.changeOrdersStatus({ status, selectedOrders })
    );
  };

  const handleClickSelectOrderToCorrect = (id) => () =>
    dispatch(ordersActions.setCorrectiveOrderId(id));

  const selectedOrdersStatus = paginatdOrders.reduce((acc, { id, status }) => {
    if (selectedOrders.includes(id)) {
      if (acc === status) {
        return status;
      }
      return acc + status;
    }
    return acc;
  }, '');

  return (
    <Table>
      <TableHeader>
        <div className={styles.wrapper}>
          <TableCell className={classNames(styles.cell, styles.cell_filtering)}>
            <ControlWithLabel
              control={
                <Checkbox
                  readOnly
                  checked={xor(paginatedOrdersIds, selectedOrders).length === 0}
                  onChange={handleSelectAllPaginatedOrders(paginatedOrdersIds)}
                />
              }
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
            onClick={handleClickSetSortingCell('date')}
          >
            Дата
          </TableSortingCell>
          <TableSortingCell
            isActive={selectedSortingCell === 'status'}
            direction={selectedSortingCell === 'status' && sortAscending}
            className={classNames(styles.cell, styles.cell_sorting)}
            onClick={handleClickSetSortingCell('status')}
          >
            Статус
          </TableSortingCell>
          <TableSortingCell
            isActive={selectedSortingCell === 'amount'}
            direction={selectedSortingCell === 'amount' && sortAscending}
            className={classNames(styles.cell, styles.cell_sorting)}
            onClick={handleClickSetSortingCell('amount')}
          >
            Позиций
          </TableSortingCell>
          <TableSortingCell
            isActive={selectedSortingCell === 'sum'}
            direction={selectedSortingCell === 'sum' && sortAscending}
            className={classNames(styles.cell, styles.cell_sorting)}
            onClick={handleClickSetSortingCell('sum')}
          >
            Сумма
          </TableSortingCell>
          <TableCell className={styles.cell}>
            <span className={styles.text}>ФИО покупателя</span>
          </TableCell>
        </div>
      </TableHeader>
      <TableBody>
        {paginatdOrders.map((order) => (
          <TableRow
            key={order.id}
            className={styles.row}
            onClick={handleClickSelectOrderToCorrect(order.id)}
          >
            <TableCell
              className={classNames(styles.cell, styles.cell_filtering)}
            >
              <ControlWithLabel
                control={
                  <Checkbox
                    checked={selectedOrders.includes(order.id)}
                    onChange={handleSelectOrder([order.id])}
                    onClick={(e) => e.stopPropagation()}
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
            Выбрано записей: {selectedOrders.length}
          </span>
          <div className={styles.dropdown}>
            <Dropdown
              trigger={
                <Button color="primary" size="small" iconType="Pencil">
                  Изменить статус
                </Button>
              }
              overlay={
                <>
                  {Object.keys(STATUS_FILTERS).map((key) => (
                    <ControlWithLabel
                      key={key}
                      control={
                        <Radio
                          value={key}
                          checked={selectedOrdersStatus === key}
                          className={styles.radio}
                          onChange={handleChangeSelectedOrdersStatus}
                        />
                      }
                      label={STATUS_FILTERS[key]}
                    />
                  ))}
                </>
              }
              className={styles.overlay_changeStatus}
            />
          </div>

          <div className={styles.dropdown}>
            <Dropdown
              isOpen={isDeleteDropdownOpen}
              setOpen={handleClickOpen}
              setClose={handleClickClose}
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
                    onClick={handleClickDeleteSelectedOrders}
                  >
                    Удалить
                  </Button>
                  <Button
                    color="reversePrimary"
                    size="small"
                    maxWidth
                    onClick={handleClickClose}
                    className={styles.overlayButton}
                  >
                    Отмена
                  </Button>
                </>
              }
              className={styles.overlay_delete}
            />
          </div>
        </div>
        <Pagination
          currentPage={curPage}
          totalCount={filteredSortedOrders.length}
          pageSize={pSize}
          onPageChange={handleClickChangePage}
          onKeyPress={handleKeyPress}
        />
      </TableFooter>
    </Table>
  );
}
