import classNames from 'classnames';
import {
  ControlWithLabel,
  TableCell,
  Checkbox,
  Icon,
} from '../../../../../../shared/ui';
import styles from './TableRow.module.css';

const ORDER_MAP = {
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

export function TableRow({ value }) {
  const status = ORDER_MAP[value.status];
  console.log(styles);
  console.log(status.iconClassName);
  return (
    <div className={styles._}>
      <TableCell className={classNames(styles.cell, styles.cell_filtering)}>
        <ControlWithLabel
          control={<Checkbox />}
          className={styles.cellCheckbox}
        />
      </TableCell>
      <TableCell className={styles.cell}>
        <span className={styles.text}>{value.orderNumber}</span>
      </TableCell>
      <TableCell className={styles.cell}>
        <span className={styles.text}>{value.date}</span>
      </TableCell>
      <TableCell
        className={classNames(styles.cell, {
          [styles.cell_canseled]: status.declined,
        })}
      >
        <Icon
          iconType={status.iconType}
          className={classNames(styles.icon, status.iconClassName)}
        />
        <span className={classNames(styles.text, status.textClassName)}>
          {status.name}
        </span>
      </TableCell>
      <TableCell className={styles.cell}>
        <span className={styles.text}>{value.amount}</span>
      </TableCell>
      <TableCell className={styles.cell}>
        <span className={styles.text}>{value.sum}</span>
      </TableCell>
      <TableCell className={styles.cell}>
        <span className={styles.text}>{value.customer}</span>
      </TableCell>
    </div>
  );
}
