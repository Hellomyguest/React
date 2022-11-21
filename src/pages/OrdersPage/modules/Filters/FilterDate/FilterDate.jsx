import React from 'react';
import { Input } from '../../../../../shared/ui';
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
      <label className={styles.label}>
        Дата оформления
        <Input
          value={dateFromValue}
          onChange={onChangeDateFromValue}
          placeholder="dd.mm.yyyy"
          prefix="с"
          onReset={onResetDateFromValue}
        />
      </label>
      <Input
        value={dateToValue}
        onChange={onChangeDateToValue}
        placeholder="dd.mm.yyyy"
        prefix="по"
        onReset={onResetDateToValue}
      />
    </div>
  );
}
