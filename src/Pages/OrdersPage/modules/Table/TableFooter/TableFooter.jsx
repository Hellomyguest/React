import { Button, Dropdown } from '../../../../../shared/ui';
import styles from './TableFooter.module.css';

export function TableFooter() {
  return (
    <div className={styles._}>
      <div className={styles.buttons}>
        <span className={styles.bunch}>Выбрано записей: 5</span>
        <Button color="primary" size="small" iconType="Pencil">
          Изменить статус
        </Button>

        <div className={styles.dropdown}>
          <Dropdown
            trigger={
              <Button color="danger" size="small" iconType="Bin">
                Удалить
              </Button>
            }
            overlay={
              <>
                <span className="dropdown__name">Удалить n записей?</span>
                <Button
                  color="reversePrimary"
                  size="small"
                  maxWidth
                  className={styles.overlayButton}
                >
                  Удалить
                </Button>
                <Button
                  color="reversePrimary"
                  size="small"
                  maxWidth
                  className={styles.overlayButton}
                >
                  Отмена
                </Button>
              </>
            }
            className={styles.dropdown_delete}
          />
        </div>
      </div>
      <div className={styles.pages}>
        <div className={styles.footer__pagination}>
          <Button size="small" color="primary">
            1
          </Button>
          <Button size="small" color="reversePrimary">
            2
          </Button>
          <Button size="small" color="reversePrimary">
            3
          </Button>
          <Button size="small" color="reversePrimary">
            ...
          </Button>
          <Button size="small" color="reversePrimary">
            18
          </Button>
        </div>
        <Button size="small" color="reversePrimary">
          #
        </Button>
      </div>
    </div>
  );
}
