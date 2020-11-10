/*eslint-disable*/
import { FILE_SIZE_IMG, NUMBER_CURRENCY, NUMBER_PERCENT } from 'constants/index';
import { isAfter, isEqual } from 'date-fns';
import { FieldValidator } from 'formik';
import isEmpty from 'lodash/isEmpty';
import isDate from 'lodash/isDate';
import { isURL } from 'class-validator';

const VALIDATE_CONSTANTS = {
  PASSWORD_MIN_LENGTH: 1,
  PASSWORD_MAX_LENGTH: 255,
  FIRST_NAME_MAX_LENGTH: 20,
  LAST_NAME_MAX_LENGTH: 20,
};

// eslint-disable-next-line
const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// eslint-disable-next-line
const notUnicodeFormat = /[^\u0000-\u00ff]/;
const onlyContainCharacterRegex = /^[a-zA-Z@$!%*#?&\040]+$/;
export const validFileExtensions = ['.jpg', '.jpeg', '.gif', '.png', '.svg'];

export const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

export const phoneNumberRegex = /^\+?([0-9]{2,5})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

export const validatePassword = (value: string): string | undefined => {
  let error;
  if (!value || (isEmpty(value) && isEmpty(value.toString()))) {
    error = 'FORM_ERROR_REQUIRED_FIELD';
  } else if (!value.match(passwordRegex)) {
    error = 'PASSWORD_RULE';
  }
  return error;
};

export const validatePhoneNumber = (value: string): string | undefined => {
  let error;
  if (!value) {
    return;
  }
  if (!value.match(phoneNumberRegex)) {
    error = 'FORM_ERROR_PHONE_NUMBER_INVALID';
  }
  return error;
};

export const validateEmail = (email: string): boolean => {
  const lowerCase = String(email).toLowerCase();
  if (!emailFormat.test(lowerCase) || notUnicodeFormat.test(lowerCase)) return false;

  return true;
};

export const checkValidateEmail: FieldValidator = (value: string): string | undefined => {
  let error;
  if (!value || (isEmpty(value) && isEmpty(value.toString()))) {
    error = 'FORM_ERROR_REQUIRED_FIELD';
  } else if (!validateEmail(value)) {
    error = 'FORM_ERROR_REQUIRED_FIELD_EMAIL_INVALID';
  }

  return error;
};

export const validateRequired: FieldValidator = (value: string): string | undefined => {
  let error;
  if (isEmpty(value)) {
    error = 'FORM_ERROR_REQUIRED_FIELD';
  }
  return error;
};

export const validateRequiredDate: FieldValidator = (value: any) => {
  let error;
  if (!isDate(value)) {
    error = 'FORM_ERROR_REQUIRED_FIELD';
  }
  return error;
};

export const validateMinLength = (minLength: number) => (value: string): boolean => String(value).length >= minLength;

export const validateMaxLength = (maxLength: number) => (value: string): boolean => String(value).length <= maxLength;

export const validateContainLeastCharacter = (value: string): boolean => {
  const character = value.replace(/[0-9]/g, '');
  return onlyContainCharacterRegex.test(character);
};

const containAtLeastNumberRegex = /(?=.*\d)/;
export const validateContainLeastNumber = (value: string): boolean => containAtLeastNumberRegex.test(value);

export const validateAlphaNumeric: FieldValidator = (value: string) => {
  // eslint-disable-next-line
  const alphaNumRegex = /^[a-zA-Z0-9]+$/;
  let error;
  if (!value) {
    error = 'FORM_ERROR_REQUIRED_FIELD';
  } else if (!alphaNumRegex.test(value)) {
    error = 'INVALID_DATA';
  }
  return error;
};

export const validatePoint: FieldValidator = (value: number) => {
  let error;
  if (!value) {
    error = 'FORM_ERROR_REQUIRED_FIELD';
  } else if (String(value).length >= 10) {
    error = 'INVALID_DATA';
  }
  return error;
};

export const validateNumber: FieldValidator = (value: string) => {
  const NumRegex = /^\d+$/;
  let error;
  if (!value) {
    error = 'FORM_ERROR_REQUIRED_FIELD';
  } else if (!NumRegex.test(value)) {
    error = 'INVALID_DATA';
  }
  return error;
};

export const validateNumberLarger0: FieldValidator = (value: string) => {
  const NumRegex = /^\d+$/;
  let error;
  if (!value) {
    error = 'FORM_ERROR_REQUIRED_FIELD';
  } else if (Number(value) === 0 || !NumRegex.test(value)) {
    error = 'INVALID_DATA';
  }
  return error;
};

export const validateNumberDecimal: FieldValidator = (value: string) => {
  const NumberDecimalRegex = /^[1-9]\d*(\.\d+)?$/;
  let error;
  if (!value) {
    error = 'FORM_ERROR_REQUIRED_FIELD';
  } else if (Number(value) === 0 || !NumberDecimalRegex.test(value)) {
    error = 'INVALID_DATA';
  }
  return error;
};

export interface ValidationRule {
  // eslint-disable-next-line @typescript-eslint/ban-types
  validator: Function;
  code: string;
}
export const validationRules = {
  required: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR_REQUIRED_FIELD',
    },
  ],
  email: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR_REQUIRED_FIELD_EMAIL',
    },
    {
      validator: validateEmail,
      code: 'FORM_ERROR_REQUIRED_FIELD_EMAIL_INVALID',
    },
  ],
  password: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR_REQUIRED_FIELD_PASSWORD',
    },
    {
      validator: validateMinLength(VALIDATE_CONSTANTS.PASSWORD_MIN_LENGTH),
      code: 'FORM_ERROR_REQUIRED_FIELD_PASSWORD_MIN_LENGTH',
    },
    {
      validator: validateMaxLength(VALIDATE_CONSTANTS.PASSWORD_MAX_LENGTH),
      code: 'FORM_ERROR_REQUIRED_FIELD_PASSWORD_MAX_LENGTH',
    },
  ],
  terms: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR_REQUIRED_FIELD_TERMS',
    },
  ],
};

export const ValidateExtensionImg = ({
  oInput,
  acceptTypeFile,
}: {
  oInput: HTMLInputElement;
  acceptTypeFile: any;
}): boolean => {
  const sFileName = oInput.value;
  const acceptedTypes = (!isEmpty(acceptTypeFile) && acceptTypeFile?.split(',')) || validFileExtensions;

  if (sFileName.length > 0) {
    let blnValid = false;
    for (let j = 0; j < acceptedTypes.length; j++) {
      const sCurExtension = acceptedTypes[j].trim();
      if (
        sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() ===
        sCurExtension.toLowerCase().trim()
      ) {
        blnValid = true;
        break;
      }
    }

    if (!blnValid) {
      return false;
    }
  }

  return true;
};

export const ValidateSizeImg = (file: any): boolean => {
  const FileSize = file.files[0].size / 1024 / 1024; // in MB
  if (FileSize > FILE_SIZE_IMG) {
    return false;
  } else {
    return true;
  }
};

export const validateNumberDiscountValue: FieldValidator = (value: string) => {
  let error;
  if (!value) {
    error = '';
  } else if (isNaN(Number(value))) {
    error = 'INVALID_DATA';
  } else if (Number(value) === 0 || Number(value) > NUMBER_CURRENCY) {
    error = 'DISCOUNT_VALUE_MUST_BE_SMALLER_THAN_99999999';
  }
  return error;
};

export const validatePercent = (value: string): string => {
  const NumberPercent = /(^100([.]0{1,2})?)$|(^\d{1,2}([.]\d{1,2})?)$/;
  let error = '';
  if (!value) {
    error = '';
  } else if (isNaN(Number(value))) {
    error = 'INVALID_DATA';
  } else {
    if (Number(value) === 0 || Number(value) > NUMBER_PERCENT) {
      error = 'PLEASE_ENTER_THE_NUMBER_FROM_0_TO_100';
    } else if (!NumberPercent.test(value)) {
      error = 'INVALID_DATA';
    }
  }
  return error;
};

export const validateRatio = (value: string): string => {
  const NumberPercent = /(^100([.]0{1,2})?)$|(^\d{1,2}([.]\d{1,2})?)$/;
  let error = '';
  if (isEmpty(value) && isEmpty(value.toString())) {
    error = 'FORM_ERROR_REQUIRED_FIELD';
  } else if (isNaN(Number(value)) || !NumberPercent.test(value)) {
    error = 'INVALID_DATA';
  } else if (Number(value) === 0 || Number(value) > NUMBER_PERCENT) {
    error = 'PLEASE_ENTER_THE_NUMBER_FROM_0.01_TO_100';
  }
  return error;
};

export const validateValueType = (value: string): string => {
  let error = '';
  if (!value) {
    error = 'FORM_ERROR_REQUIRED_FIELD';
  } else if (isNaN(Number(value))) {
    error = 'INVALID_DATA';
  }

  return error;
};

export const validateHexColorValue = (value: string): string => {
  const reg = /^#[0-9A-F]{6}$/i;
  if (isEmpty(value)) {
    return '';
  } else {
    return reg.test(value) ? '' : 'INVALID_DATA';
  }
};

export const validatePersonName = (value: string): string => {
  const personNameRegex = /^[a-zA-Z ]+$/;
  if (!value) {
    return 'FORM_ERROR_REQUIRED_FIELD';
  } else if (!personNameRegex.test(value)) {
    return 'INVALID_DATA';
  }
  return '';
};

export const compareDenomination = (from: number | string, to: number | string): string => {
  if (!isEmpty(from) && !isEmpty(to)) {
    if (Number(from) > Number(to)) {
      return 'INVALID_DATA';
    }
  }
  return '';
};

export const isValidDecimal = (val: string): boolean => {
  return isEmpty(val) || !!Number(val);
};

export const isValidPhone = (val: string): boolean => {
  return (val.length <= 12 && val.length > 7 && !!Number(val)) || false;
};

export const isRegionCode = (val: string): boolean => {
  return (val.length <= 3 && !!Number(val)) || false;
};

export const checkNumberNegative = (value: number): number => {
  return value ? (value < 0 ? -1 : 1) : value;
};

export const validateChallengePhasePeriod = (phaseBefore: Date | undefined) => (
  phaseAfter: Date,
): string | undefined => {
  if (!phaseBefore) {
    return;
  }

  return isAfter(phaseAfter, phaseBefore) || isEqual(phaseAfter, phaseBefore) ? 'PHASE_TIME_NOT_IN_ORDER' : undefined;
};

export const validateUrl = (url: string): string | undefined => {
  if (url && !isURL(url)) {
    return 'INVALID_URL';
  }
};