import React from 'react';
import styles from './Pageheader.module.css';
import { Dropdown, Button } from '../../../../shared/ui';
import { useTheme } from '../../../../shared/utils/useTheme';

export function Pageheader({ title }) {
  const { isLight, toggleTheme } = useTheme();

  const handleClickSetDarkTheme = () => {
    toggleTheme('dark');
  };

  const handleClickSetLigthTheme = () => {
    toggleTheme('light');
  };

  return (
    <div className={styles._}>
      <h1 className={styles.title}>{title}</h1>
      <div>
        <Dropdown
          shouldCloseOnClick
          trigger={
            <Button
              size="medium"
              color="reversePrimary"
              iconType={isLight ? 'Sun' : 'Moon'}
            >
              {isLight ? 'Светлая тема' : 'Темная тема'}
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
                onClick={handleClickSetLigthTheme}
              >
                Светлая
              </Button>
              <Button
                color={isLight ? 'reversePrimary' : 'primary'}
                size="small"
                maxWidth
                iconType="Moon"
                onClick={handleClickSetDarkTheme}
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
