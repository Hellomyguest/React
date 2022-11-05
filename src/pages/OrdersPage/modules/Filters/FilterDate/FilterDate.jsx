import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, InputWithLabel } from '../../../../../shared/ui';
import { filtersActions } from '../../../../../store/filtersSlice';
import styles from './FilterDate.module.css';

export function FilterDate() {
  const dispatch = useDispatch();
  const dateFromValue = useSelector((state) => state.filter.dateFromValue);
  const dateToValue = useSelector((state) => state.filter.dateToValue);
  const handleChangeDateFrom = (e) => {
    dispatch(filtersActions.changeDateFromValue(e.target.value));
  };
  const handleResetDateFrom = () => {
    dispatch(filtersActions.resetDateFromValue());
  };
  const handleChangeDateTo = (e) => {
    dispatch(filtersActions.changeDateToValue(e.target.value));
  };
  const handleResetDateTo = () => {
    dispatch(filtersActions.resetDateToValue());
  };

  return (
    <div className={styles._}>
      <InputWithLabel
        label="Дата оформления"
        input={
          <Input
            value={dateFromValue}
            onChange={handleChangeDateFrom}
            placeholder="dd.mm.yyyy"
            prefix="с"
            pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
            onReset={handleResetDateFrom}
          />
        }
      />
      <Input
        value={dateToValue}
        onChange={handleChangeDateTo}
        placeholder="dd.mm.yyyy"
        prefix="по"
        pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
        onReset={handleResetDateTo}
      />
    </div>
  );
}
