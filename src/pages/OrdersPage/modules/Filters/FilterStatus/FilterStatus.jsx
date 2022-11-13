import React from 'react';
import {
  Dropdown,
  InputWithLabel,
  Input,
  Icon,
  ControlWithLabel,
  Checkbox,
} from '../../../../../shared/ui';
import styles from './FilterStatus.module.css';

export const STATUS_FILTERS = {
  new: 'Новый',
  calculation: 'Рассчет',
  confirmed: 'Подтвержден',
  postponed: 'Отложен',
  completed: 'Выполнен',
  declined: 'Отменен',
};

const ANY = 'Любой';

export function FilterStatus({ statusValue, onChangeStatusValue }) {
  const inputValue =
    !statusValue.length || statusValue.length === 6
      ? ANY
      : statusValue.map((e) => STATUS_FILTERS[e]).join(', ');

  return (
    <div className={styles._}>
      <Dropdown
        trigger={
          <div>
            <InputWithLabel
              input={
                <Input
                  readOnly
                  value={inputValue}
                  label="Статус заказа"
                  postfix={<Icon iconType="Varrow" className={styles.icon} />}
                />
              }
              label="Статус заказа"
            />
          </div>
        }
        overlay={
          <>
            {Object.keys(STATUS_FILTERS).map((key) => (
              <ControlWithLabel
                key={key}
                control={
                  <Checkbox
                    value={key}
                    checked={statusValue.includes(key)}
                    onChange={onChangeStatusValue}
                  />
                }
                label={STATUS_FILTERS[key]}
              />
            ))}
          </>
        }
        className={styles.overlay}
      />
    </div>
  );
}
