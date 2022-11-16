import React, { useState } from 'react';
import styles from './Pageheader.module.css';
import { Dropdown, Button } from '../../../../shared/ui';
import { useTheme } from '../../../../shared/utils/useTheme';

export function Pageheader({ title }) {
  const [isChangeThemeOpen, setIsChangeThemeOpen] = useState(false);
  const { isLight, toggleTheme } = useTheme();

  const handleClickOpen = () => setIsChangeThemeOpen(!isChangeThemeOpen);
  const handleClickClose = () => setIsChangeThemeOpen(false);

  const handleClickChangeTheme = () => {
    toggleTheme();
    handleClickOpen();
  };

  return (
    <div className={styles._}>
      <h1 className={styles.title}>{title}</h1>
      <div>
        <Dropdown
          isOpen={isChangeThemeOpen}
          setOpen={handleClickOpen}
          setClose={handleClickClose}
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
                onClick={handleClickChangeTheme}
              >
                Светлая
              </Button>
              <Button
                color={isLight ? 'reversePrimary' : 'primary'}
                size="small"
                maxWidth
                iconType="Moon"
                onClick={handleClickChangeTheme}
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
