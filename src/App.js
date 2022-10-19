/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState } from 'react';
import './components/css/settings.css';
// import './components/css/uikit.css';
import styles from './components/css/admpanel.module.css';

import { Button } from './components/Button/button';
// import Checkboxes from './components/checkbox/checkbox';
import { Input } from './components/input/input';
import { Searchbar } from './components/searchbar/searchbar';
// import Radio from './components/radio/radio';
// import Dropdowns from './components/dropdowns/dropdowns';
import Pageheader from './components/pageheader/pageheader';
import { Icon } from './components/icons';

function App() {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className={styles.body}>
      <Pageheader title="Список заказов" />
      <div className={styles.filter}>
        <div className={styles['filter__search-area']}>
          <div className={styles.filter__search}>
            <Searchbar placeholder="Номер заказа или ФИО" />
            <Button
              color="blue"
              size="medium"
              title="Фильтры"
              iconType="Filter"
              onClick={() => setOpen(!isOpen)}
            />
            <Button
              color="reverse-blue"
              size="medium"
              title="Сбросить фильтры"
            />
          </div>
          <div className={styles.load}>
            <Icon iconType="Refresh" className={styles.load__icon} />
            <span className={styles.load__text}>Загрузка</span>
          </div>
        </div>
        <div
          className={isOpen ? styles.filter__area : styles.filter__area_hidden}>
          <div className={styles.filter__date}>
            <Input />
          </div>
          <div className={styles.filter__status}>
            <Input />
          </div>
          <div className={styles.filter__price}>
            <Input />
          </div>
          <div className={styles.filter__button}>
            <Button color="reverse-blue" size="medium" title="Применить" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
