import classNames from 'classnames';
import React from 'react';
import styles from './Table.module.css';

export function Table({ className, children }) {
  return <div className={classNames(styles._, className)}>{children}</div>;
}
