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

const STATUS_FILTERS = {
  new: 'Новый',
  calculation: 'Рассчет',
  confirmed: 'Подтвержден',
  postponed: 'Отложен',
  completed: 'Выполнен',
  declined: 'Отменен',
};

export function FilterStatus({ filter: { value, onChange } }) {
  const any = 'Любой';
  const inputValue =
    !value.length || value.length === 6
      ? any
      : value.map((e) => STATUS_FILTERS[e]).join(', ');

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
                    name={key}
                    checked={value.includes(key)}
                    onChange={onChange}
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
