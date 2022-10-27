import { Button, Dropdown } from '../../../../../shared/ui';
import styles from './TableFooter.module.css';

export function TableFooter() {
  return (
    <div className={styles.table__footer}>
      <div className={styles.footer__area}>
        <span className={styles.footer__bunch}>Выбрано записей: 5</span>
        <Button color="primary" size="small" iconType="Pencil">
          Изменить статус
        </Button>

        <div className={styles['button-wrapper']}>
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
                  title="Удалить"
                >
                  Удалить
                </Button>
                <Button color="primary" size="small" maxWidth>
                  Отмена
                </Button>
              </>
            }
            className={styles.dropdown_delete}
          />
        </div>
      </div>
      <div className="footer__area footer__area_mgap">
        <div className="footer__pagination">
          <button
            type="button"
            className="button button_size_small button_color_blue"
          >
            <span className="button__text">1</span>
          </button>
          <button
            type="button"
            className="button button_size_small button_color_reverse-blue"
          >
            <span className="button__text">2</span>
          </button>
          <button
            type="button"
            className="button button_size_small button_color_reverse-blue"
          >
            <span className="button__text">3</span>
          </button>
          <button
            type="button"
            className="button button_size_small button_color_reverse-blue"
          >
            <span className="button__text">...</span>
          </button>
          <button
            type="button"
            className="button button_size_small button_color_reverse-blue"
          >
            <span className="button__text">18</span>
          </button>
        </div>
        <button
          type="button"
          className="button button_size_small button_color_reverse-blue"
        >
          <span className="button__text">#</span>
        </button>
      </div>
    </div>
  );
}
