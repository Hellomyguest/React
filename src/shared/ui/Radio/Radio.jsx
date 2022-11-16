import React from 'react';
import classNames from 'classnames';
import styles from './Radio.module.css';

export function Radio({ name, checked, onChange, className, value }) {
  return (
    <input
      className={classNames(styles._, className)}
      name={name}
      value={value}
      type="radio"
      checked={checked}
      onChange={onChange}
    />
  );
}
