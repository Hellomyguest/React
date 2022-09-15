/* eslint-disable jsx-a11y/label-has-associated-control */
import './checkbox.css';
import { ReactComponent as CheckmarkIcon } from '../icons/checkmark.svg';

const Checkboxes = function Checkboxes() {
  return (
    <>
      <div className="checkbox">
        <label>
          <input className="checkbox__area" type="checkbox" />
          <CheckmarkIcon className="checkbox__icon" />
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input className="checkbox__area" checked type="checkbox" />
          <CheckmarkIcon className="checkbox__icon" />
        </label>
      </div>
    </>
  );
};

export default Checkboxes;
