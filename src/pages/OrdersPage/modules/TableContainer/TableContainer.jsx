import React, { useEffect, useState } from 'react';
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

export function TableContainer() {
  // Смена активной сортировки и направления сортировки
  const [sortingCellStatus, setSortingCellStatus] = useState({
    active: 'Дата',
    directionUp: [],
  });
  const handleClickSortingCell = ({ target: { textContent } }) => {
    if (sortingCellStatus.active === textContent) {
      setSortingCellStatus({
        ...sortingCellStatus,
        directionUp: sortingCellStatus.directionUp.includes(textContent)
          ? sortingCellStatus.directionUp.filter((item) => item !== textContent)
          : [sortingCellStatus.directionUp, textContent],
      });
    } else setSortingCellStatus({ ...sortingCellStatus, active: textContent });
  };

  const orders = useSelector(filteredOrders);
  // Сортировка данных
  switch (sortingCellStatus.active) {
    case 'Дата':
      {
        const dateSort = (a, b) => {
          const [d, m, y] = a.date.slice(0, 10).split('.');
          const [db, mb, yb] = b.date.slice(0, 10).split('.');
          const date = Date.parse(`${y}-${m}-${d}`);
          const dateb = Date.parse(`${yb}-${mb}-${db}`);
          return date - dateb;
        };
        orders.sort(dateSort);
        if (sortingCellStatus.directionUp.includes('Дата')) orders.reverse();
      }
      break;
    case 'Статус':
      orders.sort((a, b) => (a.status > b.status ? -1 : 1));
      if (sortingCellStatus.directionUp.includes('Статус')) {
        orders.reverse();
      }

      break;
    case 'Позиций':
      orders.sort((a, b) => +a.amount - +b.amount);
      if (sortingCellStatus.directionUp.includes('Позиций')) {
        orders.reverse();
      }
      break;
    case 'Сумма':
      orders.sort(
        (a, b) =>
          parseInt(String(a.sum).replace(/\s+/g, ''), 10) -
          parseInt(String(b.sum).replace(/\s+/g, ''), 10)
      );
      if (sortingCellStatus.directionUp.includes('Сумма')) {
        orders.reverse();
      }
      break;
    default:
  }

  // Эмуляция загрузки
  const dispatch = useDispatch();
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
            isActive={sortingCellStatus.active === 'Дата'}
            direction={sortingCellStatus.directionUp.includes('Дата')}
            className={classNames(styles.cell, styles.cell_sorting)}
            label="Дата"
            onClick={handleClickSortingCell}
          />
          <TableSortingCell
            isActive={sortingCellStatus.active === 'Статус'}
            direction={sortingCellStatus.directionUp.includes('Статус')}
            className={classNames(styles.cell, styles.cell_sorting)}
            label="Статус"
            onClick={handleClickSortingCell}
          />
          <TableSortingCell
            isActive={sortingCellStatus.active === 'Позиций'}
            direction={sortingCellStatus.directionUp.includes('Позиций')}
            className={classNames(styles.cell, styles.cell_sorting)}
            label="Позиций"
            onClick={handleClickSortingCell}
          />
          <TableSortingCell
            isActive={sortingCellStatus.active === 'Сумма'}
            direction={sortingCellStatus.directionUp.includes('Сумма')}
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
