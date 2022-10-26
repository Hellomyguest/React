import classNames from 'classnames';
import styles from './Radio.module.css';

export function Radio({ name, checked, onChange, className }) {
  return (
    <input
      className={classNames(styles._, className)}
      name={name}
      type="radio"
      checked={checked}
      onChange={onChange}
    />
  );
}
