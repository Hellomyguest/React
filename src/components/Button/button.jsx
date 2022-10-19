/* eslint-disable react/button-has-type */
import classnames from 'classnames';
import styles from './button.module.css';
import { Icon } from '../icons';

const buttonTypes = {
  buttonSizeMedium: 'medium',
  buttonSizeSmall: 'small',
  buttonIconOnly: 'button_icononly',
  buttonColorBlue: 'blue',
  buttonColorReverseBlue: 'reverse-blue',
  buttonColorReverseBlack: 'reverse-black',
  buttonColorDanger: 'danger',
};

export function Button({
  color,
  size,
  maxWidth,
  title,
  type = 'button',
  iconType,
  onClick,
  ...props
}) {
  const blockClass = classnames(styles.button, {
    [styles.button_color_danger]: color === buttonTypes.buttonColorDanger,
    [styles.button_icononly]: color === buttonTypes.buttonIconOnly,
    [styles.button_color_blue]: color === buttonTypes.buttonColorBlue,
    [styles['button_color_reverse-blue']]:
      color === buttonTypes.buttonColorReverseBlue,
    [styles['button_color_reverse-black']]:
      color === buttonTypes.buttonColorReverseBlack,
    [styles.button_size_medium]: size === buttonTypes.buttonSizeMedium,
    [styles.button_size_small]: size === buttonTypes.buttonSizeSmall,
    [styles['button_size_max-width']]: maxWidth,
  });
  return (
    <button className={blockClass} type={type} onClick={onClick} {...props}>
      <Icon iconType={iconType} className={styles.button__icon} />
      <span className={styles.button__text}>{title}</span>
    </button>
  );
}
