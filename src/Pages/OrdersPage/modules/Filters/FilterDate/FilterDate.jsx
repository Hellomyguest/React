import { useContext } from 'react';
import { Input, InputWithLabel } from '../../../../../shared/ui';
import { FilterContext } from '../../../../../store/filterContext';
import styles from './FilterDate.module.css';

export function FilterDate() {
  const { date } = useContext(FilterContext);
  return (
    <div className={styles._}>
      <InputWithLabel
        label="Дата оформления"
        input={
          <Input
            value={date.valueFrom}
            onChange={date.onChangeFrom}
            placeholder="dd.mm.yyyy"
            prefix="с"
            pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
            withReset
          />
        }
      />
      <Input
        value={date.valueTo}
        onChange={date.onChangeTo}
        placeholder="dd.mm.yyyy"
        prefix="по"
        pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
        withReset
      />
    </div>
  );
}
