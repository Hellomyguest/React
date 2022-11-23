import classNames from 'classnames';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import {
  Button,
  Dropdown,
  Icon,
  Input,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from '../../../../shared/ui';
import {
  ordersActions,
  correctiveOrderSelector,
} from '../../../../store/slices/orders';
import { STATUS_FILTERS } from '../Filters/FilterStatus/FilterStatus';
import { prettifyDate, prettifySum } from '../TableContainer/TableContainer';
import styles from './OrderForm.module.css';
import { validateOrdersForm } from '../../../../shared/utils/validator';

const LOYALITY_MAP = {
  newbie: 'Новичок',
  amateur: 'Любитель',
  professional: 'Профессионал',
  legend: 'Легенда',
};

export function OrderForm({ className }) {
  const dispatch = useDispatch();

  const orderFormRef = useRef();

  const [isCloseOrderFormDropdownOpen, setCloseOrderFormDropdownOpen] =
    useState(false);

  const toggleDropdown = () =>
    setCloseOrderFormDropdownOpen(!isCloseOrderFormDropdownOpen);
  const handleClickCloseDropdown = () => setCloseOrderFormDropdownOpen(false);
  const handleClickAbortCorrecting = () => {
    dispatch(ordersActions.setCorrectiveOrderId(''));
    handleClickCloseDropdown();
  };

  const orderToCorrect = useSelector(correctiveOrderSelector);

  const [orderInformation, setOrderInformation] = useState(orderToCorrect);

  const handleClickToggleDropdown = (bool) => {
    if (isEqual(orderInformation, orderToCorrect)) {
      dispatch(ordersActions.setCorrectiveOrderId(''));
    } else {
      setCloseOrderFormDropdownOpen(!bool);
    }
  };

  const handleChangeCustomer = ({ target: { value } }) => {
    setOrderInformation({ ...orderInformation, customer: value });
  };

  const handleChangeStatus = (status) => () => {
    setOrderInformation({ ...orderInformation, status });
  };

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (orderFormRef.current.contains(target)) {
        return;
      }

      if (isEqual(orderInformation, orderToCorrect)) {
        dispatch(ordersActions.setCorrectiveOrderId(''));
      } else {
        toggleDropdown();
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const [confirmationCode, setConfirmationCode] = useState('');

  const handleChangeConfirmationCode = ({ target: { value } }) =>
    setConfirmationCode(value);

  const handleResetConfirmationCode = () => setConfirmationCode('');

  const [errors, setErrors] = useState({});

  const handleClickSaveOrder = () => {
    const invalidInputs = validateOrdersForm({
      fullName: orderInformation.customer,
      confirmationCode,
    });
    if (Object.keys(invalidInputs).length === 0) {
      setErrors({});
      dispatch(ordersActions.editOrder(orderInformation));
    } else {
      setErrors(invalidInputs);
    }
  };

  return (
    <div ref={orderFormRef}>
      <Table className={classNames(styles._, className)}>
        <TableHeader>
          <TableCell className={styles.tableHeader}>
            <span className={styles.header}>
              Заявка #{orderInformation.orderNumber}
            </span>
            <div className={styles.dropdown}>
              <Dropdown
                isOpen={isCloseOrderFormDropdownOpen}
                setOpen={handleClickToggleDropdown}
                setClose={handleClickCloseDropdown}
                trigger={<Button color="primary" iconType="Xlarge" />}
                overlay={
                  <>
                    <span>Есть несохраненные изменения</span>
                    <Button
                      color="reversePrimary"
                      size="small"
                      maxWidth
                      className={styles.overlayButton}
                      onClick={handleClickAbortCorrecting}
                    >
                      Сбросить
                    </Button>
                    <Button
                      color="reversePrimary"
                      size="small"
                      maxWidth
                      className={styles.overlayButton}
                      onClick={handleClickCloseDropdown}
                    >
                      Остаться
                    </Button>
                  </>
                }
              />
            </div>
          </TableCell>
        </TableHeader>
        <TableBody className={styles.tableBody}>
          <label className={styles.label}>
            Дата и время заказа
            <Input disabled value={prettifyDate(orderInformation.date)} />
          </label>
          <label className={styles.label}>
            ФИО покупателя
            <Input
              value={orderInformation.customer}
              onChange={handleChangeCustomer}
              invalid={errors.fullName}
            />
          </label>
          <Table className={styles.orderTable}>
            <TableHeader>
              <div className={styles.wrapper}>
                <TableCell className={styles.cell}>
                  <span className={styles.text}>Артикул</span>
                </TableCell>
                <TableCell className={styles.cell}>
                  <span className={styles.text}>Наименование</span>
                </TableCell>
                <TableCell className={styles.cell}>
                  <span className={styles.text}>Цена</span>
                </TableCell>
              </div>
            </TableHeader>
            <TableBody>
              {orderInformation.order.map((item) => (
                <TableRow className={styles.row} key={item.vendorCode}>
                  <TableCell className={styles.cell}>
                    {item.vendorCode}
                  </TableCell>
                  <TableCell className={styles.cell}>{item.name}</TableCell>
                  <TableCell className={styles.cell}>
                    {prettifySum(item.price)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className={styles.footer}>
              <span>Итоговая сумма:</span> {prettifySum(orderInformation.sum)}
            </TableFooter>
          </Table>
          <label className={styles.label}>
            Уровень лояльности
            <Input disabled value={LOYALITY_MAP[orderInformation.loyality]} />
          </label>
          <div className={styles.dropdown_status}>
            <Dropdown
              shouldCloseOnClick
              trigger={
                <label className={styles.label}>
                  Статус заказа
                  <Input
                    value={STATUS_FILTERS[orderInformation.status]}
                    readOnly
                    postfix={<Icon iconType="Varrow" className={styles.icon} />}
                  />
                </label>
              }
              overlay={
                <>
                  {Object.keys(STATUS_FILTERS).map((key) => (
                    <Button
                      size="medium"
                      key={key}
                      color={
                        orderInformation.status === key ? 'reversePrimary' : ''
                      }
                      onClick={handleChangeStatus(key)}
                      maxWidth
                      className={styles.changeStatus_button}
                    >
                      {STATUS_FILTERS[key]}
                    </Button>
                  ))}
                </>
              }
              className={styles.overlay_changeStatus}
            />
          </div>
          <label className={styles.label}>
            Код подтверждения
            <Input
              value={confirmationCode}
              onChange={handleChangeConfirmationCode}
              invalid={errors.confirmationCode}
              onReset={handleResetConfirmationCode}
            />
          </label>
        </TableBody>
        <TableFooter className={styles.footer}>
          <span className={styles.error}>{Object.values(errors)[0]}</span>
          <Button
            size="medium"
            color="primary"
            iconType="Checkmark"
            onClick={handleClickSaveOrder}
          >
            Сохранить
          </Button>
        </TableFooter>
      </Table>
    </div>
  );
}
