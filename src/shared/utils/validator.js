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
  if (dateArr.length !== 3) {
    return false;
  }

  for (const d of dateArr) {
    if (!d.match(/[0-9]/)) {
      return false;
    }
  }

  if (Number.isNaN(parseDate(value))) {
    return false;
  }
  return true;
};

const dateValidValidator = {
  msg: 'Date is not in valid format',
  validate: isDateValid,
};

export const validateFilters = validate({
  dateFrom: [dateValidValidator],
  dateTo: [dateValidValidator],
});

const isFullNameValid = (value) => {
  if (value === '') {
    return false;
  }
  return true;
};

const fullNameValidator = {
  msg: 'Проверьте корректность ввода ФИО',
  validate: isFullNameValid,
};

const isConfirmationCodeValid = (value) => {
  if (value === '123') {
    return true;
  }
  return false;
};

const confirmationCodeValidator = {
  msg: 'Введён не корректный код',
  validate: isConfirmationCodeValid,
};

export const validateOrdersForm = validate({
  fullName: [fullNameValidator],
  confirmationCode: [confirmationCodeValidator],
});
