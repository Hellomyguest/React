/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import { parseDate } from '../../store/slices/orders/ordersSelectors';

const validate = (rules) => (form) => {
  const fields = Object.keys(rules);
  const errors = {};

  for (const field of fields) {
    const validators = rules[field];
    const value = form[field];

    for (const validator of validators) {
      const result = validator.validate(value);
      if (result === false) {
        errors[field] = validator.msg;
        break;
      }
    }
  }
  return errors;
};

const isDateValid = (value) => {
  if (value === '') {
    return true;
  }
  const dateArr = value.split('.');
  if (dateArr.length === 3) {
    return false;
  }
  if (Number.isNaN(parseDate(value))) {
    return false;
  }
  return false;
};

const dateValidValidator = {
  msg: 'Date is not in valid format',
  validate: isDateValid,
};

export const validateFilters = validate({
  dateFrom: [dateValidValidator],
  dateTo: [dateValidValidator],
});
