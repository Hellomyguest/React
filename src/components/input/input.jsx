/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './input.css';
// import { ReactComponent as DeleteIcon } from '../icons/x-medium.svg';
// import { ReactComponent as LockedIcon } from '../icons/locked.svg';

const Input = function Input() {
  return (
    <div className="input">
      <label className="input__label" htmlFor="input-text">
        Дата и время заказа
      </label>
      <div className="input__area">
        <input
          className="input__text-field"
          id="input-text"
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
          type="text"
          placeholder="Введите"
        />
      </div>
    </div>
  );
};

export default Input;
