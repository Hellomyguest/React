/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './dropdowns.css';
import { ReactComponent as CheckmarkIcon } from '../icons/checkmark.svg';
import { ReactComponent as LockedIcon } from '../icons/locked.svg';
import { ReactComponent as DeleteIcon } from '../icons/x-medium.svg';
import { ReactComponent as ButtonIcon } from '../icons/abort.svg';
import { ReactComponent as ButtonIconMoon } from '../icons/moon.svg';
import { ReactComponent as ButtonIconSun } from '../icons/sun.svg';

const Dropdowns = function Dropdowns() {
  return (
    <>
      <ul className="dropdown dropdown_multiple">
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="new">
              <input className="checkbox__area" id="new" type="checkbox" />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Новый</span>
            </label>
          </div>
        </li>
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="calculation">
              <input
                className="checkbox__area"
                id="calculation"
                type="checkbox"
              />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Рассчет</span>
            </label>
          </div>
        </li>
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="confirmed">
              <input
                className="checkbox__area"
                id="confirmed"
                checked
                type="checkbox"
              />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Подтвержден</span>
            </label>
          </div>
        </li>
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="deferred">
              <input className="checkbox__area" id="deferred" type="checkbox" />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Отложен</span>
            </label>
          </div>
        </li>
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="completed">
              <input
                className="checkbox__area"
                id="completed"
                type="checkbox"
              />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Выполнен</span>
            </label>
          </div>
        </li>
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="canseled">
              <input className="checkbox__area" id="canseled" type="checkbox" />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Отменен</span>
            </label>
          </div>
        </li>
      </ul>
      <ul className="dropdown dropdown_single">
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="single_new">
              <input
                className="checkbox__area"
                name="single"
                id="single_new"
                type="radio"
              />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Новый</span>
            </label>
          </div>
        </li>
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="single_calculation">
              <input
                className="checkbox__area"
                name="single"
                id="single_calculation"
                type="radio"
              />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Рассчет</span>
            </label>
          </div>
        </li>
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="single_confirmed">
              <input
                className="checkbox__area"
                checked
                name="single"
                id="single_confirmed"
                type="radio"
              />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Подтвержден</span>
            </label>
          </div>
        </li>
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="single_deferred">
              <input
                className="checkbox__area"
                name="single"
                id="single_deferred"
                type="radio"
              />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Отложен</span>
            </label>
          </div>
        </li>
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="single_completed">
              <input
                className="checkbox__area"
                name="single"
                id="single_completed"
                type="radio"
              />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Выполнен</span>
            </label>
          </div>
        </li>
        <li className="dropdown__item">
          <div className="checkbox">
            <label htmlFor="single_canseled">
              <input
                className="checkbox__area"
                name="single"
                id="single_canseled"
                type="radio"
              />
              <CheckmarkIcon className="checkbox__icon" />
              <span className="checkbox__text">Отменен</span>
            </label>
          </div>
        </li>
      </ul>
      <div className="dropdown dropdown_go-to-page">
        <div className="input">
          <label className="input__label" htmlFor="go-to-page">
            Номер страницы
          </label>
          <div className="input__area">
            <input
              className="input__text-field input__text-field_empty"
              id="go-to-page"
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
              type="text"
              placeholder="Введите"
            />
            <button className="input__button input__button_x-medium">
              <DeleteIcon className="input__icon input__icon_x-medium" />
            </button>
            <button className="input__button input__button_disabled">
              <LockedIcon className="input__icon input__icon_disabled" />
            </button>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown_delete">
        <span className="dropdown__name">Удалить n записей?</span>
        <button className="button button_size_max-width button_size_small button_color_reverse-blue">
          <ButtonIcon className="button__icon" />
          <span className="button__text">Удалить</span>
        </button>
        <button className="button button_size_max-width button_size_small button_color_blue">
          <ButtonIcon className="button__icon" />
          <span className="button__text">Отмена</span>
        </button>
      </div>
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
    </>
  );
};

export default Dropdowns;
