import React from 'react';
import { Input, InputWithLabel } from '../../../../../shared/ui';
import styles from './FilterDate.module.css';

export function FilterDate({
  dateFromValue,
  onChangeDateFromValue,
  onResetDateFromValue,
  dateToValue,
  onChangeDateToValue,
  onResetDateToValue,
}) {
  return (
    <div className={styles._}>
      <InputWithLabel
        label="Дата оформления"
        input={
          <Input
            value={dateFromValue}
            onChange={onChangeDateFromValue}
            placeholder="dd.mm.yyyy"
            prefix="с"
            pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
            onReset={onResetDateFromValue}
          />
        }
      />
      <InputWithLabel
        input={
          <Input
            value={dateToValue}
            onChange={onChangeDateToValue}
            placeholder="dd.mm.yyyy"
            prefix="по"
            pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
            onReset={onResetDateToValue}
          />
        }
      />
    </div>
  );
}
