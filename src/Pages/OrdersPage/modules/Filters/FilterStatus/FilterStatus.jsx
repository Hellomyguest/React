import { useContext } from 'react';
import {
  Dropdown,
  InputWithLabel,
  Input,
  Icon,
  ControlWithLabel,
  Checkbox,
} from '../../../../../shared/ui';
import { FilterContext } from '../../../../../store/filterContext';
import styles from './FilterStatus.module.css';

const STATUS_FILTERS = {
  new: 'Новый',
  calculation: 'Рассчет',
  postponed: 'Отложен',
  completed: 'Выполнен',
  declined: 'Отменен',
};

export function FilterStatus() {
  const { status } = useContext(FilterContext);

  const inputValue =
    !status.value.length || status.value.length === 5
      ? 'Любой'
      : status.value.map((e) => STATUS_FILTERS[e]).join(', ');

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
                    checked={status.value.includes(key)}
                    onChange={status.onChange}
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
