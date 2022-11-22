/* eslint-disable no-restricted-syntax */
import { parseDate } from '../../store/slices/orders/ordersSelectors';

const isDateValid = (value) => {
  if (value === '') {
    return true;
  }
  const dateArr = value.split('.');
  if (dateArr.length === 3) {
    return false;
  }
  if (new Date(parseDate(value)) === 'Invalid Date') {
    return false;
  }
  return true;
};

export const dateValidValidator = {
  msg: 'Date is not in valid format',
  validate: isDateValid,
};

export const validate = (rules) => (form) => {
  const fields = Object.keys(rules);
  const errors = {};

  for (const field of fields) {
    const validators = rules[fields];
    const value = form[field];

    for (const validator of validators) {
      const result = validator.validate(value, form);
      if (result === false) {
        errors[field] = validator.msg;
        break;
      }
    }
  }
};
