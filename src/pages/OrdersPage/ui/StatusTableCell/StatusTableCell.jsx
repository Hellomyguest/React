import React from 'react';
import classNames from 'classnames';
import { Icon, TableCell } from '../../../../shared/ui';
import styles from './StatusTableCell.module.css';

const STATUS_MAP = {
  new: 'new',
  calculation: 'calculation',
  confirmed: 'confirmed',
  postponed: 'postponed',
  completed: 'completed',
  declined: 'declined',
};

const STATUS_ICON = {
  completed: 'Checkmark',
  declined: 'Abort',
  else: 'Dot',
};

const STATUS_ICON_STYLE = {
  new: styles.icon_postponed,
  calculation: styles.icon_calculation,
  confirmed: styles.icon_completed,
  postponed: styles.icon_postponed,
  completed: styles.icon_completed,
  declined: styles.icon_canceled,
};

const STATUS_TRANSLATIONS = {
  new: 'Новый',
  calculation: 'Рассчет',
  confirmed: 'Подтвержден',
  postponed: 'Отложен',
  completed: 'Выполнен',
  declined: 'Отменен',
};

export function StatusTableCell({ status, className }) {
  return (
    <TableCell
      className={classNames(
        styles._,
        { [styles.canseled]: status === STATUS_MAP.declined },
        className
      )}
    >
      <Icon
        iconType={STATUS_ICON[status] || STATUS_ICON.else}
        className={classNames(styles.icon, STATUS_ICON_STYLE[status])}
      />
      <span
        className={classNames(styles.text, {
          [styles.text_completed]: status === STATUS_MAP.completed,
        })}
      >
        {STATUS_TRANSLATIONS[status]}
      </span>
    </TableCell>
  );
}
