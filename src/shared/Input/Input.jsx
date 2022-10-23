import classNames from 'classnames';
import styles from './Input.module.css';
import { Icon } from '../Icons';

export function Input({
  type,
  value,
  placeholder,
  pattern,
  prefix,
  disabled,
  onReset,
  className,
  dropdown,
  onChange,
}) {
  /*
 const [inputValue, setInputValue] = useState('');
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  */
  return (
    <div
      className={classNames(
        styles._,
        { [styles.disabled]: disabled },
        className
      )}
    >
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      <input
        className={classNames(styles.textField, {
          [styles.textFieldPrefix]: prefix,
          [styles.disabled]: disabled,
        })}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        disabled={disabled}
      />
      {onReset && value && (
        <button type="button" className={styles.button} onClick={onReset}>
          <Icon iconType="Xmedium" className={styles.icon} />
        </button>
      )}
      {disabled && (
        <button type="button" className={styles.button}>
          <Icon iconType="Locked" className={styles.icon_disabled} />
        </button>
      )}
      {dropdown && (
        <button type="button" className={styles.button}>
          <Icon iconType="Varrow" className={styles.icon} />
        </button>
      )}
    </div>
  );
}
