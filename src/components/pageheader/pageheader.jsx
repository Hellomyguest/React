/* eslint-disable react/button-has-type */
import './pageheader.css';

import { ReactComponent as ButtonIconMoon } from '../icons/moon.svg';
import { ReactComponent as ButtonIconSun } from '../icons/sun.svg';

const Pageheader = function Pageheader() {
  return (
    <>
      <div className="header">
        <h1>Список заказов</h1>
        <button className="button button_size_medium button_color_reverse-blue">
          <ButtonIconSun className="button__icon" />
          <span className="button__text">Светлая тема</span>
        </button>
      </div>
      <div className="header">
        <h1>Список заказов</h1>
        <button className="button button_size_medium button_color_reverse-blue">
          <ButtonIconSun className="button__icon" />
          <span className="button__text">Светлая тема</span>
        </button>
        <div className="dropdown dropdown_switcher">
          <span className="dropdown__name">Выберете тему</span>
          <button className="button button_size_max-width button_size_small button_color_reverse-blue">
            <ButtonIconSun className="button__icon" />
            <span className="button__text">Светлая</span>
          </button>
          <button className="button button_size_max-width button_size_small button_color_blue">
            <ButtonIconMoon className="button__icon" />
            <span className="button__text">Темная</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pageheader;
