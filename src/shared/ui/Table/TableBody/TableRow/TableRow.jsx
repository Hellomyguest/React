import React from 'react';
import classNames from 'classnames';
import styles from './TableRow.module.css';

export function TableRow({ children, className, id, onClick }) {
  return (
    <div
      className={classNames(styles._, className)}
      id={id}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}
