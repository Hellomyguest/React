/* eslint-disable react/button-has-type */
import './button.css';
import { ReactComponent as ButtonIcon } from '../icons/abort.svg';

const Buttons = function Buttons() {
  return (
    <div className="container">
      <button className="button button_size_medium button_color_blue">
        <ButtonIcon className="button__icon" />
        <span className="button__text">Text here</span>
      </button>
      <button className="button button_size_medium button_color_reverse-blue">
        <ButtonIcon className="button__icon" />
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_medium button_color_reverse-black">
        <ButtonIcon className="button__icon" />
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_medium button_color_blue">
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_medium button_color_reverse-blue">
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_medium button_color_reverse-black">
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_icononly button_size_medium button_color_blue">
        <ButtonIcon className="button__icon" />
      </button>
      <button className="button button_icononly button_size_medium button_color_reverse-blue">
        <ButtonIcon className="button__icon" />
      </button>
      <button className="button button_icononly button_size_medium button_color_reverse-black">
        <ButtonIcon className="button__icon" />
      </button>
      <div className="container__gap" />
      <button className="button button_size_small button_color_blue">
        <ButtonIcon className="button__icon" />
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_small button_color_reverse-blue">
        <ButtonIcon className="button__icon" />
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_small button_color_blue">
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_small button_color_reverse-blue">
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_icononly button_size_small button_color_blue">
        <ButtonIcon className="button__icon" />
      </button>
      <button className="button button_icononly button_size_small button_color_reverse-blue">
        <ButtonIcon className="button__icon" />
      </button>
    </div>
  );
};

export default Buttons;
