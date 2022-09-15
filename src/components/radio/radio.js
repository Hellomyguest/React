import './radio.css';
import { ReactComponent as RadioDotIcon } from '../icons/dot.svg';

const Radio = function Radio() {
  return (
    <>
      <div className="radio">
        <input className="radio__area" name="radio" type="radio" />
        <RadioDotIcon className="radio__dot" />
      </div>
      <div className="radio">
        <input className="radio__area" name="radio" type="radio" checked />
        <RadioDotIcon className="radio__dot" />
      </div>
    </>
  );
};

export default Radio;
