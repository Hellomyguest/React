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
  correctiveOrderId,
  orders,
  ordersActions,
} from '../../../../store/slices/orders';
import { STATUS_FILTERS } from '../Filters/FilterStatus/FilterStatus';
import { prettifyDate, prettifySum } from '../TableContainer/TableContainer';
import styles from './OrderForm.module.css';

const LOYALITY_MAP = {
  newbie: 'Новичок',
  amateur: 'Любитель',
  professional: 'Профессионал',
  legend: 'Легенда',
};

export function OrderForm({ className }) {
  const dispatch = useDispatch();
  const orderIdToCorrect = useSelector(correctiveOrderId);
  const order = useSelector(orders);

  const orderFormRef = useRef();

  const [isCloseOrderFormDropdownOpen, setCloseOrderFormDropdownOpen] =
    useState(false);

  const handleClickOpenDropdown = () =>
    setCloseOrderFormDropdownOpen(!isCloseOrderFormDropdownOpen);
  const openDropdown = () =>
    setCloseOrderFormDropdownOpen(!isCloseOrderFormDropdownOpen);
  const handleClickCloseDropdown = () => setCloseOrderFormDropdownOpen(false);
  const handleClickAbortCorrecting = () => {
    dispatch(ordersActions.setCorrectiveOrderId(''));
    handleClickCloseDropdown();
  };

  const getOrderToCorrect = () =>
    order.filter(({ id }) => id === orderIdToCorrect)[0];

  const orderState = {
    id: getOrderToCorrect().id,
    customer: getOrderToCorrect().customer,
    date: getOrderToCorrect().date,
    status: getOrderToCorrect().status,
    amount: getOrderToCorrect().amount,
    orderNumber: getOrderToCorrect().orderNumber,
    order: getOrderToCorrect().order,
    sum: getOrderToCorrect().sum,
    loyality: getOrderToCorrect().loyality,
  };
  const [orderInformation, setOrderInformation] = useState(orderState);

  const handleChangeCustomer = (e) => {
    setOrderInformation({ ...orderInformation, customer: e.target.value });
  };

  const handleChangeStatus = (status) => () => {
    setOrderInformation({ ...orderInformation, status });
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!orderFormRef.current.contains(e.target)) {
        if (isEqual(orderInformation, orderState)) {
          dispatch(ordersActions.setCorrectiveOrderId(''));
        } else {
          openDropdown();
        }
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const [сonfirmationCode, setConfirmationCode] = useState('');

  const handleChangeConfirmationCode = (e) =>
    setConfirmationCode(e.target.value);

  const handleResetConfirmationCode = () => setConfirmationCode('');

  const [invalidInputs, setInvalidInputs] = useState([]);

  const checkIfInputsAreValid = () => {
    const errors = [];
    if (orderInformation.customer === '') {
      errors.push('customer');
    }
    if (сonfirmationCode !== '123') {
      errors.push('confirmationCode');
    }
    if (errors.length === 0) {
      setInvalidInputs([]);
    } else {
      setInvalidInputs(errors);
    }
    return errors;
  };

  const handleClickCorrectOrder = () => {
    const errors = checkIfInputsAreValid();
    if (errors.length === 0)
      dispatch(ordersActions.correctOrder(orderInformation));
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
                setOpen={handleClickOpenDropdown}
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
              invalid={invalidInputs.includes('customer')}
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
              Итоговая сумма: {prettifySum(orderInformation.sum)}
            </TableFooter>
          </Table>
          <label className={styles.label}>
            <Input disabled value={LOYALITY_MAP[orderInformation.loyality]} />
          </label>
          <div className={styles.dropdown_status}>
            <Dropdown
              closeOnClick
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
              value={сonfirmationCode}
              onChange={handleChangeConfirmationCode}
              invalid={invalidInputs.includes('confirmationCode')}
              onReset={handleResetConfirmationCode}
            />
          </label>
        </TableBody>
        <TableFooter className={styles.footer}>
          {invalidInputs.length !== 0 && (
            <span className={styles.error}>Исправте ошибки</span>
          )}
          <Button
            size="medium"
            color="primary"
            iconType="Checkmark"
            onClick={handleClickCorrectOrder}
          >
            Сохранить
          </Button>
        </TableFooter>
      </Table>
    </div>
  );
}
