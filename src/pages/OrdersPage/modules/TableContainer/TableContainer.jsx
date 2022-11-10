import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { fetchOrders } from '../../../../store/ordersSlice';
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
import { filteredOrders } from '../../../../store/selectors/getFilteredOrders';
import { filtersActions } from '../../../../store/filtersSlice';

export function TableContainer() {
  // Смена активной сортировки и направления сортировки

  const orders = useSelector(filteredOrders);
  // Сортировка данных

  const dispatch = useDispatch();

  // Смена сортировки
  const selectedSortingCell = useSelector(
    (state) => state.filter.activeSortingCell
  );
  const sortingDirection = useSelector(
    (state) => state.filter.sortingCellsDirectionUp
  );
  const handleClickSortingCell = ({ target: { textContent } }) =>
    dispatch(filtersActions.sort(textContent));

  // Эмуляция загрузки
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

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
        {orders.map((order) => (
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
          <div className={styles.footer__pagination}>
            <Button size="small" color="primary">
              1
            </Button>
            <Button size="small" color="reversePrimary">
              2
            </Button>
            <Button size="small" color="reversePrimary">
              3
            </Button>
            <Button size="small" color="reversePrimary">
              ...
            </Button>
            <Button size="small" color="reversePrimary">
              18
            </Button>
          </div>
          <Button size="small" color="reversePrimary">
            #
          </Button>
        </div>
      </TableFooter>
    </Table>
  );
}
