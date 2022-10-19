/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import styles from './input.module.css';
import { Icon } from '../icons';
// import { ReactComponent as DeleteIcon } from '../icons/x-medium.svg';
// import { ReactComponent as LockedIcon } from '../icons/locked.svg';

export function Input({ label, id }) {
  const [inputValue, setInputValue] = useState('');

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.input}>
      {label && (
        <label className={styles.input__label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.input__area}>
        <input
          className={styles['input__text-field']}
          onChange={changeHandler}
          id={id}
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
          type="text"
          placeholder="Введите"
          value={inputValue}
        />
        <button
          className={`${styles.input__button}`}
          onClick={() => setInputValue('')}>
          <Icon iconType="Xmedium" className={styles.input__icon} />
        </button>
      </div>
    </div>
  );
}
