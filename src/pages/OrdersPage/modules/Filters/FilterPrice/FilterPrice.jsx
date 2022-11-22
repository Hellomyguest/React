import React from 'react';
import { Input } from '../../../../../shared/ui';
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
      <label className={styles.label}>
        Сумма заказа
        <Input
          type="number"
          placeholder="₽"
          value={priceFromValue}
          onChange={onChangePriceFromValue}
          prefix="от"
          label="Сумма заказа"
          onReset={onResetPriceFromValue}
        />
      </label>
      <Input
        type="number"
        value={priceToValue}
        onChange={onChangePriceToValue}
        placeholder="₽"
        prefix="до"
        onReset={onResetPriceToValue}
      />
    </div>
  );
}
