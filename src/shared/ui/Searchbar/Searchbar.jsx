import styles from './Searchbar.module.css';
import { Icon } from '../Icons';

export function Searchbar({ placeholder, value, onChange, onReset, ...props }) {
  return (
    <div className={styles._}>
      <input
        className={styles.area}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
        name=""
        id=""
        {...props}
      />
      <Icon iconType="Search" className={styles.iconFind} />
      {value && (
        <button type="button" className={styles.buttonDelete} onClick={onReset}>
          <Icon iconType="Xmedium" className={styles.iconDelete} />
        </button>
      )}
    </div>
  );
}
