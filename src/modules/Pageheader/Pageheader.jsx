import styles from './Pageheader.module.css';
import { Dropdown } from '../../shared/Dropdown/Dropdown';
import { Button } from '../../shared/Button/Button';
import { useTheme } from '../../shared/useTheme/useTheme';

export function Pageheader({ title }) {
  const { isLight, toggleTheme } = useTheme();
  return (
    <div className={styles._}>
      <h1 className={styles.title}>{title}</h1>
      <div>
        <Dropdown
          trigger={
            <Button size="medium" color="reversePrimary" iconType="Sun">
              Светлая тема
            </Button>
          }
          overlay={
            <>
              <span>Выберите тему</span>
              <Button
                color={isLight ? 'primary' : 'reversePrimary'}
                size="small"
                maxWidth
                iconType="Sun"
                onClick={toggleTheme}
              >
                Светлая
              </Button>
              <Button
                color={isLight ? 'reversePrimary' : 'primary'}
                size="small"
                maxWidth
                iconType="Moon"
                onClick={toggleTheme}
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
