/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import './components/css/settings.css';
import './components/css/uikit.css';

import Buttons from './components/Buttons/buttons';
import Checkboxes from './components/checkbox/checkbox';
import Input from './components/input/input';
import Searchbar from './components/searchbar/searchbar';
import Radio from './components/radio/radio';
import Dropdowns from './components/dropdowns/dropdowns';
import Pageheader from './components/pageheader/pageheader';

function App() {
  return (
    <section>
      <div className="box box__input">
        <Input />
      </div>
      <div className="box box__searchbar">
        <Searchbar />
      </div>
      <div className="box box__checkbox">
        <Checkboxes />
      </div>
      <div className="box box__radio">
        <Radio />
      </div>
      <div className="box box__button">
        <Buttons />
      </div>
      <div className="box box__dropdowns">
        <Dropdowns />
      </div>
      <div className="box box__pageheader">
        <Pageheader />
      </div>
    </section>
  );
}

export default App;
