import React from 'react';
import classNames from 'classnames';
import styles from './TableHeader.module.css';

export function TableHeader({ className, children }) {
  return <div className={classNames(styles._, className)}>{children}</div>;
}
