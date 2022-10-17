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

const Buttons = function Buttons({ theme, size, title, iconType, ...props }) {
  const blockClass = classnames(styles.button, {
    [styles.button_size_small]: size === buttonTypes.buttonSizeSmall,
    [styles.buttonColorDanger]: theme === buttonTypes.buttonColorDanger,
    [styles.button_icononly]: theme === buttonTypes.buttonIconOnly,
    [styles.button_color_blue]: theme === buttonTypes.buttonColorBlue,
    [styles.buttonColorReverseBlue]:
      theme === buttonTypes.buttonColorReverseBlue,
    [styles.buttonColorReverseBlack]:
      theme === buttonTypes.buttonColorReverseBlack,
    [styles.button_size_medium]: size === buttonTypes.buttonSizeMedium,
  });
  //        console.log(iconType);
  return (
    <button className={blockClass} {...props}>
      <Icon iconType={iconType} />
      <span className={styles.button__text}>{title}</span>
    </button>
  );
};

export default Buttons;
