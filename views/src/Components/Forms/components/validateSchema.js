import * as yup from 'yup';

export const inputSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .required('Campo requerido'),
  lastName: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .required('Campo requerido'),
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Campo requerido'),
  password: yup
    .string()
    .min(4, 'Debe tener al menos 4 caracteres')
    .required('Campo requerido'),
});

export const inputLogin = yup.object().shape({
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Campo requerido'),
  password: yup
    .string()
    .min(4, 'Debe tener al menos 4 caracteres')
    .required('Campo requerido'),
});

export const inputTransaction = yup.object().shape({
  amount: yup
    .number()
    .positive('Debe ser un monto positivo')
    .required('Campo requerido'),
  concept: yup
    .string(),
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Campo requerido'),
});
