/* eslint-disable react/button-has-type */
import { useState } from 'react';
import styles from './searchbar.module.css';
import { Icon } from '../icons';

export function Searchbar({ placeholder, ...props }) {
  const [searchValue, setSearchValue] = useState('');

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return (
    <div className={`${styles.searchbar} ${styles.searchbar_empty}`}>
      <input
        className={styles.searchbar__area}
        placeholder={placeholder}
        onChange={changeHandler}
        type="search"
        defaultValue=""
        name=""
        id=""
        value={searchValue}
        {...props}
      />
      <Icon iconType="Search" className={styles['searchbar__icon-find']} />
      <button
        className={`${styles['searchbar__button-delete']} ${
          searchValue === '' && styles['searchbar__button-delete_hidden']
        } `}
        onClick={() => setSearchValue('')}>
        <Icon iconType="Xmedium" className={styles['searchbar__icon-delete']} />
      </button>
    </div>
  );
}
