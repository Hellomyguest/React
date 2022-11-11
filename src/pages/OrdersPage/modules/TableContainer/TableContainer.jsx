import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  fetchOrders,
  currentTableData,
  filteredOrders,
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
  pageSize,
  sortingCellsDirectionUp,
} from '../../../../store/slices/filters';
import { Pagination } from '../Pagination/Pagination';

export function TableContainer() {
  const pSize = useSelector(pageSize);
  const curPage = useSelector(currentPage);

  const dispatch = useDispatch();
  // Смена страницы
  const handleClickPage = (page) =>
    dispatch(filtersActions.setCurrentPage(page));
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(filtersActions.setCurrentPage(+e.target.value));
    }
  };

  // Смена сортировки
  const selectedSortingCell = useSelector(activeSortingCell);
  const sortingDirection = useSelector(sortingCellsDirectionUp);
  const handleClickSortingCell = ({ target: { textContent } }) =>
    dispatch(filtersActions.sortOrders(textContent));

  // Эмуляция загрузки
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  // Данные заказов

  const orders = useSelector(filteredOrders);
  const tableData = useSelector(currentTableData);

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
            isActive={selectedSortingCell === 'Дата'}
            direction={sortingDirection.includes('Дата')}
            className={classNames(styles.cell, styles.cell_sorting)}
            label="Дата"
            onClick={handleClickSortingCell}
          />
          <TableSortingCell
            isActive={selectedSortingCell === 'Статус'}
            direction={sortingDirection.includes('Статус')}
            className={classNames(styles.cell, styles.cell_sorting)}
            label="Статус"
            onClick={handleClickSortingCell}
          />
          <TableSortingCell
            isActive={selectedSortingCell === 'Позиций'}
            direction={sortingDirection.includes('Позиций')}
            className={classNames(styles.cell, styles.cell_sorting)}
            label="Позиций"
            onClick={handleClickSortingCell}
          />
          <TableSortingCell
            isActive={selectedSortingCell === 'Сумма'}
            direction={sortingDirection.includes('Сумма')}
            className={classNames(styles.cell, styles.cell_sorting)}
            label="Сумма"
            onClick={handleClickSortingCell}
          />
          <TableCell className={styles.cell}>
            <span className={styles.text}>ФИО покупателя</span>
          </TableCell>
        </div>
      </TableHeader>
      <TableBody>
        {tableData.map((order) => (
          <TableRow key={order.id} className={styles.row}>
            <TableCell
              className={classNames(styles.cell, styles.cell_filtering)}
            >
              <ControlWithLabel
                control={<Checkbox />}
                className={styles.cellCheckbox}
              />
            </TableCell>
            <TableCell className={styles.cell}>{order.orderNumber}</TableCell>
            <TableCell className={styles.cell}>{order.date}</TableCell>
            <StatusTableCell status={order.status} className={styles.cell} />
            <TableCell className={styles.cell}>{order.amount}</TableCell>
            <TableCell className={styles.cell}>{order.sum}</TableCell>
            <TableCell className={styles.cell}>{order.customer}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <div className={styles.buttons}>
          <span className={styles.bunch}>Выбрано записей: 5</span>
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
            totalCount={orders.length}
            pageSize={pSize}
            onPageChange={handleClickPage}
            onKeyPress={handleKeyPress}
          />
        </div>
      </TableFooter>
    </Table>
  );
}
