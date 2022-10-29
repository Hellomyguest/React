import { Input, InputWithLabel } from '../../../../../shared/ui';
import styles from './FilterDate.module.css';

export function FilterDate({ filter }) {
  return (
    <div className={styles._}>
      <InputWithLabel
        label="Дата оформления"
        input={
          <Input
            value={filter.valueFrom}
            onChange={filter.onChangeFrom}
            placeholder="dd.mm.yyyy"
            prefix="с"
            pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
            onReset={filter.onResetFrom}
          />
        }
      />
      <Input
        value={filter.valueTo}
        onChange={filter.onChangeTo}
        placeholder="dd.mm.yyyy"
        prefix="по"
        pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
        onReset={filter.onResetTo}
      />
    </div>
  );
}
