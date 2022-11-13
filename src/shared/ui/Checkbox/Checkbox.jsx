import React from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.css';

export function Checkbox({ name, className, onChange, checked, value }) {
  return (
    <input
      className={classNames(styles._, className)}
      name={name}
      value={value}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
}
