/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import './components/css/settings.css';
import './components/css/uikit.css';
import './components/css/admpanel.css';

import { ReactComponent as LoadIcon } from './components/icons/refresh.svg';

import Buttons from './components/Buttons/buttons';
// import Checkboxes from './components/checkbox/checkbox';
import Input from './components/input/input';
import Searchbar from './components/searchbar/searchbar';
// import Radio from './components/radio/radio';
// import Dropdowns from './components/dropdowns/dropdowns';
import Pageheader from './components/pageheader/pageheader';

function App() {
  return (
    <>
      <Pageheader />
      <div className="filter">
        <div className="filter__search-area">
          <div className="filter__search">
            <Searchbar />
            <Buttons
              theme="blue"
              size="medium"
              title="Фильтры"
              iconType="Filter"
            />
            <Buttons />
          </div>
          <div className="load">
            <LoadIcon className="load__icon" />
            <span className="load__text">Загрузка</span>
          </div>
        </div>
        <div className="filter__area">
          <div className="filter__date">
            <Input />
          </div>
          <div className="filter__status">
            <Input />
          </div>
          <div className="filter__price">
            <Input />
          </div>
          <div className="filter__button">
            <Buttons />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
