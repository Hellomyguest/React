import React, { useState } from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../../../../shared/utils/usePagination';
import styles from './Pagination.module.css';
import { Button, Dropdown, Input } from '../../../../shared/ui';

export function Pagination({
  onPageChange,
  onKeyPress,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) {
  // Контроль input'а выбора страницы
  const [inputValue, setInputValue] = useState('');
  const handleChangeInputValue = ({ target: { value } }) =>
    setInputValue(value);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleClickOpenDropdown = (bool) => setDropdownOpen(!bool);

  const lastPage = Math.ceil(totalCount / pageSize);
  const isInputInPagesRange = +inputValue <= lastPage;

  const handleKeyPress = (e) => {
    if (isInputInPagesRange) {
      onKeyPress(e);
      if (e.key === 'Enter') {
        setDropdownOpen(false);
        setInputValue('');
      }
    }
  };

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className={classnames(styles._, className)}>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={pageNumber + index} className={styles.dots}>
              &#8230;
            </div>
          );
        }

        return (
          <Button
            key={pageNumber}
            size="small"
            color="reversePrimary"
            className={classnames({
              [styles.button_selected]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Button>
        );
      })}
      <div className={styles.dropdown}>
        <Dropdown
          isOpen={isDropdownOpen}
          setOpen={handleClickOpenDropdown}
          className={styles.dropdown_overlay}
          trigger={
            <Button size="small" color="reversePrimary">
              #
            </Button>
          }
          overlay={
            <>
              <div />
              <label className={styles.label}>
                Номер страницы
                <Input
                  invalid={!isInputInPagesRange}
                  type="number"
                  value={inputValue}
                  onChange={handleChangeInputValue}
                  onKeyPress={handleKeyPress}
                  placeholder="Введите номер"
                />
              </label>
            </>
          }
        />
      </div>
    </div>
  );
}

export default Pagination;
