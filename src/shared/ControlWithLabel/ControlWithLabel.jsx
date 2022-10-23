import classNames from 'classnames';
import styles from './ControlWithLabel.module.css';

export function ControlWithLabel({
  control,
  label,
  name,
  className,
  labelBefore,
}) {
  return (
    <label
      className={classNames(styles.label, styles.checkbox_text, className)}
      name={name}
    >
      {labelBefore &&
        label
        /* <span className={classNames(styles.checkbox__text, className)}>
          {label}
      </span> */
      }
      <div className={styles.wrapper}>{control}</div>

      {!labelBefore &&
        label
        /* <span className={classNames(styles.checkbox__text, className)}>
          {label}
      </span> */
      }
    </label>
  );
}
