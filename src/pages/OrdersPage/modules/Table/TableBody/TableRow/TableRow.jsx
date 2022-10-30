import classNames from 'classnames';
import styles from './TableRow.module.css';

export function TableRow({ children, className }) {
  return <div className={classNames(styles._, className)}>{children}</div>;
}
