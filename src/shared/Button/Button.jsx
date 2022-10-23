/* eslint-disable react/button-has-type */
import classnames from 'classnames';
import styles from './Button.module.css';
import { Icon } from '../Icons';

const buttonTypes = {
  sizeMedium: 'medium',
  sizeSmall: 'small',
  colorPrimary: 'primary',
  colorReversePrimary: 'reversePrimary',
  colorReverseSecondary: 'reverseSecondary',
  colorDanger: 'danger',
};

export function Button({
  color,
  size,
  maxWidth,
  title,
  type = 'button',
  iconType,
  onClick,
  className,
  ...props
}) {
  const blockClass = classnames(
    styles._,
    {
      [styles.color_danger]: color === buttonTypes.colorDanger,
      [styles.color_primary]: color === buttonTypes.colorPrimary,
      [styles.color_reversePrimary]: color === buttonTypes.colorReversePrimary,
      [styles.color_reverseSecondary]:
        color === buttonTypes.colorReverseSecondary,
      [styles.size_medium]: size === buttonTypes.sizeMedium,
      [styles.size_small]: size === buttonTypes.sizeSmall,
      [styles.size_maxWidth]: maxWidth,
      [styles.icononly]: !!title,
    },
    className
  );
  return (
    <button className={blockClass} type={type} onClick={onClick} {...props}>
      <Icon iconType={iconType} className={styles.icon} />
      {title && <span className={styles.text}>{title}</span>}
    </button>
  );
}
