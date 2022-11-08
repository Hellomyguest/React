import React from 'react';
import { InputWithLabel, Input } from '../../../../../shared/ui';
import styles from './FilterPrice.module.css';

export function FilterPrice({
  priceFromValue,
  onChangePriceFromValue,
  onResetPriceFromValue,
  priceToValue,
  onChangePriceToValue,
  onResetPriceToValue,
}) {
  return (
    <div className={styles._}>
      <InputWithLabel
        input={
          <Input
            placeholder="₽"
            value={priceFromValue}
            onChange={onChangePriceFromValue}
            prefix="от"
            label="Сумма заказа"
            onReset={onResetPriceFromValue}
            pattern="\d*"
          />
        }
        label="Сумма заказ"
      />
      <Input
        value={priceToValue}
        onChange={onChangePriceToValue}
        placeholder="₽"
        prefix="до"
        onReset={onResetPriceToValue}
        pattern="\d*"
      />
    </div>
  );
}
