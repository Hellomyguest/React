import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.css';
import { Icon } from '../Icons';

const BUTTON_COLORS = {
  colorPrimary: 'primary',
  colorReversePrimary: 'reversePrimary',
  colorReverseSecondary: 'reverseSecondary',
  colorDanger: 'danger',
};

const BUTTON_SIZE = {
  sizeMedium: 'medium',
  sizeSmall: 'small',
};

export function Button({
  color,
  size,
  maxWidth,
  children,
  iconType,
  onClick,
  className,
  ...props
}) {
  const blockClass = classnames(
    styles._,
    {
      [styles.color_danger]: color === BUTTON_COLORS.colorDanger,
      [styles.color_primary]: color === BUTTON_COLORS.colorPrimary,
      [styles.color_reversePrimary]:
        color === BUTTON_COLORS.colorReversePrimary,
      [styles.color_reverseSecondary]:
        color === BUTTON_COLORS.colorReverseSecondary,
      [styles.size_medium]: size === BUTTON_SIZE.sizeMedium,
      [styles.size_small]: size === BUTTON_SIZE.sizeSmall,
      [styles.size_maxWidth]: maxWidth,
      [styles.icononly]: !children,
    },
    className
  );
  return (
    <button className={blockClass} type="button" onClick={onClick} {...props}>
      {iconType && <Icon iconType={iconType} className={styles.icon} />}
      {children}
    </button>
  );
}
