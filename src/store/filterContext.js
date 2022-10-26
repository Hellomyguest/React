import React, { useState, useMemo } from 'react';

export const FilterContext = React.createContext(null);

/* const selects = {
  new: false,
  calculation: false,
  confirmed: false,
  postponed: false,
  completed: false,
  declined: false,
};
*/

/* { name: 'Новый', checked: false },
{ name: 'Рассчет', checked: false },
{ name: 'Подтвержден', checked: false },
{ name: 'Отложен', checked: false },
{ name: 'Выполнен', checked: false },
{ name: 'Отменен', checked: false }, */

const STATUS_MAP = {
  any: 'Любой',
  new: 'Новый',
  calculation: 'Рассчет',
  confirmed: 'Подтверждён',
  postponed: 'Отложен',
  completed: 'Выполнен',
  declined: 'Отменен',
};

export function FilterContextProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');
  const [statusValues, setStatusValues] = useState({
    new: false,
    calculation: false,
    confirmed: false,
    postponed: false,
    completed: false,
    declined: false,
  });

  const handleChangeStatus = (e) => {
    setStatusValues({ ...statusValues, [e]: !statusValues[e] });
  };

  const checkedStatuses = useMemo(() => {
    const statuses = Object.keys(statusValues)
      .filter((el) => statusValues[el])
      .map((status) => STATUS_MAP[status]);
    return statuses.length ? statuses.join(', ') : STATUS_MAP.any;
  }, [statusValues]);

  // const [dateFromValue, setDateFromValue] = useState('');
  // const [dateToValue, setdateToValue] = useState('');

  /* const handleChange = (func) => {
    const stateFunc = func;
    return (e) => stateFunc(e.target.value);
  };

  const handleReset = (func) => {
    const stateFunc = func;
    return () => f('');
  }; */

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleReset = () => setSearchValue('');

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const filterStore = {
    search: {
      value: searchValue,
      onChange: handleChange,
      onReset: handleReset,
    },
    status: {
      value: statusValues,
      checkedStatuses,
      STATUS_MAP,
      onChange: handleChangeStatus,
    },
    // dateFrom: [dateFromValue, handleChange( "", setDateFromValue), handleReset(setDateFromValue)]
  };
  // const store = { searchValue, onChange: handleChange, onReset: handleReset };

  return (
    <FilterContext.Provider value={filterStore}>
      {children}
    </FilterContext.Provider>
  );
}
