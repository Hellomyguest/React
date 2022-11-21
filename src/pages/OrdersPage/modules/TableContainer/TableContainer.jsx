import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import xor from 'lodash.xor';
import classNames from 'classnames';
import {
  paginatedOrdersSelector,
  filteredAndSortedOrdersSelector,
  selectedOrdersIdsSelector,
  ordersActions,
  correctiveOrderIdSelector,
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
  activeSortingCellSelector,
  currentPageSelector,
  filtersActions,
  isSortingAscendingSelector,
  pageSizeSelector,
  dateFromSelector,
  dateToSelector,
  statusesSelector,
  searchSelector,
  priceFromSelector,
  priceToSelector,
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
  const currentPage = useSelector(currentPageSelector);

  const dispatch = useDispatch();

  const handleClickChangePage = (page) =>
    dispatch(filtersActions.setCurrentPage(page));
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(filtersActions.setCurrentPage(+e.target.value));
    }
  };

  const activeSortingCell = useSelector(activeSortingCellSelector);
  const isSortingAscending = useSelector(isSortingAscendingSelector);
  const handleClickSetSortingCell = (key) => () => {
    const sortingAsc = activeSortingCell === key ? !isSortingAscending : false;
    return dispatch(filtersActions.setSorting({ key, sortingAsc }));
  };

  const filteredAndSortedOrders = useSelector(filteredAndSortedOrdersSelector);
  const paginatedOrders = useSelector(paginatedOrdersSelector);
  const pageSize = useSelector(pageSizeSelector);
  const lastPage = Math.ceil(filteredAndSortedOrders.length / pageSize);

  useEffect(() => {
    dispatch(filtersActions.setCurrentPage(1));
  }, [lastPage, dispatch]);

  const selectedOrdersIds = useSelector(selectedOrdersIdsSelector);
  const paginatedOrdersIds = paginatedOrders.reduce((arr, { id }) => {
    arr.push(id);
    return arr;
  }, []);

  const handleSelectOrder = (id) => () =>
    dispatch(ordersActions.selectOrder(id));

  const handleSelectAllPaginatedOrders = (arr) => () => {
    const unselectedOrders = xor(selectedOrdersIds, arr);
    return unselectedOrders.length === 0
      ? dispatch(ordersActions.selectOrder(arr))
      : dispatch(ordersActions.selectOrder(unselectedOrders));
  };

  const search = useSelector(searchSelector);
  const dateFrom = useSelector(dateFromSelector);
  const dateTo = useSelector(dateToSelector);
  const statuses = useSelector(statusesSelector);
  const priceFrom = useSelector(priceFromSelector);
  const priceTo = useSelector(priceToSelector);
  const correctiveOrderId = useSelector(correctiveOrderIdSelector);

  useEffect(() => {
    dispatch(ordersActions.clearSelectedOrders());
  }, [
    currentPage,
    search,
    dateFrom,
    dateTo,
    statuses,
    priceFrom,
    priceTo,
    activeSortingCell,
    isSortingAscending,
    correctiveOrderId,
    dispatch,
  ]);

  const handleClickDeleteSelectedOrders = () => {
    dispatch(ordersActions.deleteOrders(selectedOrdersIds));
  };

  const handleChangeSelectedOrdersStatus = (status) => () => {
    dispatch(ordersActions.changeOrdersStatus({ status, selectedOrdersIds }));
    dispatch(ordersActions.clearSelectedOrders());
  };

  const handleClickSelectOrderToCorrect = (id) => () =>
    dispatch(ordersActions.setCorrectiveOrderId(id));

  const selectedOrdersStatus = paginatedOrders.reduce((acc, { id, status }) => {
    if (selectedOrdersIds.includes(id)) {
      if (acc === status) {
        return status;
      }
      return acc + status;
    }
    return acc;
  }, '');

  const getDeleteOrdersTitle = () => {
    if (selectedOrdersIds.length === 1) {
      return `Удалить ${selectedOrdersIds.length} запись?`;
    }
    if (selectedOrdersIds.length < 5) {
      return `Удалить ${selectedOrdersIds.length} записи?`;
    }
    return `Удалить ${selectedOrdersIds.length} записей?`;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const deleteOrdersTitle = useMemo(getDeleteOrdersTitle, [selectedOrdersIds]);

  return (
    <Table>
      <TableHeader>
        <div className={styles.wrapper}>
          <TableCell className={classNames(styles.cell, styles.cell_filtering)}>
            <ControlWithLabel
              control={
                <Checkbox
                  readOnly
                  checked={
                    xor(paginatedOrdersIds, selectedOrdersIds).length === 0
                  }
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
            isActive={activeSortingCell === 'date'}
            direction={activeSortingCell === 'date' && isSortingAscending}
            className={classNames(styles.cell, styles.cell_sorting)}
            onClick={handleClickSetSortingCell('date')}
          >
            Дата
          </TableSortingCell>
          <TableSortingCell
            isActive={activeSortingCell === 'status'}
            direction={activeSortingCell === 'status' && isSortingAscending}
            className={classNames(styles.cell, styles.cell_sorting)}
            onClick={handleClickSetSortingCell('status')}
          >
            Статус
          </TableSortingCell>
          <TableSortingCell
            isActive={activeSortingCell === 'amount'}
            direction={activeSortingCell === 'amount' && isSortingAscending}
            className={classNames(styles.cell, styles.cell_sorting)}
            onClick={handleClickSetSortingCell('amount')}
          >
            Позиций
          </TableSortingCell>
          <TableSortingCell
            isActive={activeSortingCell === 'sum'}
            direction={activeSortingCell === 'sum' && isSortingAscending}
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
        {paginatedOrders.map((order) => (
          <TableRow
            key={order.id}
            className={styles.row}
            onClick={
              selectedOrdersIds.length === 0
                ? handleClickSelectOrderToCorrect(order.id)
                : () => {}
            }
          >
            <TableCell
              className={classNames(styles.cell, styles.cell_filtering)}
            >
              <ControlWithLabel
                onClick={(e) => e.stopPropagation()}
                control={
                  <Checkbox
                    checked={selectedOrdersIds.includes(order.id)}
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
        <div>
          {selectedOrdersIds.length !== 0 && (
            <div className={styles.buttons}>
              <span className={styles.bunch}>
                Выбрано записей: {selectedOrdersIds.length}
              </span>
              <div className={styles.dropdown}>
                <Dropdown
                  shouldCloseOnClick
                  trigger={
                    <Button color="primary" size="small" iconType="Pencil">
                      Изменить статус
                    </Button>
                  }
                  overlay={
                    <>
                      {Object.keys(STATUS_FILTERS).map((key) => (
                        <Button
                          size="medium"
                          key={key}
                          color={
                            selectedOrdersStatus === key ? 'reversePrimary' : ''
                          }
                          onClick={handleChangeSelectedOrdersStatus(key)}
                          maxWidth
                          className={styles.changeStatus_button}
                        >
                          {STATUS_FILTERS[key]}
                        </Button>
                      ))}
                    </>
                  }
                  className={styles.overlay_changeStatus}
                />
              </div>

              <div className={styles.dropdown}>
                <Dropdown
                  shouldCloseOnClick
                  trigger={
                    <Button color="danger" size="small" iconType="Bin">
                      Удалить
                    </Button>
                  }
                  overlay={
                    <>
                      <span className="dropdown__name">
                        {deleteOrdersTitle}
                      </span>
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
          )}
        </div>
        <Pagination
          className={styles.pagination}
          currentPage={currentPage}
          totalCount={filteredAndSortedOrders.length}
          pageSize={pageSize}
          onPageChange={handleClickChangePage}
          onKeyPress={handleKeyPress}
        />
      </TableFooter>
    </Table>
  );
}
