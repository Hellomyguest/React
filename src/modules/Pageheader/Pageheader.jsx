import styles from './Pageheader.module.css';
import { Dropdown } from '../../shared/Dropdown/Dropdown';
import { Button } from '../../shared/Button/Button';

export function Pageheader({ title }) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <div>
        <Dropdown
          trigger={
            <Button
              size="medium"
              color="reversePrimary"
              title="Светлая тема"
              iconType="Sun"
            />
          }
          overlay={
            <>
              <span className={styles.dropdown__name}>Выберите тему</span>
              <Button
                color="primary"
                size="small"
                maxWidth
                title="Светлая"
                iconType="Sun"
              />
              <Button
                color="reversePrimary"
                size="small"
                maxWidth
                title="Темная"
                iconType="Moon"
              />
            </>
          }
        />

        {/* <ButtonDropdown size="medium"
          color="reversePrimary"
          title="Светлая тема"
  iconType="Sun"  overlayType="switch"/> */}
      </div>
    </div>
  );
}
