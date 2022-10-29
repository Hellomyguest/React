import { useContext } from 'react';
import { FilterContext } from '../../../../store/FilterContext';
import { Table } from './Table';
import styles from './TableBody/TableBody.module.css';

const STATUS_MAP = {
  new: {
    name: 'Новый',
    iconType: 'Dot',
    iconClassName: styles.icon_postponed,
  },
  calculation: {
    name: 'Рассчет',
    iconType: 'Dot',
    iconClassName: styles.icon_calculation,
  },
  confirmed: {
    name: 'Подтвержден',
    iconType: 'Dot',
    iconClassName: styles.icon_completed,
  },
  postponed: {
    name: 'Отложен',
    iconType: 'Dot',
    iconClassName: styles.icon_postponed,
  },
  completed: {
    name: 'Выполнен',
    iconType: 'Checkmark',
    iconClassName: styles.icon_completed,
    textClassName: styles.text_completed,
  },
  declined: {
    name: 'Отменен',
    iconType: 'Abort',
    iconClassName: styles.icon_canceled,
    declined: true,
  },
};

export function TableContainer() {
  const { orders } = useContext(FilterContext);

  const ordersExtended = orders.map((item) => {
    // eslint-disable-next-line no-param-reassign
    item.statusExtended = {
      name: STATUS_MAP[item.status].name,
      iconType: STATUS_MAP[item.status].iconType,
      iconClassName: STATUS_MAP[item.status].iconClassName,
      declined: STATUS_MAP[item.status].declined,
      textClassName: STATUS_MAP[item.status].textClassName,
    };
    return item;
  });

  return <Table orders={ordersExtended} />;
}
