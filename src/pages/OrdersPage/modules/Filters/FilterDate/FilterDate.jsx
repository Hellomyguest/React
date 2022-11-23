import React from 'react';
import { Input } from '../../../../../shared/ui';
import styles from './FilterDate.module.css';

export function FilterDate({
  dateFromValue,
  onChangeDateFromValue,
  onResetDateFromValue,
  isDateFromValid,
  dateToValue,
  onChangeDateToValue,
  onResetDateToValue,
  isDateToValid,
}) {
  return (
    <div className={styles._}>
      <label className={styles.label}>
        Дата оформления
        <Input
          invalid={isDateFromValid}
          value={dateFromValue}
          onChange={onChangeDateFromValue}
          placeholder="dd.mm.yyyy"
          prefix="с"
          onReset={onResetDateFromValue}
        />
      </label>
      <Input
        invalid={isDateToValid}
        value={dateToValue}
        onChange={onChangeDateToValue}
        placeholder="dd.mm.yyyy"
        prefix="по"
        onReset={onResetDateToValue}
        className={styles.input}
      />
    </div>
  );
}
