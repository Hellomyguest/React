import classNames from 'classnames';
import styles from './ControlWithLabel.module.css';

export function ControlWithLabel({ control, label, name, className }) {
  return (
    <label className={classNames(styles.label, className)} name={name}>
      {control}
      <span className={styles.checkbox__text}>{label}</span>
    </label>
  );
}
