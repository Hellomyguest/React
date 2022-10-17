/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './dropdowns.css';
// import { ReactComponent as CheckmarkIcon } from '../icons/checkmark.svg';
// import { ReactComponent as LockedIcon } from '../icons/locked.svg';
// import { ReactComponent as DeleteIcon } from '../icons/x-medium.svg';
// import { ReactComponent as ButtonIcon } from '../icons/abort.svg';
import { ReactComponent as ButtonIconMoon } from '../icons/moon.svg';
import { ReactComponent as ButtonIconSun } from '../icons/sun.svg';

const Dropdowns = function Dropdowns() {
  return (
    <div className="dropdown dropdown_switcher">
      <span className="dropdown__name">Выберите тему</span>
      <button className="button button_size_max-width button_size_small button_color_reverse-blue">
        <ButtonIconSun className="button__icon" />
        <span className="button__text">Светлая</span>
      </button>
      <button className="button button_size_max-width button_size_small button_color_blue">
        <ButtonIconMoon className="button__icon" />
        <span className="button__text">Темная</span>
      </button>
    </div>
  );
};

export default Dropdowns;
