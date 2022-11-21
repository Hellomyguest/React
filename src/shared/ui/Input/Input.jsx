import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';
import { Icon } from '../Icons';

export function Input({
  type,
  value,
  placeholder,
  prefix,
  postfix,
  disabled,
  onReset,
  className,
  onChange,
  onKeyPress,
  readOnly,
  invalid,
}) {
  const [isFocused, setFocused] = useState(false);

  return (
    <div
      className={classNames(
        styles._,
        {
          [styles.disabled]: disabled,
          [styles.invalid]: invalid,
          [styles.focused]: isFocused,
        },
        className
      )}
    >
      {prefix && <div>{prefix}</div>}
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={classNames(styles.textField, {
          [styles.disabled]: disabled,
        })}
        onChange={onChange}
        onKeyPress={onKeyPress}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
      />
      {postfix && <div>{postfix}</div>}
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
