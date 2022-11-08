import * as yup from 'yup';

export const inputSchema = yup.object().shape({
  name: yup
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
    .min(5, 'Debe tener al menos 5 caracteres')
    .required('Campo requerido'),
});
