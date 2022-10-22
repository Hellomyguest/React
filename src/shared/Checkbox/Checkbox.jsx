import classNames from 'classnames';
import styles from './Checkbox.module.css';

export function Checkbox({ className, onChange, checked }) {
  return (
    <input
      className={classNames(styles._, className)}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
}
