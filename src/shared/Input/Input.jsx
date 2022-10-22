/* eslint-disable no-return-assign */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import styles from './Input.module.css';
import { Icon } from '../Icons';

export function Input({
  type,
  placeholder,
  value,
  pattern,
  label,
  prefix,
  ...props
}) {
  const [inputValue, setInputValue] = useState('');

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.input}>
      {label && <label className={styles.input__label}>{label}</label>}
      <div className={styles.input__area}>
        {prefix && <span className={styles.input__mask}>{prefix}</span>}
        <input
          className={`${styles['input__text-field']} ${
            prefix && styles['input__text-field_prefix']
          }`}
          onChange={changeHandler}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          pattern={pattern}
          {...props}
        />
        <button
          className={styles.input__button}
          onClick={() => setInputValue('')}
        >
          <Icon iconType="Xmedium" className={styles.input__icon} />
        </button>
      </div>
    </div>
  );
}
