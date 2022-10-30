import React from 'react';
import classNames from 'classnames';
import styles from './InputWithLabel.module.css';

export function InputWithLabel({ input, className, label }) {
  return (
    <label className={styles._}>
      <span className={classNames(styles.text, className)}>{label}</span>
      {input}
    </label>
  );
}
