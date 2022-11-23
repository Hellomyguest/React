/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
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
  const inputRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
    inputRef.current.focus();
  };

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
      onClick={handleClick}
    >
      {prefix && <div className={styles.prefix}>{prefix}</div>}
      <input
        ref={inputRef}
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
      {postfix && <div className={styles.postfix}>{postfix}</div>}
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
