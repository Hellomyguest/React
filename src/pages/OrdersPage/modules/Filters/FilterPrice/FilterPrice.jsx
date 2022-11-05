import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputWithLabel, Input } from '../../../../../shared/ui';
import { filtersActions } from '../../../../../store/filtersSlice';
import styles from './FilterPrice.module.css';

export function FilterPrice() {
  const dispatch = useDispatch();
  const priceFromValue = useSelector((state) => state.filter.priceFromValue);
  const priceToValue = useSelector((state) => state.filter.priceToValue);
  const handleChangePriceFrom = (e) => {
    dispatch(filtersActions.changePriceFromValue(e.target.value));
  };
  const handleResetPriceFrom = () => {
    dispatch(filtersActions.resetPriceFromValue());
  };
  const handleChangePriceTo = (e) => {
    dispatch(filtersActions.changePriceToValue(e.target.value));
  };
  const handleResetPriceTo = () => {
    dispatch(filtersActions.resetPriceToValue());
  };

  return (
    <div className={styles._}>
      <InputWithLabel
        input={
          <Input
            placeholder="₽"
            value={priceFromValue}
            onChange={handleChangePriceFrom}
            prefix="от"
            label="Сумма заказа"
            onReset={handleResetPriceFrom}
            pattern="\d*"
          />
        }
        label="Сумма заказ"
      />
      <Input
        value={priceToValue}
        onChange={handleChangePriceTo}
        placeholder="₽"
        prefix="до"
        onReset={handleResetPriceTo}
        pattern="\d*"
      />
    </div>
  );
}
