import React from 'react';
import classNames from 'classnames';
import styles from './TableFooter.module.css';

export function TableFooter({ className, children }) {
  return <div className={classNames(styles._, className)}>{children}</div>;
}
