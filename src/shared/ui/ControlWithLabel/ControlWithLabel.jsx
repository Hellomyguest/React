/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classNames from 'classnames';
import styles from './ControlWithLabel.module.css';

export function ControlWithLabel({ control, label, name, className, onClick }) {
  return (
    <label
      className={classNames(styles.label, className)}
      name={name}
      onClick={onClick}
    >
      {control}
      {label && <span className={styles.checkbox__text}>{label}</span>}
    </label>
  );
}
