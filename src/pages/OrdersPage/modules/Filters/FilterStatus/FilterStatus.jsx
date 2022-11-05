import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dropdown,
  InputWithLabel,
  Input,
  Icon,
  ControlWithLabel,
  Checkbox,
} from '../../../../../shared/ui';
import { filtersActions } from '../../../../../store/filtersSlice';
import styles from './FilterStatus.module.css';

const STATUS_FILTERS = {
  new: 'Новый',
  calculation: 'Рассчет',
  confirmed: 'Подтвержден',
  postponed: 'Отложен',
  completed: 'Выполнен',
  declined: 'Отменен',
};

const ANY = 'Любой';

export function FilterStatus() {
  const dispatch = useDispatch();
  const statusValue = useSelector((state) => state.filter.statusValue);
  const handleChangeStatus = (e) =>
    dispatch(filtersActions.changeStatusValue(e.target.name));
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
                    name={key}
                    checked={statusValue.includes(key)}
                    onChange={handleChangeStatus}
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
