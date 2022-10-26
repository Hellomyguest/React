import { useContext } from 'react';
import { InputWithLabel, Input } from '../../../../../shared/ui';
import { FilterContext } from '../../../../../store/filterContext';
import styles from './FilterPrice.module.css';

export function FilterPrice() {
  const { price } = useContext(FilterContext);
  return (
    <div className={styles._}>
      <InputWithLabel
        input={
          <Input
            placeholder="₽"
            value={price.valueFrom}
            onChange={price.onChangeFrom}
            prefix="от"
            label="Сумма заказа"
            withReset
            pattern="\d*"
          />
        }
        label="Сумма заказ"
      />
      <Input
        value={price.valueTo}
        onChange={price.onChangeTo}
        placeholder="₽"
        prefix="до"
        withReset
        pattern="\d*"
      />
    </div>
  );
}
