import classNames from 'classnames';
import styles from './ControlWithLabel.module.css';

export function ControlWithLabel({ control, title, name, className }) {
  return (
    <label className={styles.label} name={name}>
      {control}
      <span className={classNames(styles.checkbox__text, className)}>
        {title}
      </span>
    </label>
  );
}
