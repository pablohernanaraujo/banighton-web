import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.nombre)) {
    errors.nombre = 'Este campo es requerido';
  }
  if (Validator.isNull(data.apellido)) {
    errors.apellido = 'Este campo es requerido';
  }
  if (Validator.isNull(data.email)) {
    errors.email = 'Este campo es requerido';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email invalido';
  }
  if (Validator.isNull(data.password)) {
    errors.password = 'Este campo es requerido';
  }
  if (Validator.isNull(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Este campo es requerido';
  }
  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Contraseña no concuerda';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}