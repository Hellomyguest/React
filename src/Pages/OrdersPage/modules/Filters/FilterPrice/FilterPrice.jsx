import { InputWithLabel, Input } from '../../../../../shared/ui';
import styles from './FilterPrice.module.css';

export function FilterPrice({ filter }) {
  return (
    <div className={styles._}>
      <InputWithLabel
        input={
          <Input
            placeholder="₽"
            value={filter.valueFrom}
            onChange={filter.onChangeFrom}
            prefix="от"
            label="Сумма заказа"
            onReset={filter.onResetFrom}
            pattern="\d*"
          />
        }
        label="Сумма заказ"
      />
      <Input
        value={filter.valueTo}
        onChange={filter.onChangeTo}
        placeholder="₽"
        prefix="до"
        onReset={filter.onResetTo}
        pattern="\d*"
      />
    </div>
  );
}
