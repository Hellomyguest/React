/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import styles from './dropdown.module.css';
import { Button } from '../Button/button';

export function Dropdown({ isOpen }) {
  return (
    <div
      className={`${styles.dropdown} ${styles.dropdown_switcher} ${
        !isOpen && styles.dropdown_hidden
      }`}>
      <span className={styles.dropdown__name}>Выберите тему</span>
      <Button
        color="reverse-blue"
        size="small"
        maxWidth
        title="Светлая"
        iconType="Sun"
      />
      <Button
        color="blue"
        size="small"
        maxWidth
        title="Темная"
        iconType="Moon"
      />
    </div>
  );
}
