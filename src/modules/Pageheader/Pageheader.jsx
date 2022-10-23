import styles from './Pageheader.module.css';
import { Dropdown } from '../../shared/Dropdown/Dropdown';
import { Button } from '../../shared/Button/Button';

export function Pageheader({ title }) {
  return (
    <div className={styles._}>
      <h1 className={styles.title}>{title}</h1>
      <div>
        <Dropdown
          trigger={
            <Button size="medium" color="reversePrimary" iconType="Sun">
              {' '}
              Светлая тема{' '}
            </Button>
          }
          overlay={
            <>
              <span>Выберите тему</span>
              <Button color="primary" size="small" maxWidth iconType="Sun">
                Светлая
              </Button>
              <Button
                color="reversePrimary"
                size="small"
                maxWidth
                iconType="Moon"
              >
                Темная
              </Button>
            </>
          }
        />
      </div>
    </div>
  );
}
