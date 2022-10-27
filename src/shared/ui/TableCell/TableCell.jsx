import classNames from 'classnames';
import styles from './TableCell.module.css';

export function TableCell({ children, className }) {
  return <div className={classNames(styles._, className)}>{children}</div>;
}
