import { useState, useContext } from 'react';
import {
  Button,
  Input,
  Searchbar,
  Icon,
  Checkbox,
  ControlWithLabel,
  Dropdown,
  InputWithLabel,
} from '../../../../shared/ui';
import { FilterContext } from '../../../../store/filterContext';
import styles from './Filter.module.css';

export function Filter() {
  const { search, status } = useContext(FilterContext);
  const [isOpen, setOpen] = useState(true);
  return (
    <div className={styles._}>
      <div className={styles.searchArea}>
        <div className={styles.search}>
          <Searchbar
            placeholder="Номер заказа или ФИО"
            value={search.value}
            onChange={search.onChange}
            onReset={search.onReset}
          />
          <Button
            color={isOpen ? 'primary' : 'reversePrimary'}
            size="medium"
            iconType="Filter"
            onClick={() => setOpen(!isOpen)}
          >
            Фильтры
          </Button>
          {isOpen && (
            <Button color="reversePrimary" size="medium">
              Сбросить фильтры
            </Button>
          )}
        </div>
        <div className={styles.load}>
          <Icon iconType="Refresh" className={styles.loadIcon} />
          <span className={styles.loadText}>Загрузка</span>
        </div>
      </div>
      {isOpen && (
        <div className={styles.area}>
          <div className={styles.date}>
            <InputWithLabel
              label="Дата оформления"
              input={
                <Input
                  placeholder="dd.mm.yyyy"
                  prefix="с"
                  pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
                  withReset
                />
              }
            />
            <Input
              placeholder="dd.mm.yyyy"
              prefix="по"
              pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
              withReset
            />
          </div>
          <div className={styles.status}>
            <Dropdown
              trigger={
                <div>
                  <InputWithLabel
                    input={
                      <Input
                        value={status.checkedStatuses}
                        label="Статус заказа"
                        postfix={
                          <Icon
                            iconType="Varrow"
                            className={styles.statusIcon}
                          />
                        }
                      />
                    }
                    label="Статус заказа"
                  />
                </div>
              }
              overlay={
                <>
                  {Object.keys(status.value).map((item) => (
                    <ControlWithLabel
                      key={item}
                      control={
                        <Checkbox
                          onChange={status.onChange(status.value[item])}
                        />
                      }
                      label={status.STATUS_MAP[item]}
                    />
                  ))}
                </>
              }
              className={styles.statusOverlay}
            />
          </div>
          <div className={styles.price}>
            <InputWithLabel
              input={
                <Input
                  placeholder="₽"
                  value="5000"
                  prefix="от"
                  label="Сумма заказа"
                  withReset
                  pattern="\d*"
                />
              }
              label="Сумма заказ"
            />
            <Input placeholder="₽" prefix="до" withReset pattern="\d*" />
          </div>
          <div className={styles.button}>
            <Button color="reversePrimary" size="medium">
              Применить
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
