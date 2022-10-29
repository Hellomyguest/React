import classNames from 'classnames';
import styles from './Input.module.css';
import { Icon } from '../Icons';

export function Input({
  type,
  value,
  placeholder,
  pattern,
  prefix,
  postfix,
  disabled,
  onReset,
  className,
  onChange,
  readOnly,
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
          [styles.textFieldWithButton]: disabled || !!onReset || postfix,
          [styles.textFieldWithPrefixAndButton]:
            (disabled || !!onReset) && postfix,
        })}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        disabled={disabled}
        readOnly={readOnly}
      />
      {postfix && (
        <div
          className={classNames(styles.postfix, {
            [styles.postfixWithButton]: disabled || !!onReset,
          })}
        >
          {postfix}
        </div>
      )}
      {disabled ? (
        <Icon
          iconType="Locked"
          className={classNames(styles.button, styles.iconDisabled)}
        />
      ) : (
        !!onReset &&
        value && (
          <button type="button" className={styles.button} onClick={onReset}>
            <Icon iconType="Xmedium" className={styles.icon} />
          </button>
        )
      )}
    </div>
  );
}
