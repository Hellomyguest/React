import React from 'react';
import classNames from 'classnames';
import styles from './TableBody.module.css';

export function TableBody({ className, children }) {
  return <div className={classNames(styles._, className)}>{children}</div>;
}
