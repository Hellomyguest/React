import React from 'react';
import { Input, InputWithLabel } from '../../../../../shared/ui';
import styles from './FilterDate.module.css';

export function FilterDate({
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
        label="Дата оформления"
        input={
          <Input
            value={valueFrom}
            onChange={onChangeFrom}
            placeholder="dd.mm.yyyy"
            prefix="с"
            pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
            onReset={onResetFrom}
          />
        }
      />
      <Input
        value={valueTo}
        onChange={onChangeTo}
        placeholder="dd.mm.yyyy"
        prefix="по"
        pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
        onReset={onResetTo}
      />
    </div>
  );
}
