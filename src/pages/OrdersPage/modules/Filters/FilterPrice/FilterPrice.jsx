import React from 'react';
import { InputWithLabel, Input } from '../../../../../shared/ui';
import styles from './FilterPrice.module.css';

export function FilterPrice({
  filter: {
    valueFrom,
    onChangeFrom,
    onResetFrom,
    valueTo,
    onChangeTo,
    onResetTo,
  },
}) {
  return (
    <div className={styles._}>
      <InputWithLabel
        input={
          <Input
            placeholder="₽"
            value={valueFrom}
            onChange={onChangeFrom}
            prefix="от"
            label="Сумма заказа"
            onReset={onResetFrom}
            pattern="\d*"
          />
        }
        label="Сумма заказ"
      />
      <Input
        value={valueTo}
        onChange={onChangeTo}
        placeholder="₽"
        prefix="до"
        onReset={onResetTo}
        pattern="\d*"
      />
    </div>
  );
}
