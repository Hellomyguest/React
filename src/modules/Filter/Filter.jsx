import { useState } from 'react';
import { Button, Input, Searchbar, Icon, Checkbox } from '../../shared';
import { ControlWithLabel } from '../../shared/ControlWithLabel/ControlWithLabel';
import { Dropdown } from '../../shared/Dropdown/Dropdown';
import styles from './Filter.module.css';

export function Filter() {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className={styles.filter}>
      <div className={styles['filter__search-area']}>
        <div className={styles.filter__search}>
          <Searchbar placeholder="Номер заказа или ФИО" />
          <Button
            color={isOpen ? 'primary' : 'reversePrimary'}
            size="medium"
            title="Фильтры"
            iconType="Filter"
            onClick={() => setOpen(!isOpen)}
          />
          <Button
            color="reversePrimary"
            size="medium"
            title="Сбросить фильтры"
          />
        </div>
        <div className={styles.load}>
          <Icon iconType="Refresh" className={styles.load__icon} />
          <span className={styles.load__text}>Загрузка</span>
        </div>
      </div>
      {isOpen && (
        <div className={styles.filter__area}>
          <div className={styles.filter__date}>
            <ControlWithLabel
              labelBefore
              label="Дата оформления"
              control={
                <>
                  <Input
                    placeholder="dd.mm.yyyy"
                    prefix="с"
                    pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
                    withReset
                  />
                  <Input
                    placeholder="dd.mm.yyyy"
                    prefix="по"
                    pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
                    withReset
                  />
                </>
              }
              className={styles.date}
            />
          </div>
          <div className={styles.filter__status}>
            <Dropdown
              trigger={
                <ControlWithLabel
                  labelBefore
                  label="Статус заказа"
                  className={styles.date}
                  control={<Input value="Любой" />}
                />
              }
              overlay={
                <>
                  <ControlWithLabel control={<Checkbox />} label="Новый" />
                  <ControlWithLabel control={<Checkbox />} label="Рассчет" />
                  <ControlWithLabel
                    control={<Checkbox />}
                    label="Подтвержден"
                  />
                  <ControlWithLabel control={<Checkbox />} label="Отложен" />
                  <ControlWithLabel control={<Checkbox />} label="Выполнен" />
                  <ControlWithLabel control={<Checkbox />} label="Отменен" />
                </>
              }
              className={styles.overlay_checkbox}
            />
          </div>
          <div className={styles.filter__price}>
            <span className={styles.input__label}>Дата оформления</span>
            <div className={styles.input__wrapper}>
              <Input placeholder="₽" value="5000" prefix="от" />
              <Input placeholder="₽" prefix="до" />
            </div>
          </div>
          <div className={styles.filter__button}>
            <Button color="reversePrimary" size="medium" title="Применить" />
          </div>
        </div>
      )}
    </div>
  );
}
