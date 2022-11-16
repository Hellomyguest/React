import classNames from 'classnames';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import {
  Button,
  ControlWithLabel,
  Dropdown,
  Icon,
  Input,
  Radio,
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

  const handleChangeStatus = (e) => {
    setOrderInformation({ ...orderInformation, status: e.target.value });
  };

  useEffect(() => {
    const handleClick = isEqual(orderInformation, orderState)
      ? (e) => {
          if (!orderFormRef.current.contains(e.target)) {
            dispatch(ordersActions.setCorrectiveOrderId(''));
          }
        }
      : (e) => {
          if (!orderFormRef.current.contains(e.target)) {
            handleClickOpenDropdown();
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

  const [invalidInputs, setInvalidInputs] = useState([]);

  const checkIfInputsAreValid = () => {
    const arr = [];
    if (orderInformation.customer === '') arr.push('customer');
    if (сonfirmationCode !== '123') arr.push('confirmationCode');
    if (arr.length === 0) setInvalidInputs([]);
    else setInvalidInputs(arr);
  };

  const handleClickCorrectOrder = () => {
    checkIfInputsAreValid();
    if (invalidInputs.includes('confirmationCode')) {
      dispatch(ordersActions.correctOrder(orderInformation));
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
          <div className={styles.dropdown}>
            <Dropdown
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
                    <ControlWithLabel
                      key={key}
                      control={
                        <Radio
                          value={key}
                          checked={orderInformation.status === key}
                          className={styles.radio}
                          onChange={handleChangeStatus}
                        />
                      }
                      label={STATUS_FILTERS[key]}
                    />
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
            />
          </label>
        </TableBody>
        <TableFooter className={styles.footer}>
          {invalidInputs.length !== 0 && (
            <span className={styles.error}>Ошибка или индикатор загрузки</span>
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
