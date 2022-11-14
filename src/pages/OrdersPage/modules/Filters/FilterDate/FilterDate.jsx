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
          pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
          onReset={onResetDateFromValue}
        />
      </label>
      <Input
        value={dateToValue}
        onChange={onChangeDateToValue}
        placeholder="dd.mm.yyyy"
        prefix="по"
        pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
        onReset={onResetDateToValue}
      />
    </div>
  );
}
