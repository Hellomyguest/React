import React from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.css';

export function Checkbox({ name, className, onChange, checked }) {
  return (
    <input
      className={classNames(styles._, className)}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
}
